<!-- 搜索页面 -->
<template>
	<view class="search">
		<nav-bar></nav-bar>
		<!-- 顶部搜索框 -->
		<view class="search-box">
			<view class="search__box flex-center">
				<view class="search__box-icon-search flex-center">
					<slot name="searchIcon">
						<uni-icons color="#6b6b6b" size="40" type="search" />
					</slot>
				</view>
				<input :focus="isFocus" :placeholder="defaultKeyword ? defaultKeyword:placeholder" 
				    class="search__box-search-input song-text"
					confirm-type="search" type="text" v-model="keyword" 
					@input="inputChange"
					@confirm="triggerConfirm" 
					@blur="blur"
					@focus="focus" />
				<view v-show="showClear" class="search__box-icon-clear" @click="clear">
					<slot name="clearIcon">
						<uni-icons color="#c0c4cc" size="40" type="clear" />
					</slot>
				</view>
			</view>
			<text @click="cancel" class="searchbox__cancel" v-if="showCancel">取消</text>
		</view>
		<searchKeyword v-show="!isShowSongList" :keyword="keyword" :isShowKeywordList="isShowKeywordList"
			:isShowContent="isShowContent" :keywordList="keywordList" :searchTip="searchTip" ref="child"
			@search="doSearch"></searchKeyword>
		<!-- 搜索结果 -->
		<view v-show="isShowSongList">
			<typeTab class="search-tab" :style="{top:(topHeight+110)+'rpx'}" :tab="tab" :isActive="isActive" @tab="switchNav"></typeTab>
			<swiper class="search-list" :current="isActive" @change="handleChange" :style="{height:swiperHeight+'rpx'}">
				<swiper-item>
					<searchsonglist :height="swiperHeight" class="search-songlist" :songList="songList"></searchsonglist>
				</swiper-item>
				<swiper-item>
					<searchplaylist :height="swiperHeight" class="search-playlist" :playlist="playlist"></searchplaylist>
				</swiper-item>
			</swiper>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import {
		apiSerchSuggest,
		apiSearchDefault,
		apiSearch
	} from '../../api/search.js'
	import {
		numberFormat
	} from '../../utils/numberFormat.js'
	import searchKeyword from './components/searchKeyword.vue'
	import typeTab from '../../components/typeTab.vue'
	import searchsonglist from "./components/searchsonglist.vue"
	import searchplaylist from "./components/searchplaylist.vue"
	export default {
		data() {
			return {
				isActive: 0,
				tab: ['单曲', '歌单'],
				keyword: "",
				isFocus: false, //焦点
				isShowKeywordList: false, //显示搜索列表
				isShowContent: true, //是否显示内容
				showCancel: false, //是否显示取消
				showClear: false,  //是否显示清除按钮
				keywordList: [],
				placeholder:'搜索你想听的歌曲',
				defaultKeyword: '',
				isShowSongList: false,
				songList: [], //歌曲列表
				playlist: [], //歌单列表
				searchTip: "",
				height:0,//高度
				swiperHeight:0,
			}
		},
		components: {
			searchKeyword,
			typeTab,
			searchsonglist,
			searchplaylist
		},
		computed:{
			...mapGetters(['topHeight'])
		},
		created() {
			this.loadDefaultKeyword();
			uni.getSystemInfo({
				success: (res) => {
					let item = (750 / res.windowWidth);
					this.swiperHeight = ((res.windowHeight * item)-this.topHeight - 210);
				}
			});
		},
		onLoad(param) {
			if(param.keyword){
				this.doSearch(param.keyword);
			}
		},
		methods: {
			//选项卡切换
			switchNav(index){
				this.isActive=index;
			},
			handleChange(e) {
				let vm = this;
				vm.isActive = e.mp.detail.current;
			},
			//加载默认搜索关键字
			async loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				await apiSearchDefault().then(res => {
					let word = res.data.realkeyword;
					if (word == null || word.length == 0) {
						return;
					};
					this.defaultKeyword = word;
				});
			},
			blur() {
				uni.hideKeyboard();
				this.showClear = false;
				// console.log('失去焦点')
			},
			focus() {
				// console.log('获取焦点')
				this.isFocus = true;
				this.isShowSongList = false;
				this.songList = [];
				this.playlist = [];
				this.showCancel = true;
				if(this.keyword){
					this.showClear = true;
				}
				if (!this.isShowContent) {
					uni.pageScrollTo({
						duration: 100,
						scrollTop: 0
					})
				}
				this.isShowKeywordList = true;
				this.keywordList = [];
			},
			clear(){
				// this.isFocus = false;
				this.keyword = '';
				this.searchTip = "";
				this.showClear = false;
				this.isShowContent = false;
				this.isShowKeywordList = false;
			},
			//取消搜索
			cancel() {
				this.isFocus = false;
				this.keyword = '';
				this.isShowContent = true;
				this.isShowKeywordList = false;
				this.showCancel = false;
				this.searchTip = "";
			},
			//搜索
			triggerConfirm(e) {
				// this.keyword = e.value;
				// console.log(e)
				if (this.keyword === '' && this.defaultKeyword !== '') {
					this.doSearch(this.defaultKeyword);
				} else if (this.keyword === '' && this.defaultKeyword === '') {
					uni.showToast({
						icon: 'none',
						title: '搜索词不能为空'
					})
					return;
				} else if (this.keyword !== '') {
					this.doSearch(this.keyword)
				}
			},
			//监听输入
			async inputChange(e) {
				//兼容引入组件时传入参数情况
				const keyword = e.detail.value;
				this.keyword = keyword;
				this.showClear = !!(keyword);
                // console.log(this.keyword)
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
					this.searchTip = "搜索“" + this.keyword + "”";
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
				this.getSongList(keyword);
				this.isFocus = false;
				this.isShowSongList = true;
				this.showCancel = false;
			},
			//获取歌曲歌单
			async getSongList(keyword) {
				let par_0 = {
					keywords: keyword,
					limit: 25,
					type: 1
				};
				let par_1 = {
					keywords: keyword,
					limit: 25,
					type: 1000
				};
				await Promise.all([
					apiSearch(par_0), apiSearch(par_1)
				]).then(res => {
					this.songList = res[0].result.songs.map(item => {
						let singer = item.artists.map(t => {
							return t.name
						}).join('/');
						let desc = singer + ' · ' + item.name;
						return {
							id: item.id,
							name: item.name,
							singer:singer,
							desc: desc,
							desc
						}
					});
					this.playlist = res[1].result.playlists.map(item => {
						let desc = item.trackCount + '首歌曲 ' + item.creator.nickname + ' ' +
							numberFormat(item.playCount) + '播放';
						return {
							id: item.id,
							name: item.name,
							picUrl: item.coverImgUrl,
							desc: desc,
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
		.search-tab{
			position: fixed;
			width: 100%;
			z-index: 100;
		}
		.search-box {
			position: fixed;
			z-index: 999;
			background: $uni-bg-color-grey;
			display: flex;
			flex-direction: row;
			width: 675rpx;
			height: 110rpx;
			padding: 0 37.5rpx;

			.search__box {
				margin-top: $uni-spacing-col-base;
				background: $uni-bg-color;
				box-sizing: border-box;
				overflow: hidden;
				position: relative;
				flex: 1;
				flex-direction: row;
				height: $uni-searchbar-height;
				padding: 10rpx 16rpx 10rpx 0;
				// border: 0.5px solid #6b6b6b;
				border-radius: $uni-searchbar-height/2;

				.search__box-icon-search {
					flex-direction: row;
					// width: 32px;
					padding: 0 16rpx;
					color: $uni-text-color;
				}

				.search__box-search-input {
					flex: 1;
				}

				.search__box-icon-clear {
					align-items: center;
					line-height: 48rpx;
					padding-left: 16rpx;
				}
			}

			.searchbox__cancel {
				padding-left: $uni-spacing-row-base;
				line-height: 110rpx;
				font-size: $uni-font-size-sm;
				// color: $uni-text-color;
			}
		}
	    .search-list{
			position: relative;
			top: 220rpx;
			background-color: $uni-bg-color;
		}
	}
</style>
