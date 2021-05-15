<!-- 搜索结果歌曲列表组件 -->
<template>
		<view class="song-list">
			<scroll-view scroll-y="true">
					<view class="song-list-item" v-for="(item, index) in songList" :key="index" @click="toPlay(item.id,index,songList)">
						<view class="con">
							<view class="song-list-name">{{item.name}}</view>
							<view class="desc song-text">{{item.desc}}</view>
						</view>
						<image style="width: 50rpx;height: 50rpx;" src="../../../static/images/topaly.svg" mode=""></image>
					</view>
			</scroll-view>
		</view>
</template>

<script>
export default {
	props:{
		songList:{
			type:Array,
			default:[]
		}
	},
	data() {
		return {};
	},
	methods: {
		//跳转到播放页面
		toPlay(id,index,list){
			uni.navigateTo({
				url:'/pages/song/player?songId='+id
			})
		}

	}
};
</script>

<style lang="scss" scoped>
	.song-list{
		padding-top: 200rpx;
		width: 90%;
		margin: 0 auto;
		.song-list-item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			position:relative;
			height:120rpx;
		}
		.con{
			max-width: 580rpx;
			.song-list-name{
				margin-top:12rpx ;
				margin-right:20rpx;
				line-height: 58rpx;
				font-size: 32rpx;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.desc{
				line-height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}

</style>

