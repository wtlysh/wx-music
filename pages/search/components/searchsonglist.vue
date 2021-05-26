<!-- 搜索结果歌曲列表组件 -->
<template>
	<view class="song-list">
		<scroll-view scroll-y="true" :style="{height:height+'rpx'}">
			<view class="song-list-item flex-align" hover-class="hover-color" v-for="(item, index) in songList" :key="index"
				@click="toPlay(item)">
				<view class="con">
					<view class="song-list-name name ellipsis">{{item.name}}</view>
					<view style="line-height: 40rpx;" class="song-text ellipsis">{{item.desc}}</view>
				</view>
				<view style="flex: 1;text-align: right;">
					<image style="width: 50rpx;height: 50rpx;" src="../../../static/images/topaly.svg" mode=""></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		apiSong
	} from '../../../api/player.js'
	export default {
		props: {
			songList: {
				type: Array,
				default: []
			},
			height:{
				type:[String,Number],
				default: "100%"
			}
		},
		data() {
			return {};
		},
		methods: {
			//跳转到播放页面
			async toPlay(item) {
				await apiSong({id:item.id}).then(res=>{
					if(!res.data[0].url){
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '资源已失效'
							})
						}, 500);
						return;
					}
					let list = [item];
					uni.navigateTo({
						url: '/pages/song/player?songId=' + item.id + '&index=0' + '&list=' + encodeURIComponent(JSON
							.stringify(list))
					})
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
			margin-bottom: $uni-spacing-col-sm;
			padding: 0 37.5rpx;
		}

		.con {
			width: 580rpx;

			.song-list-name {
				margin-right: $uni-spacing-row-base;
				line-height: 58rpx;
			}
		}
	}
</style>
