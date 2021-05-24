<template>
	<view class="poplist-box">
		<view class="poplist-title">
			<text class="total">当前播放({{audiolist.length}})</text>
			<text class="model" v-if="playModel==0" @click="setPlayModel">
				<text class="iconfont">&#xe66c;</text>
				<text>列表循环</text>
			</text>
			<text class="model" v-if="playModel==1" @click="setPlayModel">
				<text class="iconfont">&#xe66b;</text>
				<text>随机播放</text>
			</text>
			<text class="model" v-if="playModel==2" @click="setPlayModel">
				<text class="iconfont">&#xe66d;</text>
				<text>单曲循环</text>
			</text>
		</view>
		<scroll-view scroll-y="true" style="height: 578rpx;">
			<view class="item-con" :class="[item.id == playdetail.id?'active':'']"
				v-for="(item,index) in audiolist" :key="index" 
				@click="initPlay(item.id,index)"
				>
				<view style="font-size: 36rpx;width: 60rpx;" class="num text-color">
					{{index+1}}
				</view>
				<view style="padding-left: 30rpx;width: 470rpx;">
					<view class="item-name ellipsis">
						{{item.name}}
					</view>
					<view class="num song-text text-color">
						{{item.ar[0].name}}
					</view>
				</view>
				<view style="width: 90rpx;">
					<image class="item-img" src="../static/images/topaly.svg" mode="">
					</image>
				</view>
			</view>
		</scroll-view>
		<view class="poplist-close" @tap.stop="closeList">
			关闭
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	import {
		apiSong,
		apiSongDetail
	} from '../api/player.js'
	export default{
		data(){
			return {
				playModel: 0,//播放模式
				isPlay: false,//当前是否播放	
			}
		},
		computed:{
			...mapGetters(['playdetail','audiolist']),
		},
		methods:{
			...mapMutations(['setPlaydetail', 'setIsplayingmusic', 'setIsplayactive']),
			//设置播放模式
			setPlayModel() {
				this.playModel = this.playModel == 2 ? 0 : this.playModel + 1;
				uni.showToast({
					icon: 'none',
					title: ['列表循环', '随机播放', '单曲循环'][this.playModel]
				})
			},
			getIndex(type, isAuto) {
				//['列表循环', '随机播放', '单曲循环']
				let next = 0;
				let prev = 0;
				let cur = this.playdetail.index;
				const last = this.audiolist.length - 1;
				if (this.playModel === 0 || this.playModel === 2) {
					next = cur == last ? 0 : cur + 1;
					prev = cur == 0 ? last : cur - 1;
				}
				if (this.playModel === 1) {
					next = Math.floor(Math.random() * (last + 1))
					prev = Math.floor(Math.random() * (last + 1))
				}
				if (isAuto && this.playModel === 2) {
					next = cur
				}
				return type == 'next' ? next : prev
			},
			//初始化播放
			async initPlay(id,index) {
				let pages = getCurrentPages();
				let page =(pages[pages.length - 1]).route;
				if(page=='pages/song/player'){
					this.$emit('play',id);
					return;
				};
				await Promise.all([apiSong({
					id
				}), apiSongDetail({
					ids: id
				})]).then(res => {
					// console.log(res[0])
					const surl = res[0].data[0].url;
					if (!surl) {
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '资源已失效!请返回'
							})
						}, 1000);
						return;
					}
					const sdetail = res[1].songs[0];
					const singer = sdetail.ar[0].name;
					let song ={
						id,
						url: surl,
						name: sdetail.name,
						picUrl: sdetail.al.picUrl,
						singer,
						time: Math.floor(sdetail.dt / 1000) // 播放时长
					}
					this.setPlaydetail({
						index,
						id,
						picUrl: song.picUrl,
						desc: song.name,
						time: song.time // 播放时长
					})
					this.$au_player.url = song.url;
					this.$au_player.title = song.name;
					this.$au_player.coverImgUrl = song.picUrl;
					this.$au_player.singer = song.singer ;
					//h5
					this.$au_player.autoplay = true;
					//app
					this.$au_player.src = surl;
				
					let OldSong = {
						id,
						name: sdetail.name,
						ar: sdetail.ar,
					}
					this.saveSong(OldSong);
				}).catch(e => {
					// console.info(e)
					this.setIsplayactive(false)
				})
			},
			//保存歌曲到历史记录
			saveSong(OldSong) {
				uni.getStorage({
					key: 'OldSongs',
					success: (res) => {
						// console.log(res.data)
						let list = res.data;
						list.forEach((item, index) => {
							if (item.id == OldSong.id) {
								list.splice(index, 1)
							}
						})
						list.unshift(OldSong)
						uni.setStorage({
							key: 'OldSongs',
							data: list,
						})
					},
					fail: err => {
						uni.setStorage({
							key: 'OldSongs',
							data: [OldSong]
						})
					}
				})
			},
			//关闭列表弹窗
			closeList(){
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../static/scss/songList.scss";
	.poplist-box {
		display: block;
		height: 800rpx;
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 5% 5% 0 0;
	    position: relative;
		.poplist-title {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 120rpx;
			line-height: 120rpx;
			font-size: $uni-font-size-base;
	
			.total {
				font-size: $uni-font-size-lg;
				margin-left: 50rpx;
			}
	
			.model {
				margin-right: 50rpx;
			}
		}
	
		.poplist-close {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			background: #fff;
			text-align: center;
			line-height: 100rpx;
			font-size: $uni-font-size-base;
		}
	}
</style>
