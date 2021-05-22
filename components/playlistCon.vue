<!-- 歌曲列表公共组件 -->
<template>
	<view class="playlist-list-con">
		<view class="playlist-list-top">
			<view class="top-con flex-align">
				<view class="title" style="flex: 1;">
					共{{tracks.length}}首歌曲
				</view>
				<view class="play-all flex-align" @click="playAll">
					<image style="height: 50rpx;width: 50rpx;" src="../static/images/topaly.svg" mode=""></image>
					<text style="margin-left: 10rpx;">播放全部</text>
				</view>
			</view>
		</view>
		<view class="playlist-list">
			<swipeAction>
				<swipeActionItem class="flex-align" :threshold="0" :right-options="options"
					v-for="(item,index) in tracks" :key="index" @click="change(item.id)">
					<view :class="['item-con',playdetail.id==item.id?'active':'']" @click="toSong(item.id)">
						<view style="font-size: 36rpx;width: 60rpx;" class="num text-color">
							{{index+1}}
						</view>
						<view style="padding-left: 30rpx;width: 470rpx;">
							<view class="item-name ellipsis">
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
	import {
		apiSong,
		apiSongDetail
	} from '../api/player.js'
	import Vue from 'vue'
	import swipeAction from "./swipe-action/index.vue"
	import swipeActionItem from './swipe-action/swipe-action-item/index.vue'
	export default {
		components: {
			swipeAction,
			swipeActionItem
		},
		props: {
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
		data(){
			return{
				time: 0,
				playTime: 0,
				curPlayTime: 0,
			}
		},
		computed:{
			...mapGetters(['playdetail']),
			playTimeNum() {
				return this.$util.formatTime(this.playTime)
			},
			curPlayTimeNum() {
				return this.$util.formatTime(this.curPlayTime)
			}
		},
		methods: {
			//跳转到歌曲播放页面
			toSong(id) {
				const list = this.tracks;
				let index = 0;
				list.forEach((v,i)=>{
					this.$set(v,'index',i)
					if(v.id == id ){
						index = i;
					}
				})
				// console.log(list)
				uni.navigateTo({
					url: '/pages/song/player?songId='+id+'&index='+index+'&list='+ encodeURIComponent(JSON.stringify(list))
				})
			},
			//播放全部歌曲
			playAll(){
				this.toSong(this.tracks[0].id)
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
	@import "../static/scss/songList.scss";
	.playlist-list-con {
		background: #FFFFFF;
		position: relative;

		.playlist-list-top {
			// position: fixed;
			// top: 380rpx;
			z-index: 1000;
			background: #fff;
			width: 675rpx;
			height: 70rpx;
			padding: 0 37.5rpx;
			border-top-left-radius: 50rpx;
			// border-top-right-radius: 50rpx;
			border-bottom: 1px solid #f2f2f2;

			.top-con {
                height: 100%;
				.play-all {
					text-align: right;
					font-size: $uni-font-size-base;
				}
			}
		}
		.playlist-list{
			position: relative;
			top: $uni-spacing-col-base;
		}
	}
</style>
