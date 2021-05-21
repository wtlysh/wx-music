<template>
	<view class="play-bottom">
		<view class="play-opration">
			<view class="play-text flex-center" @click="toLike">
				<view class="img-box">
					<image class="bottom-img" v-if="!isLike" src="../../../static/images/notlike.svg" mode=""></image>
					<image class="bottom-img" v-if="isLike" src="../../../static/images/like.svg" mode=""></image>
				</view>
				<text>收藏</text>
			</view>
		</view>
		<view class="play-opration">
			<view class="play-text flex-center">
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
		},
		methods:{
			//收藏或取消收藏歌曲
			toLike(){
				if(this.isLike){
					this.$emit('cancle');
				}else{
					this.$emit('confirm')
				}
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
