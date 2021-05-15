<!-- 个人中心页面 -->
<template>
	<view class="me">
		<meTop :bg="bg"></meTop>
		<view class="song-type">
			<view style="background: #FFFFFF;">
				<view class="song-type-box">
					<view class="song-type-list" @click="isActive = 0">
						<text :class="isActive==0 ? 'active' : ''">最近</text>
					</view>
					<view class="song-type-list" @click="isActive = 1">
						<text :class="isActive==1 ? 'active' : ''">收藏</text>
					</view>
				</view>
			</view>
		</view>
		<plylistCon v-show="isActive==0" 
		:top="top" 
		:trackCount="hisCount" 
		:tracks="hisTracks"></plylistCon>
		<plylistCon v-show="isActive==1"
		:top="top" 
		:trackCount="likeCount"
		:isLike="isLike"
		:tracks="likeTracks"
		></plylistCon>
	</view>
</template>

<script>
	import meTop from './components/meTop.vue'
	import plylistCon from '../../components/playlistCon.vue'
	export default {
		components:{
			meTop,
			plylistCon
		},
		data() {
			return {
				bg:'http://p4.music.126.net/NDdtSac66rpsF_jMBh1JMQ==/109951164929306650.jpg',
			    isActive:0,
				hisTracks:[],
				hisCount:0,
				likeCount:0,
				top:420,
				isLike:1,//是否收藏
				likeTracks:[]
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
		.song-type{
			position: fixed;
			z-index: 999;
			border-bottom: 1px solid #f2f2f2;
			width: 100%;
			top: 320rpx;
			.song-type-box{
				display: flex;
				padding: 0 50rpx;
				.song-type-list{
					width: 50%;
					text-align: center;
					height: 100rpx;
					line-height: 100rpx;
					color: #6b6b6b;
				}
			}
		}
	}

</style>
