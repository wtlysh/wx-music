<!-- 个人中心页面 -->
<template>
	<view class="me">
		<meTop :bg="bg"></meTop>
		<typeTab :top="320" :tab="tab" :isActive="isActive" @tab="isActive=0" @toTab="isActive=1"></typeTab>
		<view v-if="isActive==0">
			<plylistCon :top="top" :trackCount="hisCount" :tracks="hisTracks" :options="options1" :disabled="disabled"
				@change="deleteSong">
			</plylistCon>
			<view class="delete-fab" @click="deleteAll">
				<uni-icons type="trash-filled" color="#fff" size="20"></uni-icons>
			</view>
		</view>
		<plylistCon v-if="isActive==1" :top="top" :trackCount="likeCount" :tracks="likeTracks" :options="options2"
			:disabled="disabled" @change="cancleLike">
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
				hisCount: 0,
				likeCount: 0,
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
			this.getData()
		},
		methods: {
			deleteSong(id) {
				this.hisTracks.forEach((item, index) => {
					if (item.id == id) {
						this.hisTracks.splice(index, 1);
					}
				})
				// console.log(this.hisTracks)
				this.hisCount = this.hisTracks.length;
				uni.setStorage({
					key: 'OldSongs',
					data: this.hisTracks,
					success: res => {}
				});
			},
			deleteAll(){
				uni.showModal({
					content: '确定删除所有播放记录？',
					success: (res) => {
						if (res.confirm) {
							// console.log('用户点击确定');
							this.hisTracks = [];
							uni.removeStorage({
								key: 'OldKeys'
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
				this.likeCount = this.likeTracks.length;
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
						this.hisCount = res.data.length
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
								this.likeCount = this.likeTracks.length
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
			height: 30px;
			width: 30px;
			background: #8dc63f;
			text-align: center;
			line-height: 30px;
			border-radius: 15px;
		}
	}
</style>
