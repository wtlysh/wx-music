<template>
	<view class="uni-popup-share">
		<view class="uni-share-title"><text class="uni-share-title-text">分享到</text></view>
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<view class="uni-share-content-item"  @click.stop="select()">
					<uni-icons type="weixin" size="100" color="#1fc23f"></uni-icons>
					<text class="uni-share-text">微信好友</text>
				</view>

			</view>
		</view>
		<view class="uni-share-button-box">
			<button class="uni-share-button" @click="close">取消</button>
		</view>
	</view>
</template>

<script>
	import popup from '../uni-popup/popup.js'
	export default {
		name: 'UniPopupShare',
		mixins:[popup],
		props: {
			beforeClose: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			/**
			 * 选择内容
			 */
			select(item, index) {
				this.$emit('select')
				this.close()
				
			},
			/**
			 * 关闭窗口
			 */
			close() {
				if(this.beforeClose) return
				this.popup.close()
			},
		}
	}
</script>
<style lang="scss" scoped>
	.uni-popup-share {
		background-color: #fff;
	}
	.uni-share-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 40px;
	}
	.uni-share-title-text {
		font-size: 14px;
		color: #666;
	}
	.uni-share-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
	}

	.uni-share-content-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 360px;
	}

	.uni-share-content-item {
		width: 90px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10px 0;
		align-items: center;
	}

	.uni-share-content-item:active {
		background-color: #f5f5f5;
	}

	.uni-share-image {
		width: 50px;
		height: 50px;
	}

	.uni-share-text {
		margin-top: 10px;
		font-size: 14px;
		color: #3B4144;
	}

	.uni-share-button-box {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
	}

	.uni-share-button {
		flex: 1;
		border-radius: 50px;
		color: #666;
		font-size: 16px;
	}

	.uni-share-button::after {
		border-radius: 50px;
	}
</style>
