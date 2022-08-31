<template>
	<view>
		<view class="order-item"
			v-for="(item, index) in orderList" :key="index">
			<view class="base-info">
				<text>{{item.updateDate}}</text>
				<text>订单号：{{item.orderId}}</text>
			</view>
			<course-item 
				v-for="(course, index2) in item.courseList" 
				:key="index2" :item="course"
			>
			</course-item>
			<view class="shifu">
				<text>实付：</text>
				<text>￥{{item.priceDiscount || item.pricePayable}}</text>
			</view>
			
			<view class="option center space-between">
				<!-- 订单状态：1待支付，2交易成功，3交易关闭 -->
				<text class="red" v-if="item.status === 1">待支付</text>
				<text class="grey" v-if="item.status === 3">交易关闭</text>
				<text class="grey" v-if="item.status === 2">交易成功</text> 
				<view>
					<!-- 
					 1待支付: 取消订单/立即支付
					 2交易成功: 不显任何按钮
					 3交易关闭:显示删除按钮
					 -->
					<button @click="orderCancel(item.orderId)" v-if="item.status === 1" type="default" size="mini">取消订单</button>
					<button @click="orderPay(item)" v-if="item.status === 1" type="warn" size="mini">立即支付</button>
					<button @click="orderDelete(item.orderId)" v-if="item.status === 3" size="mini">删除订单</button>
				</view>
			</view>
		</view>
		
		<view v-if="isShow" class="mask" catchtouchmove="true" @touchmove.stop.prevent="()=>{}"></view>
		<view v-if="isShow" class="bottom-ios" catchtouchmove="true" @touchmove.stop.prevent="()=>{}">
			<view class="title center">
				<text>确定支付</text>
				<text @click="showHidePay">取消</text>
			</view>
			<view class="price space-between">
				<text>支付金额</text>
				<text>{{order.priceDiscount || order.pricePayable}}</text>
			</view>
			<view class="price space-between">
				<text>当前余额</text>
				<text>{{balance}}</text>
			</view>
			<button  class="btn" type="default"
				:loading="loading" :disabled="loading"
				@click="iosPay"
			>
			{{isPay ? '立即支付': '余额不足，立即充值'}}
			</button>
		</view>
	</view>
</template>

<script>
	import courseItem from '@/components/common/course-item.vue'
	
	import api from '@/api/order.js'
	
	export default {
		components: {courseItem},
		
		data() {
			return {
				orderList: [], // 订单列表数据
				isShow: false, //是否显示ios支付窗口
				isIOS: false, // 是否为APP端的IOS设备
				loading: false, // 是否点击了ios弹窗中的按钮
				balance: 0, //余额
				order: {}, //立即支付的订单数据
			}
		},
		
		computed: {
			isPay() { // 余额是否足够支付
				return this.balance >= (this.order.priceDiscount || this.order.pricePayable)
			}
		},
		
		onLoad() {
			this.loadData()
			
			// #ifdef APP-PLUS
			// 保证ios平台上的app
			this.isIOS = uni.getSystemInfoSync().platform === 'ios'
			// #endif
		},
		
		methods: {
			async loadData() {
				// 查询用户订单列表
				const {data} = await api.getUserOrderList()
				this.orderList = data
			},
			
			// 取消订单
			orderCancel(orderId) {
				uni.showModal({
					content: '确定取消该订单记录？',
					success: async (res) => {
						// 点击确定，进行调用接口取消订单
						if(res.confirm) {
							const res = await api.cancelOrder(orderId)
							if(res.code === 20000) {
								this.$util.msg('取消成功')
								// 重新加载列表数据
								this.loadData()
							}else {
								this.$util.msg('取消失败，请重试')
							}
						}
					}
				})
			},
			
			// 删除订单
			orderDelete(orderId) {
				uni.showModal({
					content: '确定删除该订单记录？',
					success: async (res) => {
						// 点击确定，进行调用接口删除订单
						if(res.confirm) {
							const res = await api.deleteOrder(orderId)
							if(res.code === 20000) {
								this.$util.msg('删除成功')
								// 重新加载列表数据
								this.loadData()
							}else {
								this.$util.msg('删除失败，请重试')
							}
						}
					}
				})
			},
			
			// 点击订单列表中的 立即支付 按钮
			async orderPay(order) {
				this.order = order
				if(this.isIOS) {
					// 是app端ios平台，则弹出窗口
					this.showHidePay()
					// 查询余额
					this.loading = true
					const {data} = await api.getUserBalance()
					this.balance = data
					this.loading = false
				}else {
					// 非app端ios平台，则跳转订单支付页
					const price = this.order.priceDiscount || this.order.pricePayable
					const data = {price, orderId: this.order.orderId}
					this.navTo(`/pages/order/order-pay?params=${ JSON.stringify(data) }`)
				}
				
			},
			
			// 弹窗中点击的按钮
			async iosPay() {
				const price = this.order.priceDiscount || this.order.pricePayable
				const data = {price, orderId: this.order.orderId}
				// 判断余额是否充值
				if(this.isPay) {
					// 余额充足，直接支付
					this.loading = true
					uni.showLoading({
						title: '支付中，请勿离开此页面',
						mask: true
					})
					//支付
					const res = await api.orderPay(data)
					uni.hideLoading()
					if(res.code === 20000) {
						// 支付成功，关闭弹窗
						this.showHidePay()
						/* this.$util.msg('支付成功', {icon: 'success'}) */
						uni.showToast({
							title: '支付成功'
						})
						// 刷新订单列表
						this.loadData()
					}else {
						uni.showModal({
							content: '支付失败，请重试！原因：' + res.message,
							showCancel: false
						})
					}
				}else {
					// 余额不充足，跳转我的余额，进行充值
					this.navTo(`/pages/order/my-balance?params=${ JSON.stringify(data) }`)
				}
			},
			
			// 显示隐藏ios支付窗口
			showHidePay() {
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style lang="scss">
	.order-item {
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;
		margin-bottom: 20rpx;
		font-size: 25rpx;
		border-bottom: $mxg-underline;
		.base-info {
			color: $mxg-text-color-black;
			text:first-child {
				margin-right: 20rpx;
			}
		}
		.shifu {
			text-align: right;
			line-height: 70rpx;
			text:last-child {
				font-size: 35rpx;
				color: $mxg-text-color-red;
			}
		}
		
		.option {
			button {
				font-size: 20rpx;
				margin-left: 10rpx;
			}
			.red {
				color: $mxg-text-color-red;
			}
			.grey {
				color: $mxg-text-color-grey;
			}
		}
	}

	.bottom-ios {
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 30rpx 40rpx;
		border-top: $mxg-underline;
		
		.title {
			font-size: 38rpx;
			margin-bottom: 20rpx;
			text-align: center;
			text:first-child {
				flex: 1;
				margin-left: 70rpx;
			}
			text:last-child {
				color: $mxg-text-color-grey;
				font-size: 35rpx;
			}
		}
		
		.price {
			font-size: 30rpx;
			line-height: 90rpx;
			text:last-child {
				color: $mxg-text-color-red;
			}
		}
		
		.btn {
			background-color: $mxg-color-primary;
			color: #FFFFFF;
			border-radius: 50rpx;
			line-height: 80rpx;
			font-size: 30rpx;
			margin-top: 30rpx;
			&::after {
				// 加载中隐藏边框
				border: none;
			}
		}
	}
</style>
