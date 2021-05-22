<!-- 推荐歌单组件 -->
<template>
	<view class="home-playlist">
		<songTop :title="title" @child="toPlaylists"></songTop>
		<view class="playlist-container">
			<scroll-view scroll-x="true">
				<view class="home-playlist-list flex-between">
					<view @click="toPlaylist(item.id)"
					class="home-playlist-item" v-for="(item,index) in playlist" :key="index">
						<image class="home-playlist-img" :src="item.picUrl" mode=""></image>
						<view class="play-count">
							<uni-icons type="headphones" color="#fff" size="30"></uni-icons>
							<text style="color: #fff;font-size: 22rpx;padding-left: 8rpx;">{{item.desc}}</text>
						</view>
						<view class="home-playlist-name ellipsis_2">
							{{item.name}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import songTop from './songTop.vue'
	export default{
		props: {
			playlist:{
				type:Array,
				default:[]
			},
		},
		components:{
			songTop
		},
		data(){
			return {
				title:'推荐歌单'
			}
		},
		methods:{
			//跳转到歌单详情页面
			toPlaylist(id){
				uni.navigateTo({
					url:'/pages/playlist/playlistDetail?id='+id
				})
			},
			//跳转到歌单推荐页面
			toPlaylists(){
				uni.navigateTo({
					url:"/pages/playlist/index"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-playlist{
		margin-bottom: $uni-spacing-col-lg;
	    .playlist-container {
			
			.home-playlist-list{
				width: 1370rpx;
				padding:0 37.5rpx;
				.home-playlist-item {
					width: 215rpx;
					margin-bottom: $uni-spacing-col-base;
					position: relative;
				
					.home-playlist-img {
						width: 215rpx;
						height: 215rpx;
						border-radius: $uni-border-radius-lg;
					}
					.play-count{
						position: absolute;
						top: 165rpx;
						right: 15rpx;
					}
					.home-playlist-name{
						width: 215rpx;
						font-size: $uni-font-size-base;
						padding-top: $uni-spacing-col-sm;
					}
				}
			}
		}
	}
</style>
