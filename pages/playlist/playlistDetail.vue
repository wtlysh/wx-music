<!-- 歌单详情页面 -->
<template>
	<view class="playlist-detail">
		<nav-bar :backgroundColor="bg" :color="color"></nav-bar>
		<playlistTop :album="album" :bgimg="bgimg" :top="topHeight"></playlistTop>
		<playlistCon class="list-con"  style="top:290rpx"  
		:tracks="tracks">
		</playlistCon>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import {
		getMuListDetail
	} from '../../api/index.js'
	import {
		numberFormat
	} from '../../utils/numberFormat.js'
	import playlistTop from './components/playlistTop.vue'
	import playlistCon from '../../components/playlistCon.vue'
	export default {
		data() {
			return {
				bgimg: '',
				bg: "",
				color:"#fff",
				top: 420,
				album: {
					id: '',
					name: '',
					creator: {
						avatarUrl: '',
						nickname: '',
					},
					desc: '',
					description: ''
				},
				tracks: [],
				playList: [],
			}
		},
		components: {
			playlistTop,
			playlistCon
		},
		onLoad(param) {
			this.getPlaylistDetail(param.id);
		},
		computed: {
			...mapGetters(['topHeight']),
		},
		methods: {
			//获取歌单详情页面
			async getPlaylistDetail(id) {
				await getMuListDetail({
					id: id
				}).then(res => {
					// console.log(res)
					let album = res.playlist;
					this.bgimg = album.backgroundCoverUrl || album.coverImgUrl;
					let desc = numberFormat(album.playCount);
					this.album = {
						id: album.id,
						name: album.name,
						creator: {
							avatarUrl: album.creator.avatarUrl,
							nickname: album.creator.nickname
						},
						desc: desc,
					};
					this.tracks = album.tracks.map(item => {
						let singer = item.ar.map(t => {
							return t.name
						}).join('/');
						return {
							id: item.id,
							name: item.name,
							singer:singer
						}
					});
					// console.log(this.tracks)
					this.playList = res.privileges;
				})
			},
			//跳转到歌曲播放页面
			toSong(id) {
				uni.navigateTo({
					url: '/pages/song/player?songId=' + id,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.playlist-detail {}
</style>
