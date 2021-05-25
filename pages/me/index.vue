<!-- 个人中心页面 -->
<template>
	<view class="me">
		<view v-if="!hasUserInfo" class="flex-center" style="height: 100%;">
			<view class="user-authority">
				<view class="authority-logo">
					音乐
				</view>
				<view class="authority-text">
					<text>登录后可以访问音乐</text>
				</view>
				<button class="authority-btn"
				type="primary" lang="zh_CN" withCredentials="true"
					@click.stop="authority">微信授权登录</button>
			</view>
		</view>
		<view v-if="hasUserInfo">
			<nav-bar :color="color"  :backgroundColor="bgColor" :showIcon="false"></nav-bar>
			<meTop :bg="bg" :userInfo="userInfo"></meTop>
			<typeTab style="position: relative;" :isWhite="true" :tab="tab" :isActive="isActive" @tab="switchNav">
			</typeTab>
			<swiper :current="isActive" @change="handleChange" :style="{height:swiperHeight+'rpx'}">
				<swiper-item>
					<view v-if="hisTracks.length>0" v-show="isActive==0">
						<plylistCon class="his_list" :height="(swiperHeight)" :tracks="hisTracks" :isShowDelete="true"
							@delete="deleteSong">
						</plylistCon>
						<view class="delete-fab" v-if="hisTracks.length>0 && isActive==0" @click="deleteAll">
							<uni-icons type="trash-filled" color="#fff" size="50"></uni-icons>
						</view>
					</view>
					<view v-if="hisTracks.length==0" class="flex-center no-record">
						没有播放记录哟，快去听歌吧
					</view>
				</swiper-item>
				<swiper-item>
					<plylistCon v-if="likeTracks.length>0" v-show="isActive==1" class="like_list" 
					     :height="(swiperHeight)" :tracks="likeTracks" :isShowCancel="true"
						@cancel="cancelLike">
					</plylistCon>
					<view v-if="likeTracks.length==0" class="flex-center no-record">
						没有收藏歌曲哟，快去听歌吧
					</view>
				</swiper-item>
			</swiper>
			<playing-box></playing-box>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import meTop from './components/meTop.vue'
	import typeTab from '../../components/typeTab.vue'
	import plylistCon from '../../components/playlistCon.vue'
	const db = wx.cloud.database();
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight
	export default {
		components: {
			meTop,
			typeTab,
			plylistCon,
		},
		data() {
			return {
				color:"#fff",
				bgColor:'transparent',
				isActive: 0,
				tab: ['最近', '喜欢'],
				hisTracks: [],
				top: 420,
				likeTracks: [],
				userId: "",
				swiperHeight:0,
				userInfo:{
					nickName:"",
					avatarUrl:""
				},
				hasUserInfo:true
			}
		},
		onShow() {
			this.getData();
			if(this.playdetail){
				this.swiperHeight = this.swiperHeight-110;
			}
		},
		created() {
			uni.getSystemInfo({
				success: (res) => {
					let item = (750 / res.windowWidth);
					this.swiperHeight = ((res.windowHeight * item)-this.topHeight - 420);
				}
			});
			uni.getStorage({
				key: 'userInfo',
				success:res=>{
					this.userInfo = res.data;
				},fail:err=>{
					this.hasUserInfo = false;
				}
			})
		},
		computed:{
			...mapGetters(['topHeight','playdetail'])
		},
		methods: {
			/*获取用户信息*/
			authority() {
				uni.getUserProfile({
					desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						this.userInfo = {
							nickName:res.userInfo.nickName,
							avatarUrl:res.userInfo.avatarUrl
						};
						// console.log(this.userInfo)
						uni.setStorage({
							key: 'userInfo',
							data: this.userInfo
						});
						this.hasUserInfo = true; // 隐藏授权按钮
					},
					fail: () => {
						uni.showToast({
							title: "为了更好的功能体验,请先登录授权",
							icon: "none"
						})
					}
				})
			},
			handleChange(e) {
				let vm = this;
				vm.isActive = e.mp.detail.current;
			},
			switchNav(index) {
				this.isActive = index;
			},
			deleteSong(id, index) {
				this.hisTracks.splice(index, 1);
				uni.setStorage({
					key: 'OldSongs',
					data: this.hisTracks,
					success: res => {
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						});
					}
				});
			},
			//删除所有历史播放记录
			deleteAll() {
				uni.showModal({
					content: '确定删除所有播放记录？',
					success: (res) => {
						if (res.confirm) {
							// console.log('用户点击确定');
							uni.removeStorage({
								key: 'OldSongs',
								success: () => {
									this.hisTracks = [];
								}
							});
						} else if (res.cancel) {
							// console.log('用户点击取消');
							return;
						}
					}
				});
			},
			cancelLike(id, index) {
				this.likeTracks.splice(index, 1);
				db.collection('userLike').doc(this.userId).update({
					data: {
						like_songs: this.likeTracks
					},
					success: (res) => {
						uni.showToast({
							title: '取消收藏成功',
							icon: 'none'
						});
					},
					fail: err => {
						// console.log(er);
					}
				})
			},
			//获取历史播放和收藏歌曲
			getData() {
				uni.getStorage({
					key: 'OldSongs',
					success: res => {
						this.hisTracks = res.data;
					}
				});
				uni.getStorage({
					key: "userId",
					success: res => {
						let id = res.data;
						this.userId = id;
						db.collection('userLike').doc(id).get({
							success: re => {
								this.likeTracks = re.data.like_songs;
							},
						})
					},
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.me {
		height: 100%;
		.user-authority{
			width: 100%;
			text-align: center;
			.authority-text{
				font-size: 28rpx;
				color: #8a8a8a;
				margin: 30rpx;
			}
			.authority-btn{
				width: 50%;
				background: #1E90FF;
				height: 80rpx;
				font-size: 36rpx;
				line-height: 80rpx;
			}
		}
		.no-record{
			height: 100%;
			color: $uni-text-color;
			font-size: $uni-font-size-base;
		}

		.delete-fab {
			position: fixed;
			bottom: 120rpx;
			right: 70rpx;
			height: 80rpx;
			width: 80rpx;
			background: $uni-color-success;
			text-align: center;
			line-height: 80rpx;
			border-radius: $uni-border-radius-circle;
		}
	}
</style>
