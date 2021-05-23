<!-- 搜索结果歌曲列表组件 -->
<template>
	<view class="song-list box-width">
		<view class="song-list-item flex-align" v-for="(item, index) in songList" :key="index"
			@click="toPlay(item)">
			<view class="con">
				<view class="song-list-name name ellipsis">{{item.name}}</view>
				<view style="line-height: 40rpx;" class="song-text ellipsis">{{item.desc}}</view>
			</view>
			<view style="flex: 1;text-align: right;">
				<image style="width: 50rpx;height: 50rpx;" src="../../../static/images/topaly.svg" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			songList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {};
		},
		methods: {
			//跳转到播放页面
			toPlay(item) {
				let list = [item];
				uni.navigateTo({
					url:'/pages/song/player?songId='+item.id+'&index=0'+'&list='+ encodeURIComponent(JSON.stringify(list))
				})
			}

		}
	};
</script>

<style lang="scss" scoped>
	.song-list {
		.song-list-item {
			flex-direction: row;
			position: relative;
			height: 120rpx;
		}

		.con {
			width: 580rpx;

			.song-list-name {
				margin-top: $uni-spacing-col-sm;
				margin-right: $uni-spacing-row-base;
				line-height: 58rpx;
			}
		}
	}
</style>
