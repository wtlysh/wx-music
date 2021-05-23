<template>
	<view v-if="showPopup" class="uni-popup" :class="[popupstyle, isDesktop ? 'fixforpc-z-index' : '']" 
	@touchmove.stop.prevent="clear">
		<view @touchstart="touchstart" >
				<uni-transition key="1" v-if="maskShow" name="mask" mode-class="fade" :styles="maskClass" :duration="duration" :show="showTrans" @click="onTap" />
		</view>
	
		<uni-transition key="2" :mode-class="ani" name="content" :styles="transClass" :duration="duration" :show="showTrans" @click="onTap">
			<view class="uni-popup__wrapper" :style="{ backgroundColor: bg }" :class="[popupstyle]" @click="clear"><slot /></view>
		</uni-transition>
	</view>
</template>

<script>

export default {
	name: 'uniPopup',
	props: {
		// 开启动画
		animation: {
			type: Boolean,
			default: true
		},
		// 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
		// message: 消息提示 ; dialog : 对话框
		type: {
			type: String,
			default: 'center'
		},
		// maskClick
		maskClick: {
			type: Boolean,
			default: true
		},
		backgroundColor: {
			type: String,
			default: 'none'
		},
		safeArea:{
			type: Boolean,
			default: true
		}
	},

	watch: {
		/**
		 * 监听type类型
		 */
		type: {
			handler: function(type) {
				if (!this.config[type]) return
				this[this.config[type]](true)
			},
			immediate: true
		},
		isDesktop: {
			handler: function(newVal) {
				if (!this.config[newVal]) return
				this[this.config[this.type]](true)
			},
			immediate: true
		},
		/**
		 * 监听遮罩是否可点击
		 * @param {Object} val
		 */
		maskClick: {
			handler: function(val) {
				this.mkclick = val
			},
			immediate: true
		},
		safeArea: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			duration: 300,
			ani: [],
			showPopup: false,
			showTrans: false,
			popupWidth: 0,
			popupHeight: 0,
			config: {
				bottom: 'bottom',
				center: 'center',
				share: 'bottom'
			},
			maskClass: {
				position: 'fixed',
				bottom: 0,
				top: 0,
				left: 0,
				right: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.4)'
			},
			transClass: {
				position: 'fixed',
				left: 0,
				right: 0
			},
			maskShow: true,
			mkclick: true,
			popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'
		}
	},
	computed: {
		isDesktop() {
			return this.popupWidth >= 500 && this.popupHeight >= 500
		},
		bg() {
			if (this.backgroundColor === '' || this.backgroundColor === 'none') {
				return 'transparent'
			}
			return this.backgroundColor
		}
	},
	mounted() {
		const fixSize = () => {
			const { windowWidth, windowHeight, windowTop, safeAreaInsets } = uni.getSystemInfoSync()
			this.popupWidth = windowWidth
			this.popupHeight = windowHeight + windowTop
			// 是否适配底部安全区
			if(this.safeArea){
				this.safeAreaInsets = safeAreaInsets
			}else{
				this.safeAreaInsets = 0
			}
		}
		fixSize();
	},
	created() {
		this.mkclick = this.maskClick
		if (this.animation) {
			this.duration = 300
		} else {
			this.duration = 0
		}
		// TODO 处理 message 组件生命周期异常的问题
		this.messageChild = null
		// TODO 解决头条冒泡的问题
		this.clearPropagation = false
	},
	methods: {
		/**
		 * 公用方法，不显示遮罩层
		 */
		closeMask() {
			this.maskShow = false
		},
		/**
		 * 公用方法，遮罩层禁止点击
		 */
		disableMask() {
			this.mkclick = false
		},
		// TODO nvue 取消冒泡
		clear(e) {
			this.clearPropagation = true
		},
		
		open(direction) {
			let innerType = ['center', 'bottom','share']
			if (!(direction && innerType.indexOf(direction) !== -1)) {
				direction = this.type
			}
			if (!this.config[direction]) {
				console.error('缺少类型：', direction)
				return
			}
			this[this.config[direction]]()
			this.$emit('change', {
				show: true,
				type: direction
			})
		},
		close(type) {
			this.showTrans = false
			this.$emit('change', {
				show: false,
				type: this.type
			})
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				this.showPopup = false
			}, 300)
		},
		// TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
		touchstart(){
			this.clearPropagation = false
		},
		
		onTap() {
			if(this.clearPropagation) return
			if (!this.mkclick) return
			this.close()
		},
		/**
		 * 底部弹出样式处理
		 */
		bottom(type) {
			this.popupstyle = 'bottom'
			this.ani = ['slide-bottom']

			this.transClass = {
				position: 'fixed',
				left: 0,
				right: 0,
				bottom: 0,
				paddingBottom: (this.safeAreaInsets && this.safeAreaInsets.bottom) || 0,
				backgroundColor: this.bg
			}
			// TODO 兼容 type 属性 ，后续会废弃
			if (type) return
			this.showPopup = true
			this.showTrans = true
		},
		/**
		 * 中间弹出样式处理
		 */
		center(type) {
			this.popupstyle = 'center'
			this.ani = ['zoom-out', 'fade']
			this.transClass = {
				position: 'fixed',
				/* #ifndef APP-NVUE */
				display: 'flex',
				flexDirection: 'column',
				/* #endif */
				bottom: 0,
				left: 0,
				right: 0,
				top: 0,
				justifyContent: 'center',
				alignItems: 'center'
			}
			// TODO 兼容 type 属性 ，后续会废弃
			if (type) return
			this.showPopup = true
			this.showTrans = true
		},
	}
}
</script>
<style lang="scss" scoped>
.uni-popup {
	position: fixed;
	z-index: 99;
	.uni-popup__wrapper {
		display: block;
		position: relative;
		/* iphonex 等安全区设置，底部安全区适配 */
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		&.left,
		&.right {
			flex: 1;
		}
	}
}

.fixforpc-z-index {
	z-index: 999;
}

.fixforpc-top {
	top: 0;
}
</style>
