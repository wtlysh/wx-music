<!-- 歌曲列表公共组件 -->
<template>
	<view class="playlist-list-con">
		<view class="playlist-list-top" :style="{top:top + 'rpx'}">
			<view class="top-con">
				<view style="font-size: 36rpx;font-weight: bold;flex: 1;">
					共{{trackCount}}首歌曲
				</view>
				<view class="play-all">
					播放全部
				</view>
			</view>
		</view>
		<view class="playlist-list" :style="{top:(top+170)+'rpx'}">
			<scroll-view scroll-y="true">
				<view class="playlist-list-item" 
				v-for="(item,index) in tracks" :key="index"
				@click="toSong(item.id)">
					<view class="item-con">
						<view style="font-size: 36rpx;width: 60rpx;" class="text-color">
							{{index+1}}
						</view>
						<view style="padding-left: 30rpx;">
							<view class="item-name">
								{{item.name}}
							</view>	
							<view class="song-text text-color">
								{{item.ar[0].name}}
							</view>
						</view>
					</view>
					<view v-if="isShowIcon">
						<image class="item-img" style="margin:0 20rpx;" src="../static/images/topaly.svg" mode=""></image>
					    <image class="item-img" src="../static/images/more.svg" mode=""></image>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			top:{
				type:Number,
				default:0
			},
			tracks:{
				type:Array,
				default:[]
			},
			trackCount:{
				type:Number,
				default:0
			},
			isShowIcon:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			//跳转到歌曲播放页面
			toSong(id){
				uni.navigateTo({
					url:`/pages/song/player?songId=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-list-con{
		background: #FFFFFF;
		position: relative;
		top: -50rpx;
		.playlist-list-top{
			position: fixed;
			// top: 380rpx;
			z-index: 1000;
			background: #fff;
			width: 650rpx;
			height: 70rpx;
			padding:0 50rpx;
			border-top-left-radius: 50rpx;
			// border-top-right-radius: 50rpx;
			border-bottom: 1px solid #f2f2f2;
			.top-con{
				display: flex;
				.play-all{
					// display: flex;
					font-size: 32rpx;
				}
			}
		}
		.playlist-list{
			position: relative;
			// top: 550rpx;
			padding: 0 50rpx;
			.playlist-list-item{
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;
				.item-con{
					flex: 1;
					display: flex;
					align-items: center;
					.item-name{
						width: 420rpx;
						font-size: 32rpx;
						padding-bottom: 10rpx;
						white-space: nowrap; //文本强制不换行；
						text-overflow: ellipsis; //文本溢出显示省略号；
						overflow: hidden; //溢出的部分隐藏
					}
				}
				.item-img{
					width: 50rpx;
					height: 50rpx;
				}
				.text-color{
					color: #6b6b6b;
				}
			}
		}
	}
</style>
