<!-- 推荐歌单页面 -->
<template>
	<view class="playlists">
		<nav-bar :title="title"></nav-bar>
		<view class="box-width">
			<view class="playlists-list" v-for="(item,index) in playLists" :key="index">
				<view class="playlists-name title">
					网友精选 · {{cat[index]}}歌单
				</view>
				<view class="flex-between">
					<view class="playlists-item" v-for="li in item" :key="li.id" @click="toPlaylist(li.id)">
						<image style="width: 324rpx;height: 324rpx;border-radius: 20rpx;" :src="li.picUrl" mode="">
						</image>
						<view class="play-count">
							<uni-icons type="headphones" color="#fff" size="30"></uni-icons>
							<text style="color: #fff;font-size: 22rpx;padding-left: 8rpx;">{{li.desc}}</text>
						</view>
						<view class="playlists-item-name ellipsis_2">
							{{li.name}}
						</view>
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
	import {
		numberFormat
	} from '../../utils/numberFormat.js'
	export default {
		data() {
			return {
				title:'歌单',
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
							let desc = numberFormat(item.playCount);
							return {
								id: item.id,
								name: item.name,
								picUrl: item.coverImgUrl,
								desc: desc,
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
		.playlists-list {
			padding: $uni-spacing-col-lg 0 $uni-spacing-col-sm 0;

			.playlists-name {
				margin-bottom: $uni-spacing-col-base;
			}


			.playlists-item {
				width: 48%;
				margin-bottom: $uni-spacing-col-lg;
				position: relative;

				&.playlists-firstitem {
					margin-top: $uni-spacing-col-lg;
				}

				.play-count {
					position: absolute;
					top: 270rpx;
					right: 15rpx;
				}

				.playlists-item-name {
					font-size: $uni-font-size-base;
					padding-top: $uni-spacing-col-sm;
				}
			}
		}
	}
</style>
