<template>
	<view class="type" :style="{top:top+'rpx'}">
		<view style="background: #FFFFFF;">
			<view class="type-box">
				<view class="type-list" @click="Tab">
					<text :class="isActive==0 ? 'active' : ''">{{tab[0]}}</text>
				</view>
				<view class="type-list" @click="toTab">
					<text :class="isActive==1 ? 'active' : ''">{{tab[1]}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			top:{
				type:Number,
				default:0
			},
			tab:{
				type:Array,
				default:[]
			},
			isActive:{
				type:Number,
				default:0
			}
		},
		methods:{
			Tab(){
				this.$emit('tab')
			},
			toTab(){
				this.$emit('toTab')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.type{
		width: 100%;
		position: fixed;
		z-index: 999;
		border-bottom: 1px solid #f2f2f2;
		.type-box{
			display: flex;
			width: 90%;
			margin: 0 auto;
			.type-list{
				width: 50%;
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
				color: #6b6b6b;
				.active {
					color: #8dc63f;
					border-bottom: 2px solid;
					padding-bottom: 20rpx;
				}
			}
		}
		
	}
</style>
