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
					this.openItem.button.show = 'none'
				}
				this.openItem = vm
			}
		}
	};
</script>

<style></style>
