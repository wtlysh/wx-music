<!-- 热门歌曲页面 -->
<template>
	<view class="hotsong-li">
		<nav-bar :title="title"></nav-bar>
		<loading class="loading-position" :show_model="loading"></loading>
		<view :hidden="loading">
			<swiper circular="true" class="hotsong-swiper" @change="handleChange">
				<block v-for="(item,index) in imgs" :key="index">
					<swiper-item class="swiper-item">
						<view class="bg" :style="'background-image:url(' + item + ')'"></view>
						<view class="li-con">
							<image class="li-img title" :src="item"></image>
							<text space="true" class="li-name">{{cat[index].name}}</text>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<playlistCon :top="top" :tracks="songList[current].tracks"></playlistCon>
		</view>
		<playing-box></playing-box>
	</view>
</template>

<script>
	import playlistCon from '../../components/playlistCon.vue'
	import {
		getMuListDetail,
		getHotMuList
	} from '../../api/index.js'
	export default {
		components: {
			playlistCon
		},
		data() {
			return {
				title: '音乐',
				leftIcon: "back",
				songList: [{
					tracks: [],
				}],
				current: 0,
				cat: [{
					id: '2829883282',
					name: '华 语'
				}, {
					id: '2829816518',
					name: '欧 美'
				}, {
					id: '2829896389',
					name: '日 语'
				}, {
					id: '2829920189',
					name: '韩 语'
				}],
				imgs: [],
				loading: true
			}
		},
		onLoad() {
			this.getData(this.cat);
			setTimeout(()=>{
				this.loading = false;
			},1000)
		},
		methods: {
			//获取热门歌曲数据 同时获取
			async getData(cat) {
				let vm = this;
				await Promise.all([getMuListDetail({
					id: cat[0].id
				}), getMuListDetail({
					id: cat[1].id
				}), getMuListDetail({
					id: cat[2].id
				}), getMuListDetail({
					id: cat[3].id
				})]).then(res => {
					for (let i = 0; i < cat.length; i++) {
						// console.log(res.playlist)
						let list = res[i].playlist;
						let songs = list.tracks.map(item => {
							let singer = item.ar.map(t => {
								return t.name
							}).join('/');
							return {
								id: item.id,
								name: item.name,
								singer: singer,
							}
						});
						vm.imgs[i] = list.backgroundCoverUrl;
						vm.songList[i] = {
							tracks:songs
						}
					}
				})
				vm.$forceUpdate()
			},
			//滑动图片更新数据
			handleChange(e) {
				// console.log(e.detail.current)
				this.current = e.detail.current;
				this.$forceUpdate();
			}
		},
	}
</script>

<style lang="scss" scoped>
	.hotsong-li {
		.hotsong-swiper {
			height: 420rpx;
			width: 100%;
			background: #fff;

			.swiper-item {
				padding-top: $uni-spacing-col-base;
				display: flex;
				justify-content: center;

				.li-con {
					z-index: 500;
					height: 370rpx;
					display: flex;
					flex-wrap: wrap;
					width: 270rpx;

					.li-img {
						width: 270rpx;
						height: 270rpx;
						border-radius: $uni-border-radius-lg;
					}

					.li-name {
						color: #FFFFFF;
						width: 100%;
						text-align: center;
					}
				}
			}

		}

	}
</style>
