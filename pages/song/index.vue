<!-- 新歌榜页面 -->
<template>
	<view class="songlist">
		<nav-bar :title="title"></nav-bar>
		<view class="songlist-top">
			<image class="songlist-img" :src="bgimg" mode=""></image>
		</view>
		<playlistCon :top="top" :tracks="tracks"></playlistCon>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import playlistCon from '../../components/playlistCon.vue'
	import {
		getMuListDetail,
	} from '../../api/index.js'
	export default{
		components:{
			playlistCon
		},
		data(){
			return{
				top:380,
				tracks:[],
			    bgimg:'',
				title:"新歌榜"
			}
		},
		onLoad(param) {
			this.getData(param.id)
		},
		methods:{
			//获取新歌榜数据
			async getData(id){
				await getMuListDetail({
					id:id
				}).then(res=>{
					// console.log(res)
					let list =res.playlist
					this.tracks=list.tracks;
					this.bgimg=list.coverImgUrl;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.songlist{
		.songlist-top{
			height: 400rpx;
			padding-top: $uni-spacing-col-base;
			background: #fff;
			position: relative;
			.songlist-img{
				position: absolute;
				top: 0;
				height: 450rpx;
				width: 750rpx;
			}
		}
	}
</style>
