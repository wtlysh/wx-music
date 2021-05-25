<template>
	<view class="type">
		<view class="type-box box-width">
		    <view v-for="(item, index) in tab" :key="index" 
			:class="['type-list',isWhite?'white':'grey']" 
			@tap="switchNav(index)">
			<text :class="isActive==index ? 'active' : ''">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default: []
			},
			isActive: {
				type: Number,
				default: 0
			},
			isWhite:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			switchNav(index) {
				this.$emit('tab',index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.type {
		width: 100%;

		.type-box {
			display: flex;
			width: 100%;

			.type-list {
				width: 50%;
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
				&.grey{
					color: $uni-text-color;
				}
				&.white{
					color: $uni-text-color-inverse;
				}

				.active {
					color: $uni-color-success;
					border-bottom: 2px solid;
					padding-bottom: $uni-spacing-col-base;
				}
			}
		}

	}
</style>
