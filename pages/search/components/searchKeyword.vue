<!-- 显示历史搜索，热门搜索，搜索建议内容组件 -->
<template>
	<view class="list-box"  v-if="isShowContent">
		<view class="search-keyword">
			<!-- 搜索建议 -->
			<scroll-view class="keyword-list-box" v-if="isShowKeywordList" scroll-y>
				<view class="keyword-search">
					{{searchTip}}
				</view>
				<block v-for="(row,index) in keywordList" :key="index">
					<view class="keyword-entry" hover-class="keyword-entry-tap">
						<icon type="search" size="16"></icon>
						<view class="keyword-text" @tap.stop="doSearch(keywordList[index].keyword)">
							<rich-text :nodes="row.htmlStr"></rich-text>
						</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<!-- 历史搜索 -->
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view class="keyword-title">历史搜索</view>
						<view>
							<image class="keyword-image" @tap="oldDelete" src="../../../static/images/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view class="keyword-hisview view" v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				<!-- 热门搜索 -->
				<view style="padding-bottom: 40rpx;" class="keyword-block">
					<view class="keyword-list-header">
						<view class="keyword-title">热门搜索</view>
						<view>
							<image class="keyword-image" @tap="hotToggle" :src="'../../../static/images/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view class="keyword-hotview view" v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
						<view :class="['keyword-index',index < 3 ?'hot-active':'']">
							{{index+1}}
						</view>
						<view class="keyword-txt">
							{{keyword}}
						</view>
						</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view style="font-size: 28rpx;color: #6b6b6b;">当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		apiSearchHot
	} from '../../../api/search.js'
	export default{
		props:{
			keyword:{
				type:String,
				default:''
			},
			isShowKeywordList:{
				type:Boolean,
				default:false
			},
			isShowContent:{
				type:Boolean,
				default:true
			},
			keywordList:{
				type:Array,
				default:[]
			},
			searchTip:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				hotKeywordList:[],
				oldKeywordList:[],
				forbid: '',
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				this.loadOldKeyword();
				this.loadHotKeyword();
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						let OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				apiSearchHot().then(res => {
					const arr = res.result.hots;
					this.hotKeywordList = arr.map(val => val.first);
					// console.log(this.hotKeywordList)
				})
			},
			//顶置关键字
			setKeyword(index) {
				this.keyword = this.keywordList[index].keyword;
			},
			//调用父组件搜索方法
			doSearch(keyword){
				this.$emit('search',keyword);
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							// console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							// console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						let OldKeys = JSON.parse(res.data);
						let findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						let OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-box {
		padding-top: 100rpx;
		height: 100%;
		width: 100%;
		background-color: #FFFFFF;
		.keyword-list-box {
			height: calc(100vh - 110rpx);
			padding-top: 10rpx;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #fff;
			width: 90%;
			margin: 0 auto;
			.keyword-search{
				font-size: 36rpx;
				padding: 20rpx 0;
				color: #8dc63f;
			}
			.keyword-entry-tap {
				background-color: #eee;
			}
			
			.keyword-entry {
				height: 80rpx;
				margin: 10rpx 0;
				font-size: 32rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.keyword-text{
					height: 80rpx;
					display: flex;
					align-items: center;
					padding-left: 20rpx;
					flex: 1;
				}
			}
		}
	    .keyword-box {
	    	height: calc(100vh - 110rpx);
	    	border-radius: 20rpx 20rpx 0 0;
	    	background-color: #fff;
	    	.keyword-block {
	    		padding: 10rpx 0;
	    		.keyword-list-header {
	    			width: 94%;
	    			padding: 10rpx 3%;
	    			font-size: 27rpx;
	    			display: flex;
	    			justify-content: space-between;
					.keyword-title{
						font-size: 36rpx;
						font-weight: bold;
					}
	    			.keyword-image {
	    				width: 40rpx;
	    				height: 40rpx;
	    			}
	    		}
	    		.keyword {
	    			width: 94%;
	    			padding: 3px 3%;
	    			display: flex;
	    			flex-flow: wrap;
	    			justify-content: flex-start;
					.view{
						display: flex;
						padding: 0 20rpx;
					}
					.keyword-hisview{
						margin: 10rpx 20rpx 10rpx 0;
						justify-content: center;
						align-items: center;
						border-radius: 60rpx;
						height: 60rpx;
						font-size: 28rpx;
						background-color: #f2f2f2;
						color: #6b6b6b;
					}
	    			.keyword-hotview {
						margin: 15rpx 0;
						width: 100%;
	    				font-size: 32rpx;
						font-weight: bold;
						.keyword-index{
							width: 60rpx;
							color: #6b6b6b;
							&.hot-active{
								color: red;
							}
						}
	    			}
	    			
	    		}
	    		.hide-hot-tis {
	    			display: flex;
	    			justify-content: center;
	    			font-size: 28rpx;
	    			color: #6b6b6b;
	    		}
	    	}
		}
	}
</style>
