<!-- 歌单详情顶部页面 -->
<template>
	<view class="playlist-top">
		<view class="bg-img" :style="'top:'+(-top)+'rpx;height:'+(top+300)+'rpx;background-image:url(' + bgimg + ')'"> </view>
		<view class="playlist-con">
			<view class="playlist-detail-con">
				<image style="width: 220rpx;height: 220rpx;border-radius: 20rpx;" :src="bgimg" mode=""></image>
				<view class="play-count">
					<uni-icons type="headphones" color="#fff" size="30"></uni-icons>
					<text style="color: #fff;font-size: 22rpx;padding-left: 8rpx;">{{album.desc}}</text>
				</view>
				<view style="padding-left: 40rpx;width: 440rpx;" class="">
					<view style="font-size: 36rpx;height: 100rpx;">
						{{album.name}}
					</view>
					<view class="playlist-creator">
						<image style="width: 60rpx;height: 60rpx;border-radius: 30rpx;" :src="album.creator.avatarUrl"
							mode=""></image>
						<text style="font-size: 28rpx;margin-left: 30rpx;">{{album.creator.nickname}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bgimg:{
				type:String,
				default:""
			},
			album: {
				type: Object,
				default: {}
			},
			top:{
				type: Number,
				default:0
			}
		},
		data(){
			return {
				bg:"transparent"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-top {
		padding-top: 40rpx;
		width: 100%;
		position: fixed;
		z-index: 100;
		background: #fff;
		.bg-img{
			position: absolute;
			left: 0;
			width: 100%;
			filter: blur(20px);
			background-repeat: no-repeat;
			background-position: 0 0;
			background-color: #778899;
			background-blend-mode: multiply;
			background-size: 100%;
		}
		
		.playlist-con {
			width: 100%;
			display: flex;
			justify-content: center;

			.playlist-detail-con {
				display: flex;
				color: #FFFFFF;
				width: 680rpx;
				position: relative;

				.play-count {
					position: absolute;
					top: 170rpx;
					width: 190rpx;
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}

				.playlist-creator {
					display: flex;
					align-items: center;
					margin: $uni-spacing-col-sm 0 $uni-spacing-row-base 0;
					height: 100rpx;
				}
			}
		}

	}
</style>
