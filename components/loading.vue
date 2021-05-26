<template>
	<view v-if="show_model" class="loading">
		<view class="spinner"></view>
		<view class="loading-text">
			loading...
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show_model: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.spinner {
		width: 150rpx;
		height: 150rpx;
		background-color: #67CF22;

		margin: 100rpx auto;
		-webkit-animation: rotateplane 1.2s infinite ease-in-out;
		animation: rotateplane 1.2s infinite ease-in-out;

	}

	.loading-text {
		position: relative;
		top: -50rpx;
		width: 100%;
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
		color: #67CF22;
	}

	@-webkit-keyframes rotateplane {
		0% {
			-webkit-transform: perspective(120px)
		}

		50% {
			-webkit-transform: perspective(120px) rotateY(180deg)
		}

		100% {
			-webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
		}
	}

	@keyframes rotateplane {
		0% {
			transform: perspective(120px) rotateX(0deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
		}

		50% {
			transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
			-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
		}

		100% {
			transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
			-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		}
	}
</style>
