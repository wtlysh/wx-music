<!-- 歌单详情顶部页面 -->
<template>
	<view class="playlist-top">
		<view class="bg" :style="'background-image:url(' + bgimg + ')'"></view>
		<view class="playlist-con">
			<view class="playlist-detail-con">
				<image style="width: 220rpx;height: 220rpx;border-radius: 20rpx;" :src="bgimg" mode=""></image>
				<view style="padding-left: 40rpx;width: 440rpx;" class="">
					<view style="font-size: 36rpx;height: 100rpx;">
						{{album.name}}
					</view>
					<view class="playlist-creator">
						<image style="width: 48rpx;;height: 48rpx;border-radius: 24rpx;" :src="album.creator.avatarUrl" mode=""></image>
						<text style="font-size: 28rpx;padding-left: 20rpx;">{{album.creator.nickname}}</text>
					</view>
					<view class="playlist-description">
						<text class="playlist-desc-txt">简介:{{album.description}}</text>
					    <image style="width: 35rpx;height: 35rpx;" src="../../../static/images/more-white.svg" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			bgimg:{
				type:String,
				default:''
			},
			album:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-top {
		position: fixed;
		height: 400rpx;
		padding-top: 20rpx;
		background: #fff;
		overflow: hidden;
		width: 100%;
		z-index: 999;
		.playlist-con {
			position: absolute;
			width: 100%;
			display: flex;
			justify-content: center;
			padding-top: 46rpx;
			z-index: 10;
			.playlist-detail-con{
				display: flex;
				color: #FFFFFF;
				width: 680rpx;
				.playlist-creator{
					display: flex;
					align-items: center;
					margin: 10rpx 0 20rpx 0;
					height: 55rpx;
				}
				.playlist-description{
					display: flex;
					height: 35rpx;
					.playlist-desc-txt{
						white-space: nowrap; //文本强制不换行；
						text-overflow: ellipsis; //文本溢出显示省略号；
						overflow: hidden; //溢出的部分隐藏
						font-size: 28rpx;
						width: 400rpx;
					}
				}
			}
		}
	
	}
</style>
