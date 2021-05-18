<!-- 新歌榜页面 -->
<template>
	<view class="songlist">
		<view class="songlist-top">
			<image class="songlist-img" :src="bgimg" mode=""></image>
		</view>
		<playlistCon :top="top" :tracks="tracks"></playlistCon>
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
			    bgimg:''
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
			position: fixed;
			height: 400rpx;
			padding-top: 20rpx;
			background: #fff;
			overflow: hidden;
			width: 100%;
			z-index: 999;
			.songlist-img{
				position: absolute;
				top: 0;
				left: 0;
				height: 450rpx;
				width: 750rpx;
			}
		}
	}
</style>
