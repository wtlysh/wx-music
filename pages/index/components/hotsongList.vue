<!-- 推荐歌曲组件 -->
<template>
	<view class="hotsong">
		<songTop :title="title" @child="toSongList"></songTop>
		<view class="hotsong-container">
			<scroll-view scroll-x="true" scroll-with-animation="true">
				<view class="hotsong-list">
					<view class="hotsong-li" v-for="(list,index) in songs" :key="index">
						<view class="hotsong-item" 
						@click="toSong(item.id)"
						v-for="item in list" :key="item.id">
							<image class="hotsong-img" :src="item.al.picUrl" mode=""></image>
						    <view style="padding-left: 20rpx;">
						    	<view style="font-size: 32rpx;font-weight: bold;padding-bottom:10rpx;">
						    		{{item.name}}
						    	</view>
								<view class="song-text">
									{{item.ar[0].name}}-{{item.name}}
								</view>
						    </view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import songTop from './songTop.vue'
	export default {
		props: {
			songs: {
				type: Array,
				default: []
			}
		},
		components:{
			songTop
		},
		data(){
			return{
				title:'推荐歌曲'
			}
		},
		methods:{
			//跳转到歌曲播放页面
			toSong(id){
				uni.navigateTo({
					url:'/pages/song/player?songId='+id,
				})

			},
			//跳转到热门歌曲页面
			toSongList(){
				uni.navigateTo({
					url:'/pages/song/songList'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hotsong {
		margin-bottom: 40rpx;
		.hotsong-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.hotsong-list {
				width: 1950rpx;
				height: 450rpx;
				padding:0 50rpx;
				display: flex;
				.hotsong-li{
					width: 650rpx;
					.hotsong-item{
						display: flex;
						margin-bottom: 20rpx;
						align-items: center;
						.hotsong-img{
							width: 130rpx;
							height: 130rpx;
							border-radius: 20rpx;
						}
					}
				}

			}

		}
	}
</style>
