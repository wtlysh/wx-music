<template>
	<view class="swipe">
		<view
		    class="swipe_box"
		    :data-threshold="threshold"
		    :data-disabled="disabled"
		    :change:prop="swipe.sizeReady"
		    :prop="btn"
		    @touchstart="swipe.touchstart"
		    @touchmove="swipe.touchmove"
		    @touchend="swipe.touchend"
		>
		    <view class="swipe_button-group button-group--left">
		    	<slot name="left">
		    		<view
		    		    v-for="(item,index) in leftOptions"
		    		    :data-button="btn"
		    		    :key="index"
		    		    :style="{
		    		  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
		    		  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '32rpx'
		    		}"
		    		    class="swipe_button button-hock"
		    		    @touchstart="appTouchStart"
		    		    @touchend="appTouchEnd($event,index,item,'left')"
		    		><text
		    			    class="swipe_button-text"
		    			    :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}"
		    			>{{ item.text }}</text></view>
		    	</slot>
		    </view>
			<view class="swipe_text--center">
				<slot></slot>
			</view>
			<view class="swipe_button-group button-group--right">
				<slot name="right">
					<view
					    v-for="(item,index) in rightOptions"
					    :data-button="btn"
					    :key="index"
					    :style="{
					  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',
					  fontSize: item.style && item.style.fontSize ? item.style.fontSize : '32rpx'
					}"
					    class="swipe_button button-hock"
					    @touchstart="appTouchStart"
					    @touchend="appTouchEnd($event,index,item,'right')"
					><text
						    class="swipe_button-text"
						    :style="{color: item.style && item.style.color ? item.style.color : '#FFFFFF',}"
						>{{ item.text }}</text></view>
				</slot>
			</view>
		</view>
	</view>
</template>
<script
    src="./index.wxs"
    module="swipe"
    lang="wxs"
></script>
<script>
	import mpwxs from './mpwxs'
	export default {
		mixins: [mpwxs],
		props: {
			// 控制开关
			show: {
				type: String,
				default: 'none'
			},

			// 禁用
			disabled: {
				type: Boolean,
				default: false
			},

			// 是否自动关闭
			autoClose: {
				type: Boolean,
				default: true
			},

			// 滑动缺省距离
			threshold: {
				type: Number,
				default: 20
			},

			// 左侧按钮内容
			leftOptions: {
				type: Array,
				default () {
					return []
				}
			},

			// 右侧按钮内容
			rightOptions: {
				type: Array,
				default () {
					return []
				}
			}

		},
		inject: ['swipeaction']
	}
</script>
<style lang="scss" scoped>
	.swipe {
		position: relative;
		overflow: hidden;
		.swipe_box {
			position: relative;
			display: flex;
			flex-shrink: 0;	
			.swipe_text--center {
				width:100%;
				cursor: grab;
			}
			.swipe_button-group {
				flex-direction: row;
				position: absolute;
				box-sizing: border-box;
				display: flex;
				top: 0;
				bottom: 0;
				&.button-group--left {
				    left: 0;
				    transform: translateX(-100%)
				}
				&.button-group--right {
					right: 0;
					transform: translateX(100%)
				}
				.swipe_button {
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding: 0 20px;
					flex: 1;
					display: flex;
					.swipe_button-text {
						font-size: 14px;
						flex-shrink: 0;
					}
				}
			}
		}
	}
	.ani {
			transition-property: transform;
			transition-duration: 0.3s;
			transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		}
</style>
