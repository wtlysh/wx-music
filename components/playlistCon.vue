<!-- 歌曲列表公共组件 -->
<template>
	<view class="playlist-list-con">
		<view class="playlist-list-top" :style="{top:top + 'rpx'}">
			<view class="top-con">
				<view style="font-size: 36rpx;font-weight: bold;flex: 1;">
					共{{tracks.length}}首歌曲
				</view>
				<view class="play-all">
					播放全部
				</view>
			</view>
		</view>
		<view class="playlist-list" :style="{top:(top+170)+'rpx'}">
			<swipeAction>
				<swipeActionItem class="playlist-list-item" :threshold="0" :right-options="options"
					v-for="(item,index) in tracks" :key="index" @click="change(item.id)">
					<view :class="['item-con',playdetail.id==item.id?'active':'']" @click="toSong(item.id)">
						<view style="font-size: 36rpx;width: 60rpx;" class="num text-color">
							{{index+1}}
						</view>
						<view style="padding-left: 30rpx;width: 470rpx;">
							<view class="item-name">
								{{item.name}}
							</view>
							<view class="num song-text text-color">
								{{item.ar[0].name}}
							</view>
						</view>
						<view style="width: 90rpx;">
							<image class="item-img" src="../static/images/topaly.svg" mode="">
							</image>
						</view>
					</view>
				</swipeActionItem>
			</swipeAction>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import swipeAction from "./swipe-action/index.vue"
	import swipeActionItem from './swipe-action/swipe-action-item/index.vue'
	export default {
		components: {
			swipeAction,
			swipeActionItem
		},
		props: {
			top: {
				type: Number,
				default: 0
			},
			tracks: {
				type: Array,
				default: []
			},
			options: {
				type: Array,
				default: []
			},
			disabled: {
				type: Boolean,
				default: true
			}
		},
		computed:{
			...mapGetters(['playdetail']),
		},
		methods: {
			//跳转到歌曲播放页面
			toSong(id) {
				const list = this.tracks;
				let index = 0;
				list.forEach((v,i)=>{
					if(v.id == id ){
						index = i;
					}
				})
				// console.log(index)
				uni.navigateTo({
					url: '/pages/song/player?songId='+id+'&index='+index+'&list='+ encodeURIComponent(JSON.stringify(list))
				})
			},
			//删除或取消收藏
			change(id) {
				// console.log(id);
				this.$emit('change', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-list-con {
		background: #FFFFFF;
		position: relative;
		top: -50rpx;

		.playlist-list-top {
			position: fixed;
			// top: 380rpx;
			z-index: 1000;
			background: #fff;
			width: 650rpx;
			height: 70rpx;
			padding: 0 50rpx;
			border-top-left-radius: 50rpx;
			// border-top-right-radius: 50rpx;
			border-bottom: 1px solid #f2f2f2;

			.top-con {
				display: flex;

				.play-all {
					// display: flex;
					font-size: 32rpx;
				}
			}
		}

		.playlist-list {
			position: relative;
			// top: 550rpx;
			padding: 0 50rpx;

			.playlist-list-item {
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;

				.item-con {
					display: flex;
					align-items: center;

					&.active {
						color: #8dc63f;
						.num{
							color: #8dc63f;
						}
					}

					.item-name {
						width: 450rpx;
						font-size: 32rpx;
						padding-bottom: 10rpx;
						white-space: nowrap; //文本强制不换行；
						text-overflow: ellipsis; //文本溢出显示省略号；
						overflow: hidden; //溢出的部分隐藏
					}

					.item-img {
						width: 50rpx;
						height: 50rpx;
						margin: 0 20rpx;
					}
					
					.text-color {
						color: #6b6b6b;
					}

				}
			}
		}
	}
</style>
