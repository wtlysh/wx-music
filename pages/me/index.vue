<!-- 个人中心页面 -->
<template>
	<view class="me">
		<meTop :bg="bg"></meTop>
		<typeTab :top="320" :tab="tab" :isActive="isActive" @tab="isActive=0" @toTab="isActive=1"></typeTab>
		<view v-if="isActive==0">
			<plylistCon :top="top" :tracks="hisTracks" :options="options1" :disabled="disabled" @change="deleteSong">
			</plylistCon>
			<view class="delete-fab" v-if="hisTracks.length>0" @click="deleteAll">
				<uni-icons type="trash-filled" color="#fff" size="25"></uni-icons>
			</view>
		</view>
		<plylistCon v-if="isActive==1" :top="top" :tracks="likeTracks" :options="options2" :disabled="disabled"
			@change="cancleLike">
		</plylistCon>
	</view>
</template>

<script>
	import meTop from './components/meTop.vue'
	import typeTab from '../../components/typeTab.vue'
	import plylistCon from '../../components/playlistCon.vue'
	const db = wx.cloud.database();
	export default {
		components: {
			meTop,
			typeTab,
			plylistCon,
		},
		data() {
			return {
				bg: 'http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg',
				isActive: 0,
				tab: ['最近', '喜欢'],
				hisTracks: [],
				top: 420,
				likeTracks: [],
				userId: "",
				options1: [{
					text: '删除记录',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				options2: [{
					text: '取消收藏',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				disabled: false
			}
		},
		onShow() {
			this.getData();
			// console.log(this.playdetail)
		},
		methods: {
			deleteSong(id) {
				this.hisTracks.forEach((item, index) => {
					if (item.id == id) {
						this.hisTracks.splice(index, 1);
					}
				})
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
								key: 'OldKeys',
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
			cancleLike(id) {
				this.likeTracks.forEach((item, index) => {
					if (item.id == id) {
						this.likeTracks.splice(index, 1);
					}
				})
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
		}
	}
</script>

<style lang="scss" scoped>
	.me {
		.delete-fab {
			position: fixed;
			bottom: 100rpx;
			right: 70rpx;
			height: 40px;
			width: 40px;
			background: #8dc63f;
			text-align: center;
			line-height: 40px;
			border-radius: 20px;
		}
	}
</style>
