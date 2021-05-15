<!-- 推荐歌单组件 -->
<template>
	<view class="home-playlist">
		<songTop :title="title" @child="toPlaylists"></songTop>
		<view class="playlist-container">
			<scroll-view scroll-x="true">
				<view class="home-playlist-list">
					<view @click="toPlaylist(item.id)"
					class="home-playlist-item" v-for="(item,index) in playlist" :key="index">
						<image class="home-playlist-img" :src="item.coverImgUrl" mode=""></image>
						<view class="home-playlist-name">
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
		margin-bottom: 40rpx;
	    .playlist-container {
			
			.home-playlist-list{
				display: flex;
				justify-content: space-between;
				width: 1325rpx;
				padding:0 50rpx;
				.home-playlist-item {
					width: 200rpx;
					margin-bottom: 20rpx;
				
					.home-playlist-img {
						width: 200rpx;
						height: 200rpx;
						border-radius: 20rpx;
					}
					.home-playlist-name{
						width: 200rpx;
						font-size: 32rpx;
						padding-top: 10rpx;
						display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示
						word-break: break-all;
						-webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
						-webkit-line-clamp: 2; // 需要显示的行数
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
