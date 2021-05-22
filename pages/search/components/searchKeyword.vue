<!-- 显示历史搜索，热门搜索，搜索建议内容组件 -->
<template>
	<view class="list-box box-width"  v-if="isShowContent">
		<view class="search-keyword">
			<!-- 搜索建议 -->
			<scroll-view class="keyword-list-box box-width" v-if="isShowKeywordList" scroll-y>
				<view class="keyword-search">
					{{searchTip}}
				</view>
				<block v-for="(row,index) in keywordList" :key="index">
					<view class="keyword-entry flex-align" hover-class="keyword-entry-tap">
						<icon type="search" size="16"></icon>
						<view class="keyword-text flex-align" @tap.stop="doSearch(keywordList[index].keyword)">
							<rich-text :nodes="row.htmlStr"></rich-text>
						</view>
					</view>
				</block>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<!-- 历史搜索 -->
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view class="title">历史搜索</view>
						<view  @tap="oldDelete">
							<uni-icons type="trash" color="#6b6b6b" size="40"></uni-icons>
						</view>
					</view>
					<view class="keyword">
						<view class="keyword-hisview song-text view flex-align" v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				<!-- 热门搜索 -->
				<view style="padding-bottom: 40rpx;" class="keyword-block">
					<view class="keyword-list-header">
						<view class="title">热门搜索</view>
						<view @tap="hotToggle">
							<uni-icons :type="isforbid?'eye-slash':'eye'" color="#6b6b6b" size="40"></uni-icons>
						</view>
					</view>
					<view class="keyword" v-if="!isforbid">
						<view class="keyword-hotview name view flex-align" v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
						<view :class="['keyword-index',index < 3 ?'hot-active':'']">
							{{index+1}}
						</view>
						<view class="name">
							{{keyword}}
						</view>
						</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view class="song-text">当前搜热门搜索已隐藏</view>
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
				isforbid: false,
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
				this.isforbid = !this.isforbid;
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
		.keyword-list-box {
			height: calc(100vh - 110rpx);
			padding-top: $uni-spacing-col-sm;
			border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
			.keyword-search{
				font-size: $uni-font-size-lg;
				padding: 20rpx 0;
				color: $uni-color-success;
			}
			.keyword-entry-tap {
				background-color: $uni-bg-color-hover;
			}
			
			.keyword-entry {
				height: 80rpx;
				margin: $uni-spacing-col-sm 0;
				font-size: $uni-font-size-base;
				justify-content: space-between;
				.keyword-text{
					height: 80rpx;
					padding-left: $uni-spacing-row-base;
					flex: 1;
				}
			}
		}
	    .keyword-box {
	    	height: calc(100vh - 110rpx);
	    	border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
	    	.keyword-block {
	    		padding: $uni-spacing-col-sm 0;
	    		.keyword-list-header {
	    			font-size: $uni-font-size-sm;
	    			display: flex;
	    			justify-content: space-between;
					margin-bottom: $uni-spacing-col-sm;
	    		}
	    		.keyword {
	    			display: flex;
	    			flex-flow: wrap;
	    			justify-content: flex-start;
					.view{
						padding: 0 $uni-spacing-row-base;
					}
					.keyword-hisview{
						margin: $uni-spacing-col-sm $uni-spacing-row-base $uni-spacing-col-sm 0;
						border-radius: 60rpx;
						height: 60rpx;
						background-color: $uni-bg-color;
					}
	    			.keyword-hotview {
						margin: $uni-spacing-col-base 0;
						width: 100%;
						.keyword-index{
							width: 60rpx;
							color: $uni-text-color;
							&.hot-active{
								color: red;
							}
						}
	    			}
	    			
	    		}
	    		.hide-hot-tis {
	    			display: flex;
	    			justify-content: center;
	    		}
	    	}
		}
	}
</style>
