<template>
	<view class="search-box">
		<view class="search-form round">
			<view class="search-box-icon search-icon">
				<icon type="search" size="16" />
			</view>
			<input class="search-input" type="text" confirm-type="search"
				:placeholder="isDefault ? defaultKeyword : placeholder" @input="inputChange"
				@confirm="triggerConfirm" :focus="isFocus" v-model="keyword" @focus="focus" @blur="blur"></input>
			<view class="search-box-icon search-clear" v-show="showClose" @tap="clearWord">
				<icon type="clear" size="16" />
			</view>
			<view class="search-cancel" v-show="showCancel" @click="cancel">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	import {
		apiSerchSuggest,
		apiSearchDefault
	} from '../../api/search.js'
	export default{
		props:['isShowKeywordList','']
		data(){
			return{
				keyword: "",
				isFocus: false, //焦点
				showCancel: false, //是否显示取消
				showClose: false,  //是否显示清除按钮
				defaultKeyword: '',
				isDefault: true, //是否有搜索建议词
				placeholder: "搜索你想听的歌曲"
			}
		},
		mounted(){
			this.loadDefaultKeyword();
		},
		methods:{
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				apiSearchDefault().then(res => {
					// console.log(res)
					let word = res.data.realkeyword;
					if (word == null || word.length == 0) {
						this.isDefault = false;
						return;
					};
					this.defaultKeyword = word;
				});
			},
			blur() {
				uni.hideKeyboard();
				this.showClose = !!(this.keyword)
			},
			focus() {
				this.showCancel = true;
				this.showClose = !!(this.keyword);
				if (!this.isShowContent) {
					uni.pageScrollTo({
						duration: 100,
						scrollTop: 0
					})
				}
				this.isShowKeywordList = true;
				this.keywordList = [];
				this.isShowContent = true;
			},
		}
	}
</script>

<style lang="scss">
	.search-box {
		position: fixed;
		z-index: 999;
		width: 100%;
		padding-top: 20rpx;
	
		.search-form {
			width: 90%;
			margin: 0 auto;
			position: relative;
			height: 100rpx;
			display: flex;
	
			.search-box-icon {
				position: absolute;
				height: 70rpx;
				line-height: 70rpx;
			}
	
			.search-icon {
				left: 30rpx;
			}
	
			.search-input {
				background: #f0f0f0;
				height: 70rpx;
				border-radius: 35rpx;
				padding-left: 80rpx;
				flex: 1;
				font-size: 32rpx;
			}
	
			.search-clear {
				right: 120rpx;
				width: 70rpx;
				text-align: center;
			}
	
			.search-cancel {
				height: 70rpx;
				width: 100rpx;
				line-height: 70rpx;
				font-size: 32rpx;
				text-align: center;
	
			}
		}
	}
</style>
