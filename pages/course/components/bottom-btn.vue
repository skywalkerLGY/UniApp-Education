<template>
	<view class="bottom center" @click="clickHandler">
		<text class="bottom-btn">{{btnText}}</text>
	</view>
</template>

<script>
	
	export default {
		props: {
			btnText: {
				type: String, 
				default: '立即购买'
			},
			courseId: [String, Number]
		},
		
		methods: {
			clickHandler() {
				// 点击按钮触发事件
				this.$emit('clickBottom')
			}
		}
	}
	
</script>

<style lang="scss">
	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF; 
		height: 100rpx;
		border-top: $mxg-underline;
	}
	
	.bottom-btn {
		width: 700rpx;
		background-color: #345DC2;
		text-align: center;
		font-size: 35rpx;
		color: #FFFFFF;
		border-radius: 50rpx;
		line-height: 80rpx;
	}
</style>
