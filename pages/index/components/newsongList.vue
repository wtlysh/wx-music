 <!-- 最新歌曲组件 -->
<template>
	<view class="newsong">
		<songTop :title="title" @child="toSongList"></songTop>
		<view class="newsong-container flex-between">
			<view class="newsong-list" 
			v-for="(item,index) in songs" 
			:key="item.id"
			@click="toSong(item)"
			>
				<view>
					<image class="newsong-img" :src="item.al.picUrl" mode=""></image>
				</view>
				<view class="newsong-content">
					<view class="name ellipsis">
						{{item.name}}
					</view>
					<view class="ellipsis">
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
			toSong(item){
				let list = [item];
				uni.navigateTo({
					url:'/pages/song/player?songId='+item.id+'&index=0'+'&list='+ encodeURIComponent(JSON.stringify(list))
				})

			},
			//跳转到新歌榜单页面
			toSongList(){
				uni.navigateTo({
					url:"/pages/song/index?id="+this.newId,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newsong {
		margin-bottom: 40rpx;
		
		.newsong-container {
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
				}
			}

		}
	}
</style>
