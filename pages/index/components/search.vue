<!-- 首页搜索框组件 -->
<template>
	<view class="home-search">
		<view class="home-search-box flex-center" @click="toSearch">
			<icon class="home-search-icon" type="search" size="16" />
			<text class="song-text">搜索歌曲</text>
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
		.home-search-box{
			margin: 20rpx 50rpx;
			background: #f2f2f2;
			height: 70rpx;
			border-radius: 35rpx;
			
			.home-search-icon {
				margin-right: 15rpx;
			}
		}
	}
</style>
