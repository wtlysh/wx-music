<!-- 首页 -->
<template>
	<view class="home">
		<nav-bar :title="title" :showIcon="false"></nav-bar>
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
	export default {
		components: {
			Search,
			hotsongList,
			newsongList,
			playlist
		},
		data() {
			return {
				title:"音乐",
				hotId: "2250011882", //热门榜单ID
				Hotsongs: [],
				newId: "3779629",
				Newsongs: [],
				playlist: [],
			}
		},
		created() {
			this.getData(this.hotId, this.newId);
		},
		methods: {
			//获取首页所有数据
			async getData(id, _id) {
				await Promise.all([getMuListDetail({
					id: id
				}), getMuListDetail({
					id: _id
				}), getMuList({
					limit: 6
				})]).then(res => {
					// console.log(res);
					let list = res[0].playlist.tracks;
					for (let i = 0; i < 3; i++) {
						this.Hotsongs[i] = list.slice(i * 3, (i + 1) * 3);
					}
					this.Newsongs = res[1].playlist.tracks.slice(0, 6);
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
