<template>
	<view class="play-bottom">
		<view class="play-opration">
			<view class="play-text" @click="toLike">
				<view class="img-box">
					<image class="bottom-img" v-if="!isLike" src="../../../static/images/notlike.svg" mode=""></image>
					<image class="bottom-img" v-if="isLike" src="../../../static/images/like.svg" mode=""></image>
				</view>
				<text>收藏</text>
			</view>
		</view>
		<view class="play-opration">
			<view class="play-text">
				<view class="img-box">
					<image class="bottom-img" src="../../../static/images/share.svg" mode=""></image>
				</view>
				<text>分享</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			isLike:{
				type:Boolean,
				default:false
			},
			likeSong:{
				type:Object,
				default:{}
			}
		},
		methods:{
			//收藏歌曲
			toLike(){
				if(this.isLike){
					return ;
				};
				this.isLike = true;
				const db = wx.cloud.database();
				let likeSong = this.likeSong;
				uni.getStorage({
					key:"userId",
					success:res=>{
						let id = res.data;
						db.collection('userLike').doc(id).get({
							success:re=>{
								// console.log("成功："+re);
								let song = re.data.like_songs;
								// console.log(re.data);
								song.unshift(likeSong);
								// console.log(song);
								db.collection('userLike').doc(id).update({
								  data: {
									  like_songs:song
								  },
								  success: (es) => {
								    // console.log(es.data)
								  },
								  fail:er=>{
									  // console.log(er);
								  }
								})
							},
							fail:err=>{
								// console.log("失败："+err);
								db.collection('userLike').add({
								  data: {
								    _id: id,
								    like_songs:[likeSong],
								  },
								  success: (r) => {
								    // console.log(r)
								  }
								})
							}
						})
					},
					fail:err=>{
						console.log(err);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.play-bottom {
		display: flex;
		width: 100%;
		position: absolute;
		bottom: 0;
		margin: 100rpx 0;
	
		.play-opration {
			width: 50%;
			height: 80rpx;
			color: white;
			display: flex;
			justify-content: center;
	
			.play-text {
				width: 250rpx;
				border-radius: 50rpx;
				border: 1px solid #FFFFFF;
				line-height: 80rpx;
				font-size: 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.img-box{
					display: flex;
					padding-right: 30rpx;
					.bottom-img{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}
	
	}
</style>
