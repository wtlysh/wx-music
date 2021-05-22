<!-- 歌曲播放页面 -->
<template>
	<view class="song-player">
		<view class="player-bgimg" :style="'background-image:url('+song.picUrl+')'"></view>
		<nav-bar :title="song.name" :fixed="false" :backgroundColor="bgColor" :color="color"></nav-bar>
		<view class="player-content" v-if="isCanPlay" :style="{height:height+'rpx'}">
			<view v-show="!isLyric" style="position: relative;">
				<view class="player-img flex-center" :class="[isPlay ? '' : 'stoped']">
					<view class="circle flex-center">
						<image class="img" :src="song.picUrl" mode=""></image>
					</view>
				</view>
				<view class="play-ctrol flex-align">
					<view v-if="audiolist.length>1" class="flex-item" @click="prev">
						<uni-icons type="arrowleft" color="#fff" size="50"></uni-icons>
					</view>
					<view class="isplay flex-center" @click="playCtrol">
						<view class="isplay-bg"></view>
						<image class="isplay-img" v-if="isPlay" src="../../static/images/play.svg" mode=""></image>
						<image class="isplay-img" v-if="!isPlay" src="../../static/images/notplay.svg" mode=""></image>
					</view>
					<view v-if="audiolist.length>1" class="flex-item" @click="next(false)">
						<uni-icons type="arrowright" color="#fff" size="50"></uni-icons>
					</view>
				</view>
				<view class="lyric-opcity player-lyric" @click="toLyric">
					<view class="ric ellipsis">{{lytop}}</view>
					<view class="ric cur ellipsis">{{lycur}}</view>
					<view class="ric ellipsis">{{lybot}}</view>
				</view>
				<view class="slider-bar flex-align">
					<view class="time start">{{curPlayTimeNum}}</view>
					<slider class="line" :value="curPlayTime" :min="0" :max="playTime" @change="sliderChange" block-size="15"
					 backgroundColor="rgba(255,255,255,.5)" activeColor="rgba(255,255,255,.5)" />
					<view class="time end">{{playTimeNum}}</view>
				</view>
			</view>
			<view v-show="isLyric" class="lyric-opcity all-lyric" :style="{height:(height-300) + 'rpx'}"
				@click="toLyric">
				<scroll-view v-if="lyric.length>0" scroll-y="true" :scroll-into-view="'view-' + ctrolIndex"
				style="height: 100%;">
					<view :class="['ric','ellipsis',index==lyricIndex?'cur':'']" :id="'view-'+index"
						:style="{height:((height-300)/13) + 'rpx'}" v-for="(item,index) in lyric" :key="index">
						{{item.text}}
					</view>
				</scroll-view>
				<view v-if="lyric.length<=0" class="nolyric ric cur flex-center">
					{{lycur}}
				</view>
			</view>
			<playBottom :isLike="isLike" @cancle="cancleLike" @confirm="addLike"></playBottom>
			<view class="poplist-icon flex-align" @click="isOpentList=true">
				<view style="display: flex;flex-wrap: wrap;justify-content: center;">
					<uni-icons type="list" color="#6b6b6b" size="50"></uni-icons>
					<text style="font-size: 28rpx;">列表</text>
				</view>
			</view>
		</view>
		<popList :isOpentList="isOpentList" ref="child" 
		@close="isOpentList=false"
		@play="initPlay"></popList>
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
	import popList from '../../components/popList.vue'
	import Vue from 'vue'
	let update = true;
	const db = wx.cloud.database();
	export default {
		components: {
			playBottom,
			popList
		},
		data() {
			return {
				color:'#fff',
				bgColor:"",
				isOpentList: false, //是否打开播放列表
				song: {
					id: '',
					url: '',
					name: '',
					singer: '',
					time: 0,
					picUrl: '',
				},
				isCanPlay: true, //资源是否有用
				isPlay: true,//是否播放
				lyric: [], //歌词
				lytop: '',
				lycur: '',
				lybot: '',
				isLyric: false, //是否显示全部歌词
				lyricIndex: 0, //定位当前歌词
				ctrolIndex: 0, //控制高亮歌词
				curPlayIndex: 0, //当前播放歌曲在list内的索引
				playTime: 0,
				curPlayTime: 0 ,
				height: 0, //内容高度
				leftIcon:'back',
				likeSong: {}, //收藏歌曲
				isLike: false, //是否收藏
				userId: "", //用户收藏id
				windowHeight: 0
			}
		},
		onLoad(param) {
			if (!param.songId) {
				return;
			}
			uni.getSystemInfo({
				success: (res) => {
					this.height = res.windowHeight- res.statusBarHeight - 40;
					this.windowHeight = res.windowHeight;
					this.height = (this.height * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
				}
			});
			let id = param.songId;
			this.curPlayIndex = Number(param.index);
			this.initPlay(id);
			this.judgeLike(id);
			if(param.list){
				const list = JSON.parse(decodeURIComponent(param.list));
				this.setAudiolist(list);
			}
			// console.log(this.playdetail)
		},
		computed: {
			...mapGetters(['playdetail','audiolist','isplayingmusic']),
			playTimeNum() {
				return this.$util.formatTime(this.playTime)
			},
			curPlayTimeNum() {
				return this.$util.formatTime(this.curPlayTime)
			}
		},
		methods: {
			...mapMutations(['setAudiolist', 'setPlaydetail', 'setIsplayingmusic', 'setIsplayactive']),
			//进度条
			sliderChange(e) {
				this.curPlayTime = e.detail.value;
				this.$au_player.seek(this.curPlayTime)
			},
			//上一首播放
			prev() {
				const index = this.$refs.child.getIndex('prev');
				this.curPlayIndex = index;
				this.initPlay(this.audiolist[index].id)
			},
			//下一首播放
			next(isAuto) {
				const index = this.$refs.child.getIndex('next', isAuto)
				this.curPlayIndex = index;
				this.initPlay(this.audiolist[index].id)
			},
			//获取歌曲数据并开始播放
			initPlay(id) {
				Vue.prototype.cusPlay = this.onPlayFn;
				Vue.prototype.cusTimeUpdate = this.onTimeUpdateFn
				Vue.prototype.cusEnded = this.onEndedFn;
				Promise.all([apiSong({
					id
				}), apiSongDetail({
					ids: id
				})]).then(res => {
					// console.log(res[0])
					const surl = res[0].data[0].url;
					if (!surl) {
						this.isCanPlay = false;
						setTimeout(() => {
							uni.showToast({
								icon: 'none',
								title: '资源已失效!请返回'
							})
						}, 1000);
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
						index:this.curPlayIndex,
						id,
						picUrl: sdetail.al.picUrl,
						desc: sdetail.name,
						time: Math.floor(sdetail.dt / 1000) // 播放时长
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
						ar: sdetail.ar,
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
					// console.log(res)
					if (res.uncollected) {
						console.log('暂未收录歌词');
						this.lycur = '~暂未收录歌词~';
						return;
					}
					if (res.nolyric) {
						this.lycur = '~此歌曲为纯音乐，请欣赏~';
						return;
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
				})
				// .catch(err => {
				// 	this.$au_player.play();
				// 	// console.log('歌词加载失败', err)
				// 	this.lycur = '~歌词加载失败~'
				// })
				this.$forceUpdate();
			},
			//歌曲正在播放
			onPlayFn() {
				this.playTime = this.song.time;
				this.isPlay = true;
				this.setIsplayingmusic(true);
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
			// //歌曲播放结束
			onEndedFn() {
				// console.log('ended')
				this.setIsplayingmusic(false)
				this.setIsplayactive(false)
				this.next(true);
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
			//添加收藏
			addLike() {
				this.isLike = true;
				let id = this.userId;
				let likeSong = this.likeSong;
				db.collection('userLike').doc(id).get({
					success: res => {
						// console.log("成功："+res);
						let song = res.data.like_songs;
						// console.log(re.data);
						song.unshift(likeSong);
						// console.log(song);
						db.collection('userLike').doc(id).update({
							data: {
								like_songs: song
							},
							success: (res) => {
								// console.log(es.data)
							},
							fail: err => {
								// console.log(er);
							}
						})
					},
					fail: err => {
						// console.log("失败："+err);
						db.collection('userLike').add({
							data: {
								_id: id,
								like_songs: [likeSong],
							},
							success: (res) => {
								// console.log(res)
							}
						})
					}
				})
			},
			//取消收藏
			cancleLike() {
				this.isLike = false;
				let id = this.userId;
				let _id = this.song.id;
				db.collection('userLike').doc(id).get({
					success: res => {
						let song = res.data.like_songs;
						song.forEach((item, index) => {
							if (item.id == _id) {
								song.splice(index, 1)
							}
						});
						// console.log(song);
						db.collection('userLike').doc(id).update({
							data: {
								like_songs: song
							},
							success: (res) => {
								// console.log(es.data)
							},
							fail: err => {
								// console.log(er);
							}
						})
					},
				})
			},
			//判断歌曲是否收藏
			judgeLike(id) {
				uni.getStorage({
					key: "userId",
					success: res => {
						let _id = res.data;
						this.userId = _id;
						db.collection('userLike').doc(_id).get({
							success: res => {
								console.log("成功：");
								let song = res.data.like_songs;
								song.forEach(item => {
									if (item.id == id) {
										this.isLike = true;
									}
								})
							},
						})
					},
				});
				this.$forceUpdate()
				// console.log(this.isLike);
			},
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
		}
	}
</script>

<style lang='scss' scoped>
	.song-player {
		height: 100%;
		overflow:hidden;
		position: relative;
	
		.player-bgimg {
			position: absolute;
			width: 100%;
			height: 100%;
			filter: blur(25px);
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			transform: scale(1.5);
		}

		.player-content {
			position: relative;
			overflow: hidden;

			.poplist-icon {
				position: fixed;
				bottom: 450rpx;
				right: 60rpx;
				height: 60px;
				width: 30px;
				background: #FFFFFF;
				border-radius: 15px;
			}

			.player-img {
				&.stoped {
					animation-play-state: paused;
				}

				animation: rotate 25s linear infinite;
				position: absolute;
				top: 70rpx;
				left: 150rpx;
				width: 450rpx;
				height: 450rpx;
				border-radius: $uni-border-radius-circle;
				background-color: rgba(255, 255, 255, 0.1);

				.circle {
					width: 92%;
					height: 92%;
					border-radius: $uni-border-radius-circle;
					background-color: rgba(255, 255, 255, 0.3);

					.img {
						width: 80%;
						height: 80%;
						border-radius: $uni-border-radius-circle;
					}
				}
			}
            
			.play-ctrol{
				position: relative;
				top: 250rpx;
				height: 100rpx;
				
				.flex-item{
					padding: 0 50rpx;
					width: 50rpx;
					height: 100%;
				}
				.isplay {
					width: 450rpx;
					height: 100%;
					margin: 0 auto;
					.isplay-bg {
						position: absolute;
						width: 100rpx;
						height: 100%;
						background: rgba(0, 0, 0, 0.8);
						opacity: 0.8;
						border-radius: $uni-border-radius-circle;
						z-index: 1;
					}
				
					.isplay-img {
						width: 50rpx;
						height: 50rpx;
						z-index: 100;
					}
				
				}
				
			}
			.lyric-opcity {
				-webkit-mask-image: linear-gradient(to bottom,
						rgba(255, 255, 255, 0) 0,
						rgba(255, 255, 255, .6) 15%,
						rgba(255, 255, 255, 1) 25%,
						rgba(255, 255, 255, 1) 75%,
						rgba(255, 255, 255, .6) 85%,
						rgba(255, 255, 255, 0) 100%);
			}

			.player-lyric {
				position: relative;
				top: 500rpx;
				width: 100%;
				height: 180rpx;
			}
			.slider-bar {
				/* bottom: 160rpx; */
				position: relative;
				top: 600rpx;
				width: 90%;
				margin: 0 auto;
				color: $uni-bg-color;
			
				.line {
					flex: 1;
				}
			
				.time {
					height: 28rpx;
					line-height: 28rpx;
					font-size: $uni-font-size-sm;
					min-width: 66rpx;
				}
			
				.line {
					margin: $uni-spacing-col-base $uni-spacing-row-base;
				}
			
				.start {
					margin-left: $uni-spacing-row-lg;
				}
			
				.end {
					margin-right: $uni-spacing-row-lg;
				}
			}
			

			.all-lyric {
				width: 100%;
				margin-top: 70rpx;

				.nolyric {
					height: 100%;
					width: 100%;
				}
			}

			.ric {
				text-align: center;
				color: #F1F1F1;
				font-size: $uni-font-size-base;
				opacity: 0.8;
				height: 60rpx;
				width: 90%;
				margin: 0 auto;

				&.cur {
					font-size: 34rpx;
					opacity: 1;
					color: $uni-color-success;
				}
			}
		}
	}

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
</style>
