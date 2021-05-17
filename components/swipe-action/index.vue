<template>
	<view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"SwipeAction",
		data() {
			return {};
		},
		provide() {
			return {
				swipeaction: this
			};
		},
		created() {
			this.children = [];
		},
		methods: {
			closeOther(vm) {
				if (this.openItem && this.openItem !== vm) {
					// #ifdef APP-VUE || H5 || MP-WEIXIN
					this.openItem.button.show = 'none'
					// #endif

					// #ifndef APP-VUE || H5 || MP-WEIXIN
					this.openItem.close()
					// #endif
				}
				this.openItem = vm
			}
		}
	};
</script>

<style></style>
