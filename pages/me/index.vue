<!-- 个人中心页面 -->
<template>
	<view class="me">
		<meTop :bg="bg"></meTop>
		<typeTab
		:top="320"
		:tab="tab"
		:isActive="isActive"
		@tab="isActive=0"
		@toTab="isActive=1"
		></typeTab>
		<plylistCon v-show="isActive==0" 
		:top="top" 
		:trackCount="hisCount" 
		:tracks="hisTracks"
		:isShowIcon="isShowIcon"></plylistCon>
		<plylistCon v-show="isActive==1"
		:top="top" 
		:trackCount="likeCount"
		:tracks="likeTracks"
		:isShowIcon="isShowIcon"
		></plylistCon>
	</view>
</template>

<script>
	import meTop from './components/meTop.vue'
	import typeTab from '../../components/typeTab.vue'
	import plylistCon from '../../components/playlistCon.vue'
	export default {
		components:{
			meTop,
			typeTab,
			plylistCon
		},
		data() {
			return {
				bg:'http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg',
			    isActive:0,
				tab:['最近','喜欢'],
				hisTracks:[],
				hisCount:0,
				likeCount:0,
				top:420,
				likeTracks:[],
				isShowIcon:true
			}
		},
		onShow() {
			this.getData()
		},
		methods: {
			//获取历史播放和收藏歌曲
			getData(){
				const db = wx.cloud.database();
				uni.getStorage({
					key:'OldSongs',
					success:res=>{
						this.hisTracks=res.data;
						this.hisCount = res.data.length
					}
				});
				uni.getStorage({
					key:"userId",
					success:res=>{
						let id = res.data;
						db.collection('userLike').doc(id).get({
							success:re=>{
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
	.me{
	}

</style>
