<!-- 歌曲播放页面 -->
<template>
	<view class="song-player">
		<view class="player-content" v-if="isCanPlay">
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
			<view v-show="isLyric" class="lyric-opcity all-lyric" :style="{height:(windowHeight-300) + 'rpx'}"
				@click="toLyric">
				<scroll-view v-if="lyric.length>0" scroll-y="true" :scroll-into-view="'view-' + ctrolIndex"
					style="height: 100%;width: 100%;">
					<view :class="['ric',index==lyricIndex?'cur':'']" :id="'view-'+index"
						:style="{height:((windowHeight-300)/13) + 'rpx'}" v-for="(item,index) in lyric" :key="index">
						{{item.text}}
					</view>
				</scroll-view>
				<view v-if="lyric.length<=0" class="nolyric ric cur">
					{{lycur}}
				</view>
			</view>
			<playBottom :isLike="isLike" @cancle="cancleLike" @confirm="addLike"></playBottom>
		    <view class="poplist-icon" 
			v-if="!isOpentList && copyAudioList.length>0" 
			@click="openList">
		    	<view style="display: flex;flex-wrap: wrap;justify-content: center;">
		    		<uni-icons type="list" color="#6b6b6b" size="25"></uni-icons>
		    		<text style="font-size: 28rpx;">列表</text>
		    	</view>
			</view>
		</view>
		<view class="poplist-box" :class="[isOpentList?'':'hide']">
			<view class="title">
				<text class="total">当前播放({{copyAudioList.length}})</text>
				<text class="model"  v-if="playModel==0" @click="setPlayModel">
					<text class="iconfont">&#xe66c;</text>
					<text>列表循环</text>
				</text>
				<text class="model"  v-if="playModel==1" @click="setPlayModel">
					<text class="iconfont">&#xe66b;</text>
					<text>随机播放</text>
				</text>
				<text class="model"  v-if="playModel==2" @click="setPlayModel">
					<text class="iconfont">&#xe66d;</text>
					<text>单曲循环</text>
				</text>
			</view>
			<scroll-view scroll-y="true" style="height: 578rpx;">
				<view class="item-con" 
				:class="[index == curPlayIndex?'active':'']" 
				v-for="(item,index) in copyAudioList" 
				:key="index"
				@click="initPlay(item.id,index)">
					<view style="font-size: 36rpx;width: 60rpx;" class="num text-color">
						{{index+1}}
					</view>
					<view style="padding-left: 30rpx;width: 470rpx;">
						<view class="item-name">
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
			<view class="poplist-close" @click="closeList">
				关闭
			</view>
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
	const db = wx.cloud.database();
	export default {
		components: {
			playBottom
		},
		data() {
			return {
				isOpentList:false, //是否打开播放列表
				playModel: 0,//播放模式
				song: {
					id: '',
					url: '',
					name: '',
					singer: '',
					time: 0,
					picUrl: '',
				},
				isCanPlay: true, //资源是否有用
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
				windowHeight: 0, //屏幕高度
				likeSong: {}, //收藏歌曲
				isLike: false, //是否收藏
				userId: "", //用户收藏id
			}
		},
		onLoad(param) {
			if(!param.songId){
					return ;
			}
			uni.getSystemInfo({
				success: (res) => {
					// 　　console.log(res.windowHeight) // 获取可使用窗口高度
					this.windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
					// 　　console.log(this.windowHeight) //最后获得转化后得rpx单位的窗口高度
				}
			});
			let id = param.songId;
			this.initPlay(id);
			this.judgeLike(id);
			if(param.index && param.list){
				const list = JSON.parse(decodeURIComponent(param.list));
				this.curPlayIndex = Number(param.index);
				//列表延后渲染
				setTimeout(()=>{
					this.copyAudioList = list;
				},1000)
			}
		},
		computed: {
			// ...mapGetters(['playdetail']),
			playTimeNum() {
				return this.$util.formatTime(this.playTime)
			},
			curPlayTimeNum() {
				return this.$util.formatTime(this.curPlayTime)
			}
		},
		methods: {
			...mapMutations(['setAudiolist', 'setPlaydetail', 'setIsplayingmusic', 'setIsplayactive']),
			//设置播放模式
			setPlayModel() {
				this.playModel = this.playModel == 2 ? 0 : this.playModel + 1;
				uni.showToast({
					icon: 'none',
					title: ['列表循环', '随机播放', '单曲循环'][this.playModel]
				})
			},
			openList() {
				this.isOpentList = !this.isOpentList;
			},
			closeList(){
				this.isOpentList = !this.isOpentList;
			},
			listCloseOne(index){
				const list  = this.copyAudioList;
				console.log(index)
				list.splice(index,1)
				if(list.length>0){
					if(index == this.curPlayIndex){
						if(index<list.length){
							this.initPlay(list[index].id);
							this.curPlayIndex = index
						}else{
							this.initPlay(list[0].id);
							this.curPlayIndex = 0;
						}
					}else{
						this.curPlayIndex = index>this.curPlayIndex?this.curPlayIndex:this.curPlayIndex-1;
					}
					
					this.copyAudioList = list;
					this.setAudiolist(list)
					this.setIsplayactive(true)
					
				}else{
					this.$au_player.stop();
					uni.navigateBack({
						delta: 1
					});
				}
			},
			
			//获取歌曲数据并开始播放
			initPlay(id,index) {
				if(index){
					this.curPlayIndex = index;
				}
				Vue.prototype.cusPlay = this.onPlayFn
				Vue.prototype.cusTimeUpdate = this.onTimeUpdateFn
				Vue.prototype.cusEnded = this.onEndedFn

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
	@import "../../static/scss/songList.scss";
	.song-player {
		height: 100%;

		.player-content {
			height: 100%;
			position: relative;
			overflow: hidden;
			
            .poplist-icon{
				position: fixed;
				bottom: 450rpx;
				right: 60rpx;
				height: 60px;
				width: 30px;
				background: #FFFFFF;
				border-radius: 15px;
				display: flex;
				align-items: center;
			}
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
				position: absolute;
				bottom: 250rpx;
				width: 100%;
				height: 180rpx;
			}

			.all-lyric {
				width: 100%;
				margin-top: 70rpx;

				.nolyric {
					height: 100%;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
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
	    .poplist-box{
	    	position: fixed;
	    	display: block;
	    	bottom: 0;
	    	height: 800rpx;
	    	width: 100%;
	    	background-color: #FFFFFF;
	    	z-index: 1001;
	    	border-radius: 5% 5% 0 0;
	    	&.hide{
	    		bottom:-800rpx;
	    	}
	    	transition: all .15s linear;
	    	.title{
	    		display: flex;
	    		justify-content: space-between;
	    		width: 100%;
	    		height: 120rpx;
	    		line-height: 120rpx;
	    		font-size: 34rpx;
	    		.total{
	    			font-size: 40rpx;
					margin-left: 50rpx;
	    		}
	    		.model{
	    			margin-right: 50rpx;
	    		}
	    	}
	        .poplist-close{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 100rpx;
				background: #fff;
				text-align: center;
				line-height: 100rpx;
				font-size: 32rpx;
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
