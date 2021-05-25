<!-- 新歌榜页面 -->
<template>
	<view class="songlist">
		<view class="songlist-top">
			<nav-bar :backgroundColor="bg" :color="color"></nav-bar>
			<view class="flex-center">
				<view class="newsong-title flex-center">
					新 歌 榜
				</view>
			</view>
		</view>
		<playlistCon class="list-con" :tracks="tracks" :style="{top:(topHeight+200)+'rpx'}"></playlistCon>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import  { mapGetters } from 'vuex'
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
			    bg:'',
				color:"#fff"
			}
		},
		onLoad(param) {
			this.getData(param.id)
		},
		computed:{
			...mapGetters(['topHeight'])
		},
		methods:{
			//获取新歌榜数据
			async getData(id){
				await getMuListDetail({
					id:id
				}).then(res=>{
					// console.log(res)
					let list =res.playlist
					this.tracks=list.tracks.map(item=>{
						let singer = item.ar.map(t => {
							return t.name
						}).join('/');
						return {
							id: item.id,
							name: item.name,
							singer:singer,
						}
					});
					this.bgimg=list.coverImgUrl;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.songlist{
		.songlist-top{
			background:linear-gradient(to bottom ,#7A88FF, #7AFFAF);
			position: fixed;
			z-index: 100;
			// border-bottom-left-radius: 50rpx;
			// border-bottom-right-radius: 50rpx;
			
			.newsong-title{
				margin: 50rpx 0;
				height: 100rpx;
				width: 200rpx;
				color: $uni-text-color-inverse;
				font-size: 50rpx;
				font-weight: bold;
				border-radius: 100rpx;
				// border: 10rpx solid;
			}
		}
	}
</style>
