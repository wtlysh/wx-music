<!-- 推荐歌单页面 -->
<template>
	<view class="playlists">
		<view class="playlists-list" v-for="(item,index) in playLists" :key="index">
			<view class="playlists-name">
				网友精选 · {{cat[index]}}歌单
			</view>
			<view class="playlists-con">
				<view class="playlists-item" v-for="li in item" :key="li.id" @click="toPlaylist(li.id)">
					<image style="width: 324rpx;height: 324rpx;border-radius: 20rpx;" :src="li.picUrl" mode="">
					</image>
					<view class="play-count">
						<uni-icons type="headphones" color="#fff" size="15"></uni-icons>
						<text style="color: #fff;font-size: 22rpx;padding-left: 8rpx;">{{li.desc}}</text>
					</view>
					<view class="playlists-item-name">
						{{li.name}}
					</view>
				</view>
			</view>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import {
		getMuList
	} from '../../api/index.js'
	import {numberFormat} from '../../utils/numberFormat.js'
	export default {
		data() {
			return {
				playLists: [],
				cat: ['流行', '浪漫', '摇滚']
			}
		},
		created() {
			this.getPlaylists(this.cat);
		},
		methods: {
			//获取推荐歌单数据
			async getPlaylists(cat) {
				await Promise.all([getMuList({
					cat: cat[0],
					limit: 4
				}), getMuList({
					cat: cat[1],
					limit: 4
				}), getMuList({
					cat: cat[2],
					limit: 4
				})]).then(res => {
					// console.log(res[0].playlists)
					for (let i = 0; i < cat.length; i++) {
						this.playLists[i] = res[i].playlists.map(item => {
						    let desc =  numberFormat(item.playCount);
						    return {
							   id:item.id,
							   name:item.name,
							   picUrl:item.coverImgUrl,
							   desc:desc,
						   }
					    });
					}
				})
				// console.log(this.playLists)
				this.$forceUpdate();
			},
			//跳转到歌单详情页面
			toPlaylist(id) {
				uni.navigateTo({
					url: '/pages/playlist/playlistDetail?id=' + id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlists {
		width: 90%;
		margin: 0 auto;

		.playlists-list {
			padding: 30rpx 0 10rpx 0;

			.playlists-name {
				font-size: 40rpx;
				font-weight: bold;
				margin-bottom: 15rpx;
			}

			.playlists-con {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.playlists-item {
					width: 48%;
					margin-bottom: 30rpx;
					position: relative;

					&.playlists-firstitem {
						margin-top: 30rpx;
					}
                    .play-count{
                    	position: absolute;
                    	top: 270rpx;
                    	right: 15rpx;
                    }
					.playlists-item-name {
						font-size: 32rpx;
						padding-top: 10rpx;
						color: #6b6b6b;
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
