<!-- 首页搜索框组件 -->
<template>
	<view class="home-search">
		<view class="home-search-box" @click="toSearch">
			<icon class="home-search-icon" type="search" size="16" />
			<text class="home-search-text">搜索歌曲</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods:{
			//跳转到搜索页面
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-search {
		position: fixed;
		background: #FFFFFF;
		z-index: 100;
		width: 100%;
		top: 0;
		border: 1px solid #f2f2f2;
		.home-search-box{
			margin: 20rpx 50rpx;
			background: #f2f2f2;
			height: 70rpx;
			border-radius: 35rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.home-search-text {
				font-size: 28rpx;
				color: #6b6b6b;
			}
			
			.home-search-icon {
				margin-right: 15rpx;
			}
		}
	}
</style>
