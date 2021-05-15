 <!-- 最新歌曲组件 -->
<template>
	<view class="newsong">
		<songTop :title="title" @child="toSongList"></songTop>
		<view class="newsong-container">
			<view class="newsong-list" 
			v-for="item in songs" 
			:key="item.id"
			@click="toSong(item.id)"
			>
				<view>
					<image class="newsong-img" :src="item.al.picUrl" mode=""></image>
				</view>
				<view class="newsong-content">
					<view class="newsong-name">
						{{item.name}}
					</view>
					<view class="newsong-artist">
						<text v-for="(list,index) in item.ar" :key="list.id">
							<text class="song-text" v-if="index==0" >
								{{list.name}}
							</text>
							<text class="song-text" v-else >
								/{{list.name}}
							</text>
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import songTop from './songTop.vue'
	export default {
		props: {
			songs:{
				type:Array,
				default:[]
			},
			newId:{
				type:String,
				default:''
			}
		},
		components:{
			songTop
		},
		data(){
			return {
				title:'最新歌曲'
			}
		},
		methods:{
			//跳转到歌曲播放
			toSong(id){
				uni.navigateTo({
					url:'/pages/song/player?songId='+id,
				})

			},
			//跳转到新歌榜单页面
			toSongList(){
				uni.navigateTo({
					url:"/pages/song/index?id="+this.newId
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newsong {
		margin-bottom: 40rpx;
		
		.newsong-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 50rpx;

			.newsong-list {
			    width: 200rpx;
				margin-bottom: 20rpx;

				.newsong-img {
					width: 200rpx;
					height: 200rpx;
					border-radius: 20rpx;
				}

				.newsong-content {
					padding-left: 20rpx;
					margin: auto 0;

					.newsong-name {
						font-size: 32rpx;
						font-weight: bold;
						white-space: nowrap; //文本强制不换行；
						text-overflow: ellipsis; //文本溢出显示省略号；
						overflow: hidden; //溢出的部分隐藏
					}

					.newsong-artist {
						white-space: nowrap; //文本强制不换行；
						text-overflow: ellipsis; //文本溢出显示省略号；
						overflow: hidden; //溢出的部分隐藏
					}
				}
			}

		}
	}
</style>
