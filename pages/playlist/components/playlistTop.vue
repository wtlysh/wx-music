<!-- 歌单详情顶部页面 -->
<template>
	<view class="playlist-top">
		<view class="bg" :style="'background-image:url(' + bgimg + ')'"></view>
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
						<image style="width: 48rpx;;height: 48rpx;border-radius: 24rpx;" :src="album.creator.avatarUrl"
							mode=""></image>
						<text style="font-size: 28rpx;padding-left: 20rpx;">{{album.creator.nickname}}</text>
					</view>
					<view class="playlist-description">
						<text class="playlist-desc-txt ellipsis">简介:{{album.description}}</text>
						<uni-icons type="forward" color="#fff" size="40"></uni-icons>
						</image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bgimg: {
				type: String,
				default: ''
			},
			album: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-top {
		height: 400rpx;
		padding-top: $uni-spacing-col-base;
		background: #fff;
		width: 100%;
		
		.playlist-con {
			position: absolute;
			width: 100%;
			display: flex;
			justify-content: center;
			padding-top: 46rpx;
			z-index: 10;

			.playlist-detail-con {
				display: flex;
				color: #FFFFFF;
				width: 680rpx;
				position: relative;

				.play-count {
					position: absolute;
					top: 170rpx;
					left: 60rpx;
				}

				.playlist-creator {
					display: flex;
					align-items: center;
					margin: $uni-spacing-col-sm 0 $uni-spacing-row-base 0;
					height: 55rpx;
				}

				.playlist-description {
					display: flex;
					height: 35rpx;

					.playlist-desc-txt {
						font-size: $uni-font-size-sm;
						width: 400rpx;
					}
				}
			}
		}

	}
</style>
