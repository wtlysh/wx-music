<template>
	<view class="navbar">
		<view :class="{ 'navbar--fixed': fixed, 'navbar--shadow': shadow, 'navbar--border': border }" :style="{ 'background-color': backgroundColor }"
		 class="navbar__content">
			<status-bar v-if="statusBar" />
			<view :style="{ color: color,backgroundColor: backgroundColor }" class="navbar__header">
				<view class="flex-center navbar__header-btns navbar__content_view">
					<view v-if="showIcon" @tap="Back" class="navbar-btn-text navbar_lefet">
						<uni-icons :color="color" type="back" size="50" />
					</view>
					<view v-if="showIcon" @tap="toHome" class="navbar-btn-text navbar_lefet">
					   <uni-icons :color="color" type="home-filled" size="50" />
					</view>
					<slot name="left" />
				</view>
				<view class="navbar__header-container">
					<view class="flex-center navbar__header-container-inner" v-if="title.length">
						<text class="nav-bar-text" :style="{color: color }">{{ title }}</text>
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view class="navbar__content_view">
					<slot name="right" />
				</view>
			</view>
		</view>
		<view class="navbar__placeholder" v-if="fixed">
			<status-bar v-if="statusBar" />
			<view class="navbar__placeholder-view" />
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
	.nav-bar-text {
		font-size: 34rpx;
		font-size: $uni-font-size-lg;
	}
	.navbar {
		width: 750rpx;
	}

	.navbar__content {
		position: relative;
		width: 750rpx;
		overflow: hidden;
	}

	.navbar__content_view {
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 25%;
	}
	
	.navbar_lefet{
		width: 50%;
	}

	.navbar__header {
		display: flex;
		flex-direction: row;
		width: 90%;
		margin: 0 auto;
		height: $nav-height;
		line-height: $nav-height;
		font-size: 16px;
	}

	.navbar__header-btns {
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

	.navbar__header-container {
		width: 50%;
		.navbar__header-container-inner {
			width: 100%;
			font-size: $uni-font-size-base;
		}
	}


	.navbar__placeholder-view {
		height: $nav-height;
	}

	.navbar--fixed {
		position: fixed;
		z-index: 998;
	}

	.navbar--shadow {
		box-shadow: 0 1px 6px #ccc;
	}

	.navbar--border {
		// border-bottom-width: 1rpx;
		// border-bottom-style: solid;
		// border-bottom-color: $uni-border-color;
	}
</style>
