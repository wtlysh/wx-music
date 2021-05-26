<!-- 最新歌曲组件 -->
 <template>
 	<view class="newsong">
 		<songTop :title="title" @child="toSongList"></songTop>
 		<view class="box-width flex-between">
 			<view class="newsong-list" v-for="(item,index) in songs" :key="item.id" @click="toSong(item.id,index)">
 				<view>
 					<image class="newsong-img" :src="item.picUrl" mode=""></image>
 				</view>
 				<view class="newsong-content">
 					<view class="name ellipsis">
 						{{item.name}}
 					</view>
 					<view class="ellipsis song-text">
 						{{item.singer}}
 					</view>
 				</view>
 			</view>
 		</view>
 	</view>
 </template>

 <script>
 	import songTop from './songTop.vue'
	import {
		apiSong
	} from '../../../api/player.js'
 	export default {
 		props: {
 			songs: {
 				type: Array,
 				default: []
 			},
 			newId: {
 				type: String,
 				default: ''
 			}
 		},
 		components: {
 			songTop
 		},
 		data() {
 			return {
 				title: '最新歌曲'
 			}
 		},
 		methods: {
 			//跳转到歌曲播放
 			async toSong(id,index) {
				await apiSong({id}).then(res=>{
					if(!res.data[0].url){
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '资源已失效'
							})
						}, 500);
						return;
					}
					let list = this.songs;
					uni.navigateTo({
						url: '/pages/song/player?songId=' + id + '&index='+index + '&list=' + encodeURIComponent(JSON
							.stringify(list))
					})
				})
 			},
 			//跳转到新歌榜单页面
 			toSongList() {
 				uni.navigateTo({
 					url: "/pages/song/index?id=" + this.newId,
 				})
 			}
 		}
 	}
 </script>

 <style lang="scss" scoped>
 	.newsong {
 		margin-bottom: $uni-spacing-col-lg;

 		.newsong-list {
 			width: 215rpx;
 			margin-bottom: $uni-spacing-col-base;

 			.newsong-img {
 				width: 215rpx;
 				height: 215rpx;
 				border-radius: $uni-border-radius-lg;
 			}

 			.newsong-content {
 				padding-left: $uni-spacing-row-base;
 				margin: auto 0;
 			}
 		}
 	}
 </style>
