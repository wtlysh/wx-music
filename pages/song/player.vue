<!-- 歌曲播放页面 -->
<template>
	<view class="song-player">
		<view class="player-content">
			<view class="player-bgimg" :style="'background-image:url('+song.picUrl+')'"></view>
			<view v-show="!isLyric">
				<view class="player-img" :class="[isPlay ? '' : 'stoped']">
					<view class="circle">
						<image class="img" :src="song.picUrl" mode=""></image>
					</view>
				</view>
				<view class="isplay" @click="playCtrol">
					<view class="isplay-bg"></view>
					<image class="isplay-img" v-show="isPlay" src="../../static/images/play.svg" mode=""></image>
					<image class="isplay-img" v-show="!isPlay" src="../../static/images/notplay.svg" mode=""></image>
				</view>
				<view class="lyric-opcity player-lyric" @click="toLyric">
					<view class="ric">{{lytop}}</view>
					<view class="ric cur">{{lycur}}</view>
					<view class="ric">{{lybot}}</view>
				</view>
			</view>
			<view class="lyric-opcity all-lyric" v-show="isLyric" :style="{height:(windowHeight-300) + 'rpx'}" @click="toLyric">
				<scroll-view scroll-y="true" :scroll-into-view="'view-' + ctrolIndex" style="height: 100%;width: 100%;">
					<view :class="['ric',index==lyricIndex?'cur':'']" :id="'view-'+index"
						:style="{height:((windowHeight-300)/13) + 'rpx'}" v-for="(item,index) in lyric" :key="index">
						{{item.text}}
					</view>
				</scroll-view>
			</view>
			<playBottom :isLike="isLike" :likeSong="likeSong"></playBottom>
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
		apiSongDetail,
		apiLyic
	} from '../../api/player.js'
	import playBottom from './components/playBottom.vue'
	import Vue from 'vue'
	let update = true;
	export default {
		components:{
			playBottom
		},
		data() {
			return {
				song: {
					id: '',
					url: '',
					name: '',
					singer: '',
					time: 0,
					picUrl: '',
				},
				lyric: [], //歌词
				lytop: '',
				lycur: '',
				lybot: '',
				isPlay: true, //是否播放
				isLyric: false, //是否显示全部歌词
				lyricIndex: 0, //定位当前歌词
				ctrolIndex: 0, //控制高亮歌词
				playTime: 0,
				curPlayTime: 0,
				curPlayIndex: 0,
				copyAudioList: [],
				windowHeight: 0 ,//屏幕高度
				likeSong:{}  ,//收藏歌曲
				isLike:false,//是否收藏
			}
		},
		onLoad(param) {
			uni.getSystemInfo({
				success: (res) => {
					// 　　console.log(res.windowHeight) // 获取可使用窗口高度
					this.windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
					// 　　console.log(this.windowHeight) //最后获得转化后得rpx单位的窗口高度
				}
			})
			// console.log(this.isLike);
			this.initPlay(param.songId);
		},
		computed: {
			...mapGetters(['audiolist']),
			playTimeNum() {
				return this.$util.formatTime(this.playTime)
			},
			curPlayTimeNum() {
				return this.$util.formatTime(this.curPlayTime)
			}
		},
		methods: {
			...mapMutations(['setAudiolist', 'setPlaydetail', 'setIsplayingmusic', 'setIsplayactive']),
			//控制歌曲播放
			playCtrol() {
				if (this.isPlay) {
					this.$au_player.pause();
				} else {
					this.$au_player.play();
				}
				this.isPlay = !this.isPlay;
				this.setIsplayingmusic(this.isPlay)
			},
			//显示或隐藏全部歌词
			toLyric() {
				this.isLyric = !this.isLyric;
			},
			//获取歌曲数据并开始播放
			initPlay(id) {
				Vue.prototype.cusPlay = this.onPlayFn
				Vue.prototype.cusTimeUpdate = this.onTimeUpdateFn
				Vue.prototype.cusEnded = this.onEndedFn

				Promise.all([apiSong({
					id
				}), apiSongDetail({
					ids: id
				})]).then(res => {

					const surl = res[0].data[0].url;
					if (!surl) {
						uni.showToast({
							icon: 'none',
							title: '资源已经失效!请返回'
						})
						return;
					}
					const sdetail = res[1].songs[0];
					// console.log(sdetail)
					const singer = sdetail.ar[0].name;
					this.lybot = '';
					this.lycur = '';
					this.lytop = '';
					this.song = {
						id,
						url: surl,
						name: sdetail.name,
						picUrl: sdetail.al.picUrl,
						singer,
						time: Math.floor(sdetail.dt / 1000) // 播放时长
					}
					// console.log(this.song)
					uni.setNavigationBarTitle({
						title: this.song.name
					})
					this.setPlaydetail({
						id,
						pic: sdetail.al.picUrl
					})
					this.$au_player.url = this.song.url;
					this.$au_player.title = this.song.name;
					this.$au_player.coverImgUrl = this.song.picUrl;
					this.$au_player.singer = this.song.singer;
					//h5
					this.$au_player.autoplay = true;
					//app
					this.$au_player.src = this.song.url;

					let OldSong = {
						id,
						name: sdetail.name,
						ar:sdetail.ar,
					}
					// console.log(OldSong)
					this.saveSong(OldSong);
					this.likeSong = OldSong;
					// console.log(this.likeSong)

				}).catch(e => {
					console.info(e)
					this.setIsplayactive(false)
				})
				//歌词可以 不用同步加载
				apiLyic({
					id
				}).then(res => {
					if (res.uncollected) {
						console.log('暂未收录歌词');
						this.lycur = '~暂未收录歌词~'
					}
					const lines = res.lrc.lyric.split('\n');
					const target = []
					for (let k in lines) {
						const timeMatch = lines[k].match(/\[(\d+:\d+\.\d+)\]/);
						let time = null;
						if (timeMatch) {
							const ts = timeMatch[1].split(':');
							time = Number(ts[0]) * 60 + Number(ts[1])
						}
						target.push({
							time,
							text: lines[k].replace(/^.+?\]/, '')
						})
					}
					this.lyric = target;
					// console.log(this.lyric)
				}).catch(e => {
					this.$au_player.play();
					console.log('歌词加载失败', e)
					this.lycur = '~歌词加载失败~'
				})
				this.$forceUpdate();
			},
			//歌曲正在播放
			onPlayFn() {
				this.playTime = this.song.time;
				this.isPlay = true
				this.setIsplayingmusic(true)
				this.setIsplayactive(true)
				// console.log('onplaying')
			},
			//根据时间处理歌词，显示高亮
			onTimeUpdateFn() {
				const curtime = this.$au_player.currentTime
				this.curPlayTime = Math.floor(curtime);
				const lyric = this.lyric;
				if (update && lyric.length > 0) {
					for (let i = 0; i < lyric.length - 1; i++) {
						if (lyric[i] !== null && curtime - lyric[i].time < 0.15) {
							this.lyricIndex = i - 1;
							if (this.lyricIndex > 6) {
								this.ctrolIndex = this.lyricIndex - 6;
							} else {
								this.ctrolIndex = 0;
							}
							if (i > 2) this.lytop = lyric[i - 2].text;
							if (i > 1) this.lycur = lyric[i - 1].text ? lyric[i - 1].text : '~~~~~~~~';
							if (i < lyric.length - 1) this.lybot = lyric[i].text;
							break;
						}
					}
				}
				this.$forceUpdate()

			},
			//歌曲播放结束
			onEndedFn() {
				// console.log('ended')
				this.isPlay = true
				this.$au_player.url = this.song.url;
				this.$au_player.title = this.song.name;
				this.$au_player.coverImgUrl = this.song.picUrl;
				this.$au_player.singer = this.song.singer;
				this.$au_player.src = this.song.url;
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
		}
	}
</script>

<style lang='scss' scoped>
	.song-player {
		height: 100%;

		.player-content {
			height: 100%;
			position: relative;
			overflow: hidden;

			.player-bgimg {
				width: 100%;
				height: 100%;
				filter: blur(25px);
				background-position: center center;
				background-repeat: no-repeat;
				background-size: cover;
				position: absolute;
				transform: scale(1.5);
			}

			.player-img {
				&.stoped {
					animation-play-state: paused;
				}

				animation: rotate 25s linear infinite;
				position: absolute;
				top: 70rpx;
				left: 100rpx;
				width: 550rpx;
				height: 550rpx;
				border-radius: 50%;
				background-color: rgba(255, 255, 255, 0.1);
				display: flex;
				align-items: center;
				justify-content: center;

				@keyframes rotate {
					0% {
						transform: rotateZ(0deg);
						/*从0度开始*/
					}

					100% {
						transform: rotateZ(360deg);
						/*360度结束*/
					}
				}

				.circle {
					width: 92%;
					height: 92%;
					border-radius: 50%;
					background-color: rgba(255, 255, 255, 0.3);
					display: flex;
					align-items: center;
					justify-content: center;

					.img {
						width: 80%;
						height: 80%;
						border-radius: 50%;
					}
				}
			}

			.isplay {
				position: relative;
				top: 290rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 120rpx;

				.isplay-bg {
					position: absolute;
					width: 120rpx;
					height: 100%;
					background: rgba(0, 0, 0, 0.8);
					opacity: 0.8;
					border-radius: 75rpx;
					z-index: 1;
				}

				.isplay-img {
					width: 50rpx;
					height: 50rpx;
					z-index: 100;
				}

			}
            .lyric-opcity{
				-webkit-mask-image: linear-gradient(to bottom,
						rgba(255, 255, 255, 0) 0,
						rgba(255, 255, 255, .6) 15%,
						rgba(255, 255, 255, 1) 25%,
						rgba(255, 255, 255, 1) 75%,
						rgba(255, 255, 255, .6) 85%,
						rgba(255, 255, 255, 0) 100%);
			}
			.player-lyric {
				position: absolute;
				bottom: 250rpx;
				width: 100%;
				height: 180rpx;
			}

			.all-lyric {
				width: 100%;
				margin-top: 70rpx;
			}

			.ric {
				text-align: center;
				color: #F1F1F1;
				font-size: 32rpx;
				opacity: 0.8;
				height: 60rpx;
				white-space: nowrap; //文本强制不换行；
				text-overflow: ellipsis; //文本溢出显示省略号；
				overflow: hidden; //溢出的部分隐藏
				width: 90%;
				margin: 0 auto;

				&.cur {
					font-size: 34rpx;
					opacity: 1;
					color: #8dc63f;
				}
			}
		}
	}
</style>
