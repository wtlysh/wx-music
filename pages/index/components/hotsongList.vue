<!-- 推荐歌曲组件 -->
<template>
	<view class="hotsong">
		<songTop :title="title" @child="toSongList"></songTop>
		<view class="hotsong-li" v-for="(item,index) in songs" :key="item.id" @click="toSong(item.id,index)">
			<image class="hotsong-img" :src="item.picUrl" mode=""></image>
			<view style="padding-left: 20rpx;width: 450rpx;margin: auto 0;">
				<view class="name ellipsis" style="padding-bottom:10rpx;">
					{{item.name}}
				</view>
				<view class="song-text ellipsis">
					{{item.desc}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import songTop from './songTop.vue'
	import {
		apiSong
	} from '../../../api/player.js'
	export default {
		props: {
			songs: {
				type: Array,
				default: []
			}
		},
		components: {
			songTop
		},
		data() {
			return {
				title: '推荐歌曲',
			}
		},
		methods: {
			//跳转到歌曲播放页面
			async toSong(id, index) {
				await apiSong({
					id
				}).then(res => {
					if (!res.data[0].url) {
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '资源已失效'
							})
						}, 500);
						return;
					}
					let list = this.songs;
					uni.navigateTo({
						url: '/pages/song/player?songId=' + id + '&index=' + index + '&list=' +
							encodeURIComponent(JSON
								.stringify(list))
					})
				})
			},
			//跳转到热门歌曲页面
			toSongList() {
				uni.navigateTo({
					url: '/pages/song/songList'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hotsong {
		margin-bottom: $uni-spacing-col-lg;

		.hotsong-li {
			width: 675rpx;
			padding-left: 37.5rpx;
			margin-bottom: $uni-spacing-col-base;
			display: flex;

			.hotsong-img {
				width: 130rpx;
				height: 130rpx;
				border-radius: $uni-border-radius-lg;
			}

		}
	}
</style>
