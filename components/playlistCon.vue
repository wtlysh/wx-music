<!-- 歌曲列表公共组件 -->
<template>
	<view class="playlist-list-con">
		<view class="playlist-list-top" :style="{top:top + 'rpx'}">
			<view style="font-size: 36rpx;font-weight: bold;">
				共{{trackCount}}首歌曲
			</view>
		</view>
		<view class="playlist-list" :style="{top:(top+170)+'rpx'}">
			<scroll-view scroll-y="true">
				<view class="playlist-list-item" 
				v-for="(item,index) in tracks" :key="index"
				@click="toSong(item.id)">
					<view style="font-size: 36rpx;width: 40rpx;" class="text-color">
						{{index+1}}
				    </view>
				    <view style="padding-left: 30rpx;">
						<view style="font-size: 34rpx;padding-bottom: 10rpx;">
							{{item.name}}
						</view>	
						<view class="song-text text-color">
							{{item.ar[0].name}}
						</view>
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
			width: 750rpx;
			height: 70rpx;
			padding:30rpx 0 0 40rpx;
			border-top-left-radius: 50rpx;
			// border-top-right-radius: 50rpx;
			border-bottom: 1px solid #f2f2f2;
		}
		.playlist-list{
			position: relative;
			// top: 550rpx;
			padding: 0 40rpx;
			.playlist-list-item{
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;
				.text-color{
					color: #6b6b6b;
				}
			}
		}
	}
</style>
