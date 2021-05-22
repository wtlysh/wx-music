<!-- 首页搜索框组件 -->
<template>
	<view class="home-search" :style="{top:(statusBarHeight+44)+'px'}">
		<view class="box-width">
			<view class="home-search-box flex-center" @click="toSearch">
				<uni-icons style="margin-right: 15rpx;" type="search" size="40" color="#6b6b6b"/>
				<text class="song-text">搜索歌曲</text>
			</view>
		</view>
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight
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
		z-index: 100;
		width: 100%;
		.home-search-box{
			margin: $uni-spacing-col-base 0;
			background: #FFFFFF;
			height: $uni-searchbar-height;
			border-radius: $uni-searchbar-height/2;
		}
	}
</style>
