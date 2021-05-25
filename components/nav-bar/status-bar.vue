<template>
	<view :style="{ height: statusBarHeight }" class="status-bar">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'StatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
	}
</script>

<style lang="scss" scoped>
	.status-bar {
		width: 750rpx;
		height: 20px;
		// height: var(--status-bar-height);
	}
</style>
