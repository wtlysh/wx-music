<!-- 个人页面头部组件 -->
<template>
	<view class="me-top">
		<view class="bg" :style="'background-image:url(' + bg + ')'"></view>
		<view class="me-top-con">
			<image class="me-avatar" :src="userInfo.avatarUrl"></image>
			<text space="true" class="me-name title">{{userInfo.nickName}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			userInfo:{
				type:Object,
				default:{}
			}
		},
		data(){
			return{
				bg: 'http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.me-top{
		height: 300rpx;
		// position: fixed;
		width: 100%;
		z-index: 999;
		overflow: hidden;
		background: #fff;
		display: flex;
		justify-content: center;
		padding-top: $uni-spacing-col-base;
		.me-top-con{
			z-index: 500;
			height: 300rpx;
			display: flex;
			flex-wrap: wrap;
			width: 200rpx;
			.me-avatar{
				width: 200rpx;
				height: 200rpx;
				border-radius: $uni-border-radius-circle;
			}
			.me-name{
				color: #FFFFFF;
				width: 100%;
				text-align: center;
			}
		}
	}
</style>
