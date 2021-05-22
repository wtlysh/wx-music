<template>
	<view class="uni-navbar">
		<view :class="{ 'uni-navbar--fixed': fixed, 'uni-navbar--shadow': shadow, 'uni-navbar--border': border }" :style="{ 'background-color': backgroundColor }"
		 class="uni-navbar__content">
			<status-bar v-if="statusBar" />
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="uni-navbar__header uni-navbar__content_view">
				<view class="uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view">
					<view v-if="showIcon" @tap="Back" class="uni-navbar__content_view">
						<uni-icons :color="color" type="back" size="50" />
					</view>
					<view v-if="showIcon" @tap="toHome" class="uni-navbar-btn-text uni-navbar__content_view">
					   <uni-icons :color="color" type="home-filled" size="50" />
					</view>
					<slot name="left" />
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view class="uni-navbar__header-container-inner uni-navbar__content_view" v-if="title.length">
						<text class="uni-nav-bar-text" :style="{color: color }">{{ title }}</text>
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view class="uni-navbar__header-btns uni-navbar__content_view">
					<slot name="right" />
				</view>
			</view>
		</view>
		<view class="uni-navbar__placeholder" v-if="fixed">
			<status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import StatusBar from "./status-bar.vue";

	export default {
		name: "UniNavBar",
		components: {
			StatusBar
		},
		props: {
			title: {
				type: String,
				default: "音乐"
			},
			showIcon:{
				type: Boolean,
				default: true
			},
			fixed: {
				type: [Boolean, String],
				default: true
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#F4F4F4"
			},
			statusBar: {
				type: [Boolean, String],
				default: true
			},
			shadow: {
				type: [String, Boolean],
				default: false
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
        mounted() {
          if(uni.report && this.title !== '') {
              uni.report('title', this.title)
          }
        },
		methods: {
			//返回上一级
			Back(){
			   uni.navigateBack();
			},
			//返回首页
			toHome(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			onClickRight() {
				this.$emit("clickRight");
			}
		}
	};
</script>

<style lang="scss" scoped>
	$nav-height: 44px;
	.uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 34rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: $uni-font-size-lg;
		/* #endif */
	}
	.uni-nav-bar-right-text {
		font-size: $uni-font-size-base;
	}

	.uni-navbar {
		width: 750rpx;
	}

	.uni-navbar__content {
		position: relative;
		width: 750rpx;
		background-color: $uni-bg-color;
		overflow: hidden;
	}

	.uni-navbar__content_view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		width: 50%;
		// background-color: #FFFFFF;
	}

	.uni-navbar__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 750rpx;
		height: $nav-height;
		line-height: $nav-height;
		font-size: 16px;
		// background-color: #ffffff;
	}

	.uni-navbar__header-btns {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-wrap: nowrap;
		width: 120rpx;
		margin-left: 37.5rpx;
		justify-content: center;
		align-items: center;
	}

	.uni-navbar__header-btns-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		justify-content: flex-start;
	}

	.uni-navbar__header-btns-right {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 150rpx;
		padding-right: 30rpx;
		justify-content: flex-end;
	}

	.uni-navbar__header-container {
		flex: 1;
	}

	.uni-navbar__header-container-inner {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		align-items: center;
		justify-content: center;
		font-size: $uni-font-size-base;
	}


	.uni-navbar__placeholder-view {
		height: $nav-height;
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.uni-navbar--shadow {
		/* #ifndef APP-NVUE */
		box-shadow: 0 1px 6px #ccc;
		/* #endif */
	}

	.uni-navbar--border {
		// border-bottom-width: 1rpx;
		// border-bottom-style: solid;
		// border-bottom-color: $uni-border-color;
	}
</style>
