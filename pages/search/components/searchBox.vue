<template>
	<view class="searchbox">
		
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
	

	
	}
</style>
