<!-- 搜索页面 -->
<template>
	<view class="search">
		<!-- 顶部搜索框 -->
	    <searchBox
		class="search-box"
		:value="keyword"
		:placeholder="defaultKeyword"
		:focus="isFocus"
		:cancelButton="showCancel"
		@confirm="triggerConfirm" 
		@input="inputChange"
		@focus="focus" 
		@blur="blur"
		@cancel="cancel"
		@clear = "clear"
		></searchBox>
		<searchKeyword
		v-show="!isShowSongList"
		:keyword="keyword"
		:isShowKeywordList="isShowKeywordList"
		:isShowContent="isShowContent"
		:keywordList="keywordList"
		:searchTip="searchTip"
		ref="child"
		@search="doSearch"></searchKeyword>
		<!-- 搜索结果 -->
		<view v-show="isShowSongList">
			<typeTab
			:top="100"
			:tab="tab"
			:isActive="isActive"
			@tab='isActive = 0'
			@toTab="isActive = 1"
			></typeTab>
			<searchsonglist v-show="isActive==0" :songList="songList"></searchsonglist>
			<searchplaylist v-show="isActive==1" :playlist="playlist"></searchplaylist>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import {
		apiSerchSuggest,
		apiSearchDefault,
		apiSearch
	} from '../../api/search.js'
	import searchBox from './components/searchBox.vue'
	import searchKeyword from './components/searchKeyword.vue'
	import typeTab from '../../components/typeTab.vue'
	import searchsonglist from "./components/searchsonglist.vue"
	import searchplaylist from "./components/searchplaylist.vue"
	export default {
		data() {
			return {
				isActive: 0,
				tab:['单曲','歌单'],
				keyword: "",
				isFocus: false, //焦点
				isShowKeywordList: false,//显示搜索列表
				isShowContent: true, //是否显示内容
				showCancel: false, //是否显示取消
				// showClose: false,  //是否显示清除按钮
				keywordList: [],
				defaultKeyword: '',
				isShowSongList:false,
				songList:[], //歌曲列表
				playlist:[] ,//歌单列表
				searchTip:"",
			}
		},
		components: {
			searchBox,
			searchKeyword,
			typeTab,
			searchsonglist,
			searchplaylist
		},
		created(){
			this.loadDefaultKeyword();
		},
		methods: {
			//加载默认搜索关键字
			async loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				await apiSearchDefault().then(res => {
					// console.log(res)
					let word = res.data.realkeyword;
					if (word == null || word.length == 0) {
						return;
					};
					this.defaultKeyword = word;
				});
				// console.log(this.isFocus)
			},
			blur() {
				uni.hideKeyboard();
				// this.showClose = false;
				// console.log('失去焦点')
			},
			focus() {
				// console.log('获取焦点')
				this.isFocus = true;
				this.isShowSongList = false;
				this.songList=[];
				this.playlist=[];
				this.showCancel = true;
				if (!this.isShowContent) {
					uni.pageScrollTo({
						duration: 100,
						scrollTop: 0
					})
				}
				this.isShowKeywordList = true;
				this.keywordList = [];
			},
			// clear(){
			// 	// this.isFocus = true;
			// 	console.log('this.keyword')
			// 	this.keyword = '';
			// 	this.showClose = false;
			// 	// this.isShowContent = false;
			// 	// this.isShowKeywordList = true;
			// },
			//取消搜索
			cancel() {
				this.isFocus = false;
				this.isShowContent = true;
				this.isShowKeywordList = false;
				this.showCancel = false;
				// this.showClose = false;
				this.searchTip = "";
			},
            //搜索
			triggerConfirm(e) {
				this.keyword = e.value;
				if (this.keyword == '' && this.defaultKeyword != '') {
					this.doSearch(this.defaultKeyword);
				} else if (this.keyword == '' && this.defaultKeyword == '') {
					uni.showToast({
						icon: 'none',
						title: '搜索词不能为空'
					})
					return
				}else if(this.keyword != ''){
					this.doSearch(this.keyword)
				}
			},
			//监听输入
			async inputChange(value) {
				//兼容引入组件时传入参数情况
				const keyword = value;
				this.keyword = keyword;
				// console.log('this:' + this.keyword)
				// this.showClose = !!(keyword);

				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false;
					return;
				}
				await apiSerchSuggest({
					type: 'mobile',
					keywords: keyword.trim()
				}).then(res => {
					const keywords = res.result.allMatch.map(val => val.keyword)
					this.keywordList = this.drawCorrelativeKeyword(keywords, keyword);
					this.isShowKeywordList = true;
					this.searchTip = "搜索“"+this.keyword+"”";
				})
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				let len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row.replace(keyword, "<span style='color: #1cbbb4;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row,
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//执行搜索
			doSearch(keyword) {
				// this.showClose = !(keyword);
				this.keyword = keyword ? keyword : this.keyword;
				this.$refs.child.saveKeyword(keyword); //保存为历史
				this.getSongList(keyword);
				this.isFocus = false;
				this.isShowSongList = true;
				this.showCancel = false;
			},
			//获取歌曲歌单
		    async getSongList(keyword) {
		    	let par_0 = {
		    		keywords: keyword,
		    		limit:25,
					type:1
		    	};
				let par_1 = {
					keywords: keyword,
					limit:25,
					type:1000
				};
				await Promise.all([
					apiSearch(par_0),apiSearch(par_1)
				]).then(res=>{
					this.songList = res[0].result.songs.map(item => {
						let desc =  item.artists.map(t => {
							return t.name
						}).join('/') +' · '+item.name;
						return {
							id:item.id,
							name:item.name,
							desc:desc,
							desc
						}
					});
					this.playlist = res[1].result.playlists.map(item => {
						let desc =  item.trackCount+'首歌曲 ' +item.creator.nickname +' ' + item.playCount+'播放';
						return {
							id:item.id,
							name:item.name,
							picUrl:item.coverImgUrl,
							desc:desc,
					        desc
						}
					})
				})
				this.$forceUpdate();
		    },
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		.search-box {
			position: fixed;
			z-index: 999;
			width: 100%;
			padding-top: 20rpx;
            background: #FFFFFF;
		}
	}
</style>
