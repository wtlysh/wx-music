<script>
	import Vue from 'vue'
	import {
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function() {
			this.initCloud();
			let audioPlayer = uni.getBackgroundAudioManager();
			let timer = null;
			//注册事件函数写在全局或者写在vuex（不然重复绑定，内存泄露）里都行，这里图方便挂着全局
			Vue.prototype.$au_player = audioPlayer;
			Vue.prototype.$au_player.onPlay(()=>{
				// console.log('playing')
				Vue.prototype.cusPlay && Vue.prototype.cusPlay()
				clearInterval(timer)
				timer = setInterval(()=>{ //安卓和ios app 下onTimeUpdate事件在替换资源和seek之后不会触发，这里做手动触发
					// console.log('update')
					Vue.prototype.cusTimeUpdate()
				},200)
			})
			Vue.prototype.$au_player.onEnded(()=>{
				Vue.prototype.cusEnded && Vue.prototype.cusEnded()
				clearInterval(timer)
			})
			Vue.prototype.$au_player.onError((err)=>{
				console.log('play err:'+err)
				this.setIsplayactive(false)
				clearInterval(timer)
			})
			Vue.prototype.$au_player.onStop((res)=>{
				console.log('play stop:'+res)
				this.setIsplayactive(false)
				clearInterval(timer)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		methods:{
			...mapMutations(['setIsplayactive']),
			initCloud(){
				if(!wx.cloud){
					console.error("版本太低，请使用2.2.3以上版本");
				}else{
					wx.cloud.init({
						env:"wtlysh-6kw0b",
						traceUser:true
					}),
					// 第二步：获取用户的openid
					wx.cloud.callFunction({
					    name: 'login',	 // 打开微信云开发控制平台，左上角点击[云函数]
					    data: {},
					    success: res => {
							// console.log(res)
					        // debugger
					        // 第三步(可省略)：缓存用户openid，方便后续再次调用
					        wx.setStorage({
					            key: "userId",
					            data: res.result.openid
					        })
					        // console.log('成功获取openid: ', res.result.openid)
					    },
					    fail: err => {
					        console.error('获取失败：', err)
					    }
					})
				}
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		height: 100%;
	}
	.song-text {
		font-size: 28rpx;
		color: #6b6b6b;
	}
	
	.active {
		color: #8dc63f;
		border-bottom: 2px solid;
		padding-bottom: 20rpx;
	}
	.bg{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		filter: blur(35px);
		background-position: 0 0px;
		background-repeat: no-repeat;
		// background-size: cover;
		background-size: 100%;
	}
</style>
