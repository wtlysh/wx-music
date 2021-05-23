<!-- 推荐歌曲组件 -->
<template>
	<view class="hotsong">
		<songTop :title="title" @child="toSongList"></songTop>
		<view class="flex-between">
			<scroll-view @touchstart="start" @touchend="end" scroll-x="true" scroll-with-animation="true" :scroll-into-view="'card_'+cardIndex">
				<view class="hotsong-list">
					<view :id="'card_'+index" class="hotsong-li" v-for="(list,index) in songs" :key="index">
						<view class="hotsong-item flex-align" @click="toSong(item)" v-for="item in list" :key="item.id">
							<image class="hotsong-img" :src="item.al.picUrl" mode=""></image>
							<view style="padding-left: 20rpx;">
								<view class="name" style="padding-bottom:10rpx;">
									{{item.name}}
								</view>
								<view class="song-text">
									{{item.ar[0].name}}-{{item.name}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import songTop from './songTop.vue'
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
				clientX: '',
				cardIndex:0,
			}
		},
		methods: {
			scroll(e){
				console.log(e)
			},
			start(e) {
				this.clientX = e.changedTouches[0].clientX;
			},
			end(e) {
				const subX = e.changedTouches[0].clientX - this.clientX;
				if (subX > 10) {
					if(this.cardIndex==0){
						return ;
					}
					this.cardIndex--;
				} else if (subX < -10) {
					if(this.cardIndex==2){
						return ;
					}
					this.cardIndex++;
				}
			},
			//跳转到歌曲播放页面
			toSong(item) {
				let list = [item];
				uni.navigateTo({
					url: '/pages/song/player?songId=' + item.id + '&index=0' + '&list=' + encodeURIComponent(JSON
						.stringify(list))
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

		.hotsong-list {
			width: 2025rpx;
			height: 450rpx;
			display: flex;
			padding-right: 75rpx;

			.hotsong-li {
				width: 675rpx;
				padding-left: 37.5rpx;

				.hotsong-item {
					margin-bottom: $uni-spacing-col-base;

					.hotsong-img {
						width: 130rpx;
						height: 130rpx;
						border-radius: $uni-border-radius-lg;
					}
				}
			}

		}
	}
</style>
