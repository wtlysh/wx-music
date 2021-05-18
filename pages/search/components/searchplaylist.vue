<!-- 搜索结构歌单列表 -->
<template>
	<view class="playlist">
		<view :class="index==0 ? 'playlist-firstitem':''" class="playlist-item" v-for="(item, index) in playlist"
			:key="index" @click="toPlaylist(item.id)">
			<view class="playlist-item-img">
				<image class="playlist-img" :src="item.picUrl" mode=""></image>
			</view>
			<view class="playlist-content">
				<view class="playlist-name">{{item.name}}</view>
				<view class="playlist-desc song-text">{{item.desc}}</view>
			</view>
			<image class="playlist-more" src="../../../static/images/more.svg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			playlist: {
				type: Array,
				default: []
			}
		},
		methods: {
			//跳转到歌单详情页面
			toPlaylist(id) {
				uni.navigateTo({
					url: '/pages/playlist/playlistDetail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist {
		padding-top: 200rpx;
		width: 90%;
		margin: 0 auto;

		.playlist-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 120rpx;
			padding-bottom: 30rpx;

			&.playlist-firstitem {
				padding-top: 30rpx
			}

			.playlist-item-img {
				.playlist-img {
					width: 120rpx;
					height: 120rpx;
					border-radius: 20rpx;
				}
			}

			.playlist-content {
				padding-left: 30rpx;
				width: 470rpx;

				.playlist-name {
					font-size: 36rpx;
					font-weight: bold;
					white-space: nowrap; //文本强制不换行；
					text-overflow: ellipsis; //文本溢出显示省略号；
					overflow: hidden; //溢出的部分隐藏
				}

				.playlist-desc {
					padding-top: 10rpx;
					white-space: nowrap; //文本强制不换行；
					text-overflow: ellipsis; //文本溢出显示省略号；
					overflow: hidden; //溢出的部分隐藏
				}
			}

			.playlist-more {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
</style>
