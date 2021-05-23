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
			<view class="flex-align" v-for="(item,index) in tracks" 
			:key="index" 
			@longpress="longtap(index)"
			@click="toSong(item.id,index)"
			>
				<view :class="['item-con',playdetail.id==item.id?'active':'']">
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
				<uniPopup ref="popup" type="center">
					<view class="popup-list">
						<view class="popup-list-item flex-align" @click.capture.stop="paste(item.name,index)">
							复制歌名
						</view>
						<view class="popup-list-item flex-align" @click.capture.stop="search(item.name,index)">
							搜一搜歌曲
						</view>
						<view v-if="isShowDelete" class="popup-list-item flex-align" @click.capture.stop="Delete(item.id,index)">
							删除记录
						</view>
						<view v-if="isShowCancel" class="popup-list-item flex-align" @click.capture.stop="cancel(item.id,index)">
							取消收藏
						</view>
					</view>
				</uniPopup>
			</view>
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
	import uniPopup from './uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		props: {
			tracks: {
				type: Array,
				default: []
			},
			isShowDelete:{
				type: Boolean,
				default:false
			},
			isShowCancel:{
				type: Boolean,
				default:false
			}
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters(['playdetail']),
		},
		methods: {
			cancel(id,index){
				this.$refs.popup[index].close();
				this.$emit('cancel',id,index)
			},
			//删除记录
			Delete(id,index){
				this.$refs.popup[index].close();
				this.$emit('delete',id,index)
			},
			//搜索
			search(value,index){
				this.$refs.popup[index].close();
				uni.navigateTo({
					url:"/pages/search/index?keyword="+value,
				})
			},
			//复制歌名
			paste(value,index){
				this.$refs.popup[index].close();
				uni.setClipboardData({ 
					data: value,
					success:()=>{
						uni.showToast({
							title:'复制成功',
							icon:'none'
						});
					}
				});
			},
			//长按出现弹窗
			longtap(index){
				// console.log(this.$refs.popup[index])
				this.$refs.popup[index].open('center');
			},
			//跳转到歌曲播放页面
			toSong(id,index) {
				const list = this.tracks;
				// console.log(index)
				uni.navigateTo({
					url: '/pages/song/player?songId=' + id + '&index=' + index + '&list=' + encodeURIComponent(JSON
						.stringify(list))
				})
			},
			//播放全部歌曲
			playAll() {
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

		.playlist-list {
			position: relative;
			top: $uni-spacing-col-base;
			
			.popup-list{
				width: 600rpx;
				background-color: $uni-bg-color;
				
				.popup-list-item{
					height: 50rpx;
					font-size: $uni-font-size-base;
					padding: 30rpx 0 30rpx 50rpx;
				}
			}
		}
	}
</style>
