<template>
	<view class="searchbox">
		<view class="search__box" @click="searchClick">
			<view class="search__box-icon-search">
				<slot name="searchIcon">
					<uni-icons color="#6b6b6b" size="18" type="search" />
				</slot>
			</view>
			<input :focus="showSync" :placeholder="placeholder" 
			class="search__box-search-input"
			confirm-type="search" type="text" v-model="searchVal" 
			@confirm="confirm" @blur="blur" @focus="emitFocus" />
			<view v-show="clearButton" class="searchbar__box-icon-clear"
			 @click="clear">
				<slot name="clearIcon">
					<uni-icons color="#c0c4cc" size="18" type="clear" />
				</slot>
			</view>
		</view>
		<text @click="cancel" class="searchbox__cancel" v-if="cancelButton">{{cancelText}}</text>
	</view>
</template>

<script>
	export default {
		name: "SearchBox",
		props: {
			placeholder: {
				type: String,
				default: "搜索你想听的歌曲"
			},
			clearButton: {
				type: Boolean,
				default: false
			},
			cancelButton: {
				type: Boolean,
				default: false
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			value: {
				type: [Number, String],
				default: ""
			},
			focus: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				showSync: false,
				searchVal: ''
			}
		},
		watch: {
			value: {
				immediate: true,
				handler(newVal) {
					this.searchVal = newVal
				}
			},
			focus: {
				immediate: true,
				handler(newVal) {
					if (newVal) {
						this.$nextTick(() => {
							this.showSync = true
						})
					}
				}
			},
			searchVal(newVal, oldVal) {
				this.$emit("input", newVal)
			}
		},
		methods: {
			searchClick() {
				this.$nextTick(() => {
					this.showSync = true
				})
			},
			clear() {
				this.searchVal = "";
				this.$emit("clear");
			},
			cancel() {
				this.searchVal = "";
				this.$emit("cancel");
				this.showSync = false
				uni.hideKeyboard();
			},
			confirm() {
				uni.hideKeyboard();
				this.$emit("confirm", {
					value: this.searchVal
				})
			},
			blur() {
				uni.hideKeyboard();
				this.$emit("blur", {
					value: this.searchVal
				})
			},
			emitFocus(e) {
				this.$emit("focus", e.detail)
			}
		}
	};
</script>

<style lang="scss" scoped>
	$uni-searchbar-height: 70rpx;

	.searchbox {
		display: flex;
		flex-direction: row;
		position: relative;
		padding: 0 50rpx;
		height: 90rpx;
		// background-color: $uni-bg-color;
		.search__box {
			background: #f2f2f2;
			display: flex;
			box-sizing: border-box;
			overflow: hidden;
			position: relative;
			flex: 1;
			justify-content: center;
			flex-direction: row;
			align-items: center;
			height: $uni-searchbar-height;
			padding: 5px 8px 5px 0px;
			// border: 0.5px solid #6b6b6b;
			border-radius: $uni-searchbar-height/2;
			.search__box-icon-search {
				display: flex;
				flex-direction: row;
				// width: 32px;
				padding: 0 8px;
				justify-content: center;
				align-items: center;
				color: $uni-text-color-placeholder;
			}
			.search__box-search-input {
				flex: 1;
				color: $uni-text-color;
				font-size: $uni-font-size-base;
			}
			.search__box-icon-clear {
				align-items: center;
				line-height: 24px;
				padding-left: 8px;
			}
		}
		.searchbox__cancel {
			padding-left: 10px;
			line-height: $uni-searchbar-height;
			font-size: 14px;
			// color: $uni-text-color;
		}
	}
</style>
