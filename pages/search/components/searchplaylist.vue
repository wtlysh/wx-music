<!-- 搜索结构歌单列表 -->
<template>
	<view class="playlist">
		<scroll-view scroll-y="true" :style="{height:height+'rpx'}">
			<view hover-class="hover-color" :class="['playlist-item','flex-align',index==0 ? 'playlist-firstitem':'']"
				v-for="(item, index) in playlist" :key="index" @click="toPlaylist(item.id)">
				<view class="playlist-item-img flex-align">
					<image class="playlist-img" :src="item.picUrl" mode=""></image>
				</view>
				<view class="playlist-content">
					<view class="name ellipsis">{{item.name}}</view>
					<view style="padding-top: 10rpx;" class="ellipsis song-text">{{item.desc}}</view>
				</view>
				<uni-icons type="forward" color="#6b6b6b" size="50"></uni-icons>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			playlist: {
				type: Array,
				default: []
			},
			height:{
				type:[String,Number],
				default: "100%"
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
		.playlist-item {
			height: 120rpx;
			padding: 0 37.5rpx;
			margin-bottom: $uni-spacing-col-lg;

			&.playlist-firstitem {
				margin-top: $uni-spacing-col-lg;
			}

			.playlist-item-img {
				.playlist-img {
					width: 120rpx;
					height: 120rpx;
					border-radius: $uni-border-radius-lg;
				}
			}

			.playlist-content {
				padding-left: $uni-spacing-row-lg;
				width: 470rpx;
			}
		}
	}
</style>
