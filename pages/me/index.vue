<!-- 个人中心页面 -->
<template>
	<view class="me">
		<meTop :bg="bg"></meTop>
		<typeTab :top="320" :tab="tab" :isActive="isActive" @tab="isActive=0" @toTab="isActive=1"></typeTab>
		<plylistCon v-if="isActive==0" :top="top" :trackCount="hisCount" :tracks="hisTracks" :options="options1"
			:disabled="disabled" @change="deleteSong">
		</plylistCon>
		<plylistCon v-if="isActive==1" :top="top" :trackCount="likeCount" :tracks="likeTracks" :options="options2"
			:disabled="disabled" @change="cancleLike">
		</plylistCon>
	</view>
</template>

<script>
	import meTop from './components/meTop.vue'
	import typeTab from '../../components/typeTab.vue'
	import plylistCon from '../../components/playlistCon.vue'
	// import popupDialog from './components/popupDialog/index.vue'
	export default {
		components: {
			meTop,
			typeTab,
			plylistCon,
			// popupDialog
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
				userId:"",
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
			cancleLike(id) {
				const db = wx.cloud.database();
				this.likeTracks.forEach((item, index) => {
					if (item.id == id) {
						this.likeTracks.splice(index,1);
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
				const db = wx.cloud.database();
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
	.me {}
</style>
