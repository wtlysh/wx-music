<template>
	<view v-if="playdetail">
		<view class="playing-box flex-align">
			<view class="playing-to flex-align" @click="toPlayer">
				<image :class="['playing-img',isplayingmusic?'':'stoped']" :src="playdetail.picUrl" mode=""></image>
				<text class="playing-desc ellipsis">{{playdetail.desc}}</text>
			</view>
			<view class="flex-align">
				<view @click="playCtrol" style="margin-right: 30rpx;">
					<image class="isplay-img" v-if="isplayingmusic" src="../static/images/playing.svg" mode="">
					</image>
					<image class="isplay-img" v-if="isplayingmusic==false" src="../static/images/notplaying.svg"
						mode=""></image>
				</view>
				<uni-icons @click="openList" type="list" color="#6b6b6b" size="50"></uni-icons>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<popList @close="closeList"></popList>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	import popList from './popList.vue'
	export default {
		components: {
			popList,
		},
		data() {
			return {
				time:0,
			}
		},
		computed: {
			...mapGetters(['isplayingmusic', 'playdetail', 'isplayactive'])
		},
		methods: {
			...mapMutations(['setAudiolist', 'setPlaydetail', 'setIsplayingmusic', 'setIsplayactive']),
			openList() {
				this.$refs.popup.open('bottom');
				// console.log(this.$refs.popup);
			},
			closeList() {
				this.$refs.popup.close();
			},
			//控制歌曲播放
			playCtrol() {
				let isPlay = this.isplayingmusic;
				if (isPlay) {
					this.$au_player.pause();
				} else {
					this.$au_player.play();
				}
				isPlay = !isPlay;
				this.setIsplayingmusic(isPlay)
			},
			toPlayer() {
				uni.navigateTo({
					url: "/pages/song/player?songId=" + this.playdetail.id + "&index=" + this.playdetail.index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playing-box {
		position: fixed;
		bottom: 0;
		background: #fff;
		padding: 0 37.5rpx;
		height: 90rpx;

		.playing-to {
			width: 545rpx;

			.playing-img {
				&.stoped {
					animation-play-state: paused;
				}

				animation: rotate 15s linear infinite;
				width: 100rpx;
				height: 100rpx;
				border-radius: $uni-border-radius-circle;
				position: relative;
				top: -20rpx;
			}

			.playing-desc {
                 width: 410rpx;
                 margin: 0 $uni-spacing-row-base;
                 font-size: $uni-font-size-base;
			}
		}


		.isplay-img {
			width: 50rpx;
			height: 50rpx;
		}
	}

	@keyframes rotate {
		0% {
			transform: rotateZ(0deg);
			/*从0度开始*/
		}

		100% {
			transform: rotateZ(360deg);
			/*360度结束*/
		}
	}
</style>
