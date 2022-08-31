<template>
	<view >
		<view class="option-pay card">
			<view class="title">支付方式</view>
			 <radio-group @change="radioChange">
				 <!-- #ifndef MP-WEIXIN -->
				 <label class="pay-item center space-between" >
				 	<view class="left center">
				 		<image src="/static/pay/alipay.png"></image>
				 		<text>支付宝</text>
				 	</view>
				 	<radio value="alipay" :checked="provider === 'alipay'"  style="transform:scale(0.8)"/>
				 </label>
				 <!-- #endif -->
				 
				 <!-- #ifndef MP-ALIPAY -->
				<label class="pay-item center space-between" >
					<view class="left center">
						<image src="/static/pay/wxpay.png"></image>
						<text>微信支付</text>
					</view>
					<radio value="wxpay" :checked="provider === 'wxpay'" style="transform:scale(0.8)"/>
				</label>
				<!-- #endif -->
			</radio-group>
		</view>
		
		<view class="card price space-between">
			<text>实付金额</text>
			<text>￥{{data.price}}</text>
		</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<button class="btn" :loading="loading":disabled="loading"  @click="wxPayHandler">立即支付</button>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<button class="btn" :loading="loading" :disabled="loading" @click="payHandler">立即支付</button>
		<!-- #endif -->
		
	</view>
</template>

<script>
	// 导入支付的混合文件
	import payMixin from './mixins/pay.js'
	
	export default {
		mixins: [payMixin],
		
		data() {
			return {
				data: { // 支付数据
					price: 0, //支付金额
					orderId: null, //订单id
				}
			}
		},
		
		onLoad(option) {
			// 获取支付数据
			if(option.params) this.data = JSON.parse(option.params) 
		},
		
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.card {
		margin: 0 30rpx;
		padding: 0 20rpx;
		background-color: #FFFFFF;
		margin-top: 30rpx;
		box-shadow: 1px 0 5px 0 rgba(0,0,0, 0.08);
		border-radius: 20rpx;
	}
	.option-pay {
		.title {
			line-height: 90rpx;
			border-bottom: $mxg-underline;
		}
		
		.pay-item {
			line-height: 90rpx;
			.left {
				image {
					width: 60rpx;
					height: 60rpx;
				}
				text{
					font-size: 33rpx;
					padding-left: 20rpx;
				}
			}
			
		}
	}
	
	.price {
		line-height: 90rpx;
		font-size: 30rpx;
		text:last-child {
			color: $mxg-text-color-red;
		}
	}
	
	.btn {
		margin: 60rpx 30rpx;
		background-color: $mxg-color-primary;
		color: #FFFFFF;
		border-radius: 50rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		&::after {
			// 加载中隐藏边框
			border: none;
		}
	}
</style>
