<!-- 搜索页面 -->
<template>
	<view class="search">
		<!-- 顶部搜索框 -->
		<view class="search-box">
			<view class="search-form round">
				<view class="search-box-icon search-icon">
					<icon type="search" size="16" />
				</view>
				<input
				    class="search-input" type="text" confirm-type="search"
					:placeholder="isDefault ? defaultKeyword : placeholder" @input="inputChange"
					@confirm="triggerConfirm" :focus="isFocus" v-model="keyword" @focus="focus" @blur="blur"></input>
				<view class="search-box-icon search-clear" v-show="showClose" @tap="clearWord">
					<icon type="clear" size="16" />
				</view>
				<view class="search-cancel" v-show="showCancel" @click="cancel">
					取消
				</view>
			</view>
		</view>
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
			<view class="search-type">
				<view style="background: #FFFFFF;">
					<view class="search-type-box">
						<view class="search-list" @click="isActive = 0">
							<text :class="isActive==0 ? 'active' : ''">歌曲</text>
						</view>
						<view class="search-list" @click="isActive = 1">
							<text :class="isActive==1 ? 'active' : ''">歌单</text>
						</view>
					</view>
				</view>
			</view>
			<searchsonglist v-show="isActive==0" :songList="songList"></searchsonglist>
			<searchplaylist v-show="isActive==1" :playlist="playlist"></searchplaylist>
		</view>
	</view>
</template>

<script>
	import {
		apiSerchSuggest,
		apiSearchDefault,
		apiSearch
	} from '../../api/search.js'
	import searchKeyword from './components/searchKeyword.vue'
	import searchsonglist from "./components/searchsonglist.vue"
	import searchplaylist from "./components/searchplaylist.vue"
	export default {
		data() {
			return {
				searchType:1,
				isActive: 0,
				keyword: "",
				isFocus: false, //焦点
				isShowKeywordList: false,//显示搜索列表
				isShowContent: true, //是否显示内容
				showCancel: false, //是否显示取消
				showClose: false,  //是否显示清除按钮
				keywordList: [],
				defaultKeyword: '',
				isDefault: true, //是否有搜索建议词
				placeholder: "搜索你想听的歌曲",
				isShowSongList:false,
				songList:[], //歌曲列表
				playlist:[] ,//歌单列表
				searchTip:"",
			}
		},
		components: {
			searchKeyword,
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
						this.isDefault = false;
						return;
					};
					this.defaultKeyword = word;
				});
				// console.log(this.isFocus)
			},
			blur() {
				uni.hideKeyboard();
				this.showClose = !!(this.keyword)
			},
			focus() {
				if(!this.isShowSongList){
					this.showCancel = true;
					this.showClose = !!(this.keyword);
					if (!this.isShowContent) {
						uni.pageScrollTo({
							duration: 100,
							scrollTop: 0
						})
					}
					this.isShowKeywordList = true;
					this.keywordList = [];
					this.isShowContent = true;
					// this.isShowSongList=false;
				}else{
					this.isFocus = true;
					console.log('fe')
				}
			},
			//删除搜索框内容
			clearWord() {
				this.isShowKeywordList = false;
				// console.log('this.keyword')
				this.keyword = '';
				this.isFocus = true;
				this.showCancel = true;
				this.showClose = false;
			},
			//取消搜索
			cancel() {
				this.isShowKeywordList = false;
				this.keyword = '';
				this.isShowContent = true;
				this.showCancel = false;
				this.showClose = false;
			},
            //搜索
			triggerConfirm(e) {
				if (this.keyword == '' && this.defaultKeyword != '') {
					// this.showClose = false;
					this.doSearch(this.defaultKeyword);
					// console.log(this.showClose)
				} else if (this.keyword == '' && this.defaultKeyword == '') {
					uni.showToast({
						icon: 'none',
						title: '搜索词不能为空'
					})
					return
				}
				this.doSearch(this.keyword)
			},
			//监听输入
			async inputChange(event) {
				//兼容引入组件时传入参数情况
				const keyword = event.detail ? event.detail.value : event;
				// console.log('this:' + this.keyword, 'in:' + keyword)
				this.showClose = !!(keyword)

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
				this.keyword = keyword ? keyword : this.keyword;
				this.$refs.child.saveKeyword(keyword); //保存为历史 
				//1为单曲 //1000歌单 //1004 mv
				this.getSongList(keyword);
				this.isShowSongList = true;
				this.showCancel = false;
				this.showClose = false;
				// console.log(this.isFocus)

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
			.search-form {
				width: 90%;
				margin: 0 auto;
				position: relative;
				height: 90rpx;
				display: flex;

				.search-box-icon {
					position: absolute;
					height: 70rpx;
					line-height: 70rpx;
				}

				.search-icon {
					left: 30rpx;
				}

				.search-input {
					background: #f2f2f2;
					height: 70rpx;
					border-radius: 35rpx;
					padding-left: 80rpx;
					flex: 1;
					font-size: 32rpx;
				}

				.search-clear {
					right: 120rpx;
					width: 70rpx;
					text-align: center;
				}

				.search-cancel {
					height: 70rpx;
					width: 100rpx;
					line-height: 70rpx;
					font-size: 32rpx;
					text-align: center;

				}
			}
		}
	    .search-type{
			padding-top: 100rpx;
			width: 100%;
			position: fixed;
			z-index: 999;
			border-bottom: 1px solid #f2f2f2;
			.search-type-box{
				display: flex;
				width: 90%;
				margin: 0 auto;
				.search-list{
					width: 50%;
					text-align: center;
					height: 100rpx;
					line-height: 100rpx;
					color: #6b6b6b;
				}
			}
			
		}
	}
</style>
