<!-- 首页 -->
<template>
	<view class="home">
		<nav-bar :showIcon="false"></nav-bar>
		<Search></Search>
		<view class="home-con">
			<hotsongList :songs="Hotsongs"></hotsongList>
			<newsongList :songs="Newsongs" :newId="newId"></newsongList>
			<playlist :playlist="playlist"></playlist>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import {numberFormat} from '../../utils/numberFormat.js'
	import Search from './components/search.vue'
	import hotsongList from './components/hotsongList.vue'
	import newsongList from './components/newsongList.vue'
	import playlist from './components/playlist.vue'
	import {
		getMuList,
		getMuListDetail,
		getHotMuList
	} from '../../api/index.js'
	import { mapMutations } from 'vuex'
	export default {
		components: {
			Search,
			hotsongList,
			newsongList,
			playlist
		},
		data() {
			return {
				hotId: "2250011882", //热门榜单ID
				Hotsongs: [],
				newId: "3779629",
				Newsongs: [],
				playlist: [],
			}
		},
		created() {
			this.getData(this.hotId, this.newId);
			uni.getSystemInfo({
				success: (res) => {
					let item = (750 / res.windowWidth);
					let height = ((res.statusBarHeight + 44) * item);
					this.setTopHeight(height);
					// console.log(height)
				}
			});
		},
		methods: {
			...mapMutations(['setTopHeight']),
			//获取首页所有数据
			async getData(id, _id) {
				await Promise.all([getMuListDetail({
					id: id
				}), getMuListDetail({
					id: _id
				}), getMuList({
					limit: 6
				})]).then(res => {
					// console.log(res[1].playlist.tracks);
					let list = res[0].playlist.tracks.slice(0,6).map(item => {
						let singer = item.ar.map(t => {
							return t.name
						}).join('/');
						let desc = singer + '-' + item.name;
						return {
							id: item.id,
							name: item.name,
							singer:singer,
							picUrl:item.al.picUrl,
							desc: desc,
							desc
						}
					});
					for (let i = 0; i < 2; i++) {
						this.Hotsongs[i] = list.slice(i * 3, (i + 1) * 3);
					}
					this.Newsongs = res[1].playlist.tracks.slice(0, 6).map(item => {
						let singer = item.ar.map(t => {
							return t.name
						}).join('/');
						return {
							id: item.id,
							name: item.name,
							singer:singer,
							picUrl:item.al.picUrl,
						}
					});
					this.playlist = res[2].playlists.map(item => {
						let desc =  numberFormat(item.playCount);
						return {
							id:item.id,
							name:item.name,
							picUrl:item.coverImgUrl,
							desc:desc,
						}
					});
				})
				//数据强制更新
				this.$forceUpdate();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.home-con {
			position: relative;
			top: 110rpx;
			background: $uni-bg-color-grey;
		}
	}
</style>
