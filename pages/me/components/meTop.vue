<!-- 个人页面头部组件 -->
<template>
	<view class="me-top">
		<view class="bg" :style="'background-image:url(' + bg + ')'"></view>
		<view class="me-top-con">
			<image class="me-avatar" :src="bg"></image>
			<text space="true" class="me-name">wtlysh</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			bg:{
				type:String,
				default:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.me-top{
		height: 300rpx;
		position: fixed;
		width: 100%;
		z-index: 999;
		overflow: hidden;
		background: #fff;
		display: flex;
		justify-content: space-around;
		padding-top: 20rpx;
		.me-top-con{
			z-index: 500;
			height: 300rpx;
			display: flex;
			flex-wrap: wrap;
			width: 200rpx;
			.me-avatar{
				width: 200rpx;
				height: 200rpx;
				border-radius: 100rpx;
			}
			.me-name{
				color: #FFFFFF;
				width: 100%;
				text-align: center;
				font-size: 40rpx;
				font-weight: bold;
			}
		}
	}
</style>
