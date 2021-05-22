<template>
	<view class="type">
		<view class="type-box box-width">
			<view class="type-list" @click="Tab">
				<text :class="isActive==0 ? 'active' : ''">{{tab[0]}}</text>
			</view>
			<view class="type-list" @click="toTab">
				<text :class="isActive==1 ? 'active' : ''">{{tab[1]}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			top: {
				type: Number,
				default: 0
			},
			tab: {
				type: Array,
				default: []
			},
			isActive: {
				type: Number,
				default: 0
			}
		},
		methods: {
			Tab() {
				this.$emit('tab')
			},
			toTab() {
				this.$emit('toTab')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.type {
		width: 100%;
		border-bottom: 1px solid #f2f2f2;
		background: $uni-bg-color-grey;

		.type-box {
			display: flex;

			.type-list {
				width: 50%;
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
				color: $uni-text-color;

				.active {
					color: $uni-color-success;
					border-bottom: 2px solid;
					padding-bottom: $uni-spacing-col-base;
				}
			}
		}

	}
</style>
