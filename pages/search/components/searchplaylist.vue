<!-- 搜索结构歌单列表 -->
<template>
	<view class="playlist">
		<view :class="['playlist-item','flex-align',index==0 ? 'playlist-firstitem':'']" v-for="(item, index) in playlist"
			:key="index" @click="toPlaylist(item.id)">
			<view class="playlist-item-img">
				<image class="playlist-img" :src="item.picUrl" mode=""></image>
			</view>
			<view class="playlist-content">
				<view class="name ellipsis">{{item.name}}</view>
				<view style="padding-top: 10rpx;" class="ellipsis song-text">{{item.desc}}</view>
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
			}

			.playlist-more {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
</style>
