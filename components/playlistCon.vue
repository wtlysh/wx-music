<!-- 歌曲列表公共组件 -->
<template>
	<view :class="['playlist-list-con',playdetail?'box':'']">
		<view class="playlist-list">
			<scroll-view scroll-y="true" :style="{height:height+'rpx'}">
				<view :class="['flex-align',index==0?'first':'']" v-for="(item,index) in tracks" :key="index" @longpress="longtap(index)">
					<view @click="toSong(item.id,index)" :class="['item-con',playdetail.id==item.id?'active':'']">
						<view style="font-size: 36rpx;width: 60rpx;" class="num text-color">
							{{index+1}}
						</view>
						<view style="padding-left: 30rpx;width: 470rpx;">
							<view class="item-name ellipsis">
								{{item.name}}
							</view>
							<view class="num song-text text-color ellipsis">
								{{item.singer}}
							</view>
						</view>
						<view style="width: 90rpx;">
							<image class="item-img" src="../static/images/topaly.svg" mode="">
							</image>
						</view>
					</view>
					<uni-popup ref="popup" type="center">
						<view class="popup-list">
							<view class="popup-list-item flex-align" @click.capture.stop="paste(item.name,index)">
								复制歌名
							</view>
							<view class="popup-list-item flex-align" @click.capture.stop="search(item.name,index)">
								搜一搜歌曲
							</view>
							<view v-if="isShowDelete" class="popup-list-item flex-align"
								@click.capture.stop="Delete(item.id,index)">
								删除记录
							</view>
							<view v-if="isShowCancel" class="popup-list-item flex-align"
								@click.capture.stop="cancel(item.id,index)">
								取消收藏
							</view>
						</view>
					</uni-popup>
				</view>
			</scroll-view>
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
	export default {
		props: {
			tracks: {
				type: Array,
				default: []
			},
			isShowDelete: {
				type: Boolean,
				default: false
			},
			isShowCancel: {
				type: Boolean,
				default: false
			},
			height:{
				type:[String,Number],
				default: "100%"
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
			cancel(id, index) {
				this.$refs.popup[index].close();
				this.$emit('cancel', id, index)
			},
			//删除记录
			Delete(id, index) {
				this.$refs.popup[index].close();
				this.$emit('delete', id, index)
			},
			//搜索
			search(value, index) {
				this.$refs.popup[index].close();
				uni.navigateTo({
					url: "/pages/search/index?keyword=" + value,
				})
			},
			//复制歌名
			paste(value, index) {
				this.$refs.popup[index].close();
				uni.setClipboardData({
					data: value,
					success: () => {
						uni.showToast({
							title: '复制成功',
							icon: 'none'
						});
					}
				});
			},
			//长按出现弹窗
			longtap(index) {
				this.$refs.popup[index].open('center');
			},
			//跳转到歌曲播放页面
			toSong(id, index) {
				const list = this.tracks;
				uni.navigateTo({
					url: '/pages/song/player?songId=' + id + '&index=' + index + '&list=' + encodeURIComponent(
						JSON
						.stringify(list))
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
	@import "../style/scss/songList.scss";

	.playlist-list-con {
       .playlist-list {
       	position: relative;
		
		.first{
			padding-top: 40rpx;
		}
       
       	.popup-list {
       		width: 600rpx;
       		background-color: $uni-bg-color;
       
       		.popup-list-item {
       			height: 50rpx;
       			font-size: $uni-font-size-base;
       			padding: 30rpx 0 30rpx 50rpx;
       		}
       	}
       }
	}
</style>
