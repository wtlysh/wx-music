<!-- 歌单，歌曲顶部组件 -->
<template>
	<view class="song-top">
		<view class="song-title">
			{{title}}
		</view>
		<view class="song-all" @click="toSongList">
			<text class="song-text">更多</text>
			<image style="width: 35rpx;height: 35rpx;" src="../../../static/images/more.svg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			//调用父组件方法，跳转到相应页面
			toSongList() {
				this.$emit('child')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.song-top {
		display: flex;
		margin: 20rpx 0;
		padding: 0 50rpx;

		.song-title {
			flex: 1;
			font-size: 36rpx;
			font-weight: bold
		}

		.song-all {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
