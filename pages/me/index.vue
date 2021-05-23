<!-- 个人中心页面 -->
<template>
	<view class="me">
		<nav-bar :title="title" :showIcon="false"></nav-bar>
		<meTop :bg="bg"></meTop>
		<typeTab style="position: relative;background: #fff;" :tab="tab" :isActive="isActive" @tab="switchNav">
		</typeTab>
		<swiper :current="isActive" @change="handleChange" :style="{height:swiperHeight+'px'}">
			<swiper-item>
				<plylistCon class="his_list" :tracks="hisTracks" :isShowDelete="true" @delete="deleteSong">
				</plylistCon>
			</swiper-item>
			<swiper-item>
				<plylistCon class="like_list" :tracks="likeTracks" :isShowCancel="true" @cancel="cancelLike">
				</plylistCon>
			</swiper-item>
		</swiper>
		<view class="delete-fab" v-if="hisTracks.length>0 && isActive==0" @click="deleteAll">
			<uni-icons type="trash-filled" color="#fff" size="50"></uni-icons>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import meTop from './components/meTop.vue'
	import typeTab from '../../components/typeTab.vue'
	import plylistCon from '../../components/playlistCon.vue'
	const db = wx.cloud.database();
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight
	export default {
		components: {
			meTop,
			typeTab,
			plylistCon,
		},
		data() {
			return {
				title: "音乐",
				bg: 'http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg',
				isActive: 0,
				tab: ['最近', '喜欢'],
				hisTracks: [],
				top: 420,
				likeTracks: [],
				userId: "",
				swiperHeight: 0,
			}
		},
		onShow() {
			this.getData();
			setTimeout(() => {
				let list = ".his_list";
				this.getlistHeight(list);
			}, 10)
			// console.log(this.playdetail)
		},
		methods: {
			getlistHeight(list) {
				let vm = this
				let info = uni.createSelectorQuery().select(list);
				info.boundingClientRect((data) => {
					vm.swiperHeight = data.height; // 获取元素高度
				}).exec();
			},
			handleChange(e) {
				let vm = this;
				vm.isActive = e.mp.detail.current;
				if (vm.isActive == 0) {
					let list = ".his_list";
					vm.getlistHeight(list);
				} else if (vm.isActive == 1) {
					let list = ".like_list";
					vm.getlistHeight(list);
				}
			},
			switchNav(index) {
				this.isActive = index;
			},
			deleteSong(id,index) {
				this.hisTracks.splice(index, 1);
				uni.setStorage({
					key: 'OldSongs',
					data: this.hisTracks,
					success: res => {}
				});
			},
			//删除所有历史播放记录
			deleteAll() {
				uni.showModal({
					content: '确定删除所有播放记录？',
					success: (res) => {
						if (res.confirm) {
							// console.log('用户点击确定');
							uni.removeStorage({
								key: 'OldSongs',
								success: () => {
									this.hisTracks = [];
								}
							});
						} else if (res.cancel) {
							// console.log('用户点击取消');
							return;
						}
					}
				});
			},
			cancelLike(id,index) {
				this.likeTracks.splice(index, 1);
				db.collection('userLike').doc(this.userId).update({
					data: {
						like_songs: this.likeTracks
					},
					success: (res) => {
						// console.log(es.data)
					},
					fail: err => {
						// console.log(er);
					}
				})
			},
			//获取历史播放和收藏歌曲
			getData() {
				uni.getStorage({
					key: 'OldSongs',
					success: res => {
						this.hisTracks = res.data;
					}
				});
				uni.getStorage({
					key: "userId",
					success: res => {
						let id = res.data;
						this.userId = id;
						db.collection('userLike').doc(id).get({
							success: re => {
								this.likeTracks = re.data.like_songs;
							},
						})
					},
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.me {
		.delete-fab {
			position: fixed;
			bottom: 120rpx;
			right: 70rpx;
			height: 80rpx;
			width: 80rpx;
			background: $uni-color-success;
			text-align: center;
			line-height: 80rpx;
			border-radius: $uni-border-radius-circle;
		}
	}
</style>
