<!-- 歌单，歌曲顶部组件 -->
<template>
	<view class="song-top box-width">
		<view class="title" style="flex: 1;">
			{{title}}
		</view>
		<view class="song-all flex-align" @click="toSongList">
			<text class="song-text">更多</text>
			<uni-icons type="forward" color="#6b6b6b" size="40"></uni-icons>
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
		padding-bottom: $uni-spacing-col-base;

		.song-all {
			justify-content: flex-end;
		}
	}
</style>
