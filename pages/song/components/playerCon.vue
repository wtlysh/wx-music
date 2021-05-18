<template>
	<view class="player-con">
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
</template>

<script>
</script>

<style lang="scss" scoped>
	.player-con{
		
	}
</style>
