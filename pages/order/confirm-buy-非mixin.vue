<template>
	<view class="confirm-order">
		<view class="goods">
			<text>商品信息</text>
			<!-- v-for优先级高于v-if -->
			<template v-if="course && course.list"> 
				<course-item v-for="(item, index) in course.list" 
					:key="index" :item="item" >
				</course-item>
			</template>
			<course-item v-else :item="course"></course-item>
		</view>
		
		<view class="option-pay card">
			<view class="title">支付方式</view>
			<!-- APP端的IOS设备上显示 -->
			<view v-if="isIOS" class="ios">
				<text>余额：</text>
				<text>{{balance}}币 {{isPay ? '': '(不足支付)'}}</text>
			</view>
			<!-- 非APP端的IOS设备上显示 -->
			 <radio-group v-else @change="radioChange">
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
		
		<view class="card price">
			<view class="space-between">
				<text>商品金额</text>
				<!-- 原价或套餐总原价 -->
				<text>￥{{course.priceOriginal || course.totalPrice}}</text>
			</view>
			<view class="space-between" v-if="course.priceDiscount || course.groupPrice">
				<text>优惠价</text>
				<!-- 优惠价或套餐组合价 -->
				<text>￥{{course.priceDiscount || course.groupPrice}}</text>
			</view>
		</view>
		<!-- 占位底部 -->
		<view style="height: 130rpx;"></view>
		
		<view class="pay space-between">
			<view>
				<text class="grey">实付金额：</text>
				<!-- <text>￥{{course.priceDiscount || course.groupPrice || course.priceOriginal || course.totalPrice}}</text> -->
				<text>{{payPrice}}</text>
			</view>
			<view>
				<button v-if="isIOS" class="btn" :loading="loading" :disabled="loading" @click="iosPayHandler">
					{{isPay ? '立即': '充值并'}}支付
				</button>
				<!-- #ifdef MP-WEIXIN -->
				<button v-else class="btn" :loading="loading":disabled="loading"  @click="wxPayHandler">立即支付</button>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<button v-else class="btn" :loading="loading" :disabled="loading" @click="payHandler">立即支付</button>
				<!-- #endif -->
			</view>
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
				course: {}, // 商品信息
				isIOS: false, // 是否为APP端的IOS设备
				provider: 'alipay', // 选择支付方式
				loading: false, // 提交中
				balance: 0, //余额（币）
			}
		},
		
		computed: {
			// 支付金额
			payPrice() {
				return this.course.priceDiscount || this.course.groupPrice || this.course.priceOriginal || this.course.totalPrice
			},
			isPay() {
				// 余额是否足够，true 足够，fasle不足
				return this.balance >= this.payPrice
			}
		},
		
		onLoad(option) { 
			// #ifndef MP-WEIXIN
			// 非微信小程序转义：.replace(/%/g, '%25')
		    if(option.course) this.course = JSON.parse(decodeURIComponent(option.course.replace(/%/g, '%25')));
			if(option.courseGroup) this.course = JSON.parse(decodeURIComponent(option.courseGroup.replace(/%/g, '%25')));
			// #endif
			
			// #ifdef MP-WEIXIN
			// 微信小程序不需要转义
			if(option.course) this.course = JSON.parse(decodeURIComponent(option.course));
			if(option.courseGroup) this.course = JSON.parse(decodeURIComponent(option.courseGroup));
			
			// 微信小程序选中微信支付
			this.provider = 'wxpay'
			// #endif
			// console.log('course', this.course)
			
			// #ifdef APP-PLUS
			// 保证ios平台上的app
			this.isIOS = uni.getSystemInfoSync().platform === 'ios'
			
			// ios平台上的app查询余额
			if(this.isIOS) {
				this.getBalance()
			}
			// #endif
		},
		
		
		methods: {
			async getBalance() {
				// 查询余额（币）
				const {data} = await api.getUserBalance()
				this.balance = data
			},
			
			// 获取支付渠道
			radioChange(event) {
				// console.log('event', event)
				this.provider = event.detail.value
			},
			
			// APPLE应用内支付
			async iosPayHandler() {
				// 1. 支付金额 this.payPrice
				const price = this.payPrice
				// 2. 课程ids(单个课程、课程套餐）
				let courseIds = []
				if(this.course.list) {
					// 课程套餐每个课程id
					this.course.list.forEach( item => {
						courseIds.push(item.id)
					})
				}else {
					// 单个课程
					courseIds.push(this.course.id)
				}
				// 提交后台的数据
				const data = {price, courseIds}
				console.log('data', data, this.isPay)
				// 3. 余额不足，跳转充值页
				if(!this.isPay) {
					this.navTo(`/pages/order/my-balance?params=${JSON.stringify(data)}`)
					return
				}
				
				// 4. 余额充足，调用服务接口支付 
				this.loading = true
				uni.showLoading({
					title: '支付中',
					mask: true
				})
				const res = await api.orderPay(data)
				uni.hideLoading()
				
				// 5. 刷新当前余额&跳转到订单页
				if(res.code === 20000) {
					this.getBalance()
					uni.showModal({
						content: '支付完成，立即学习',
						showCancel: false,
						success: () =>{
							// 跳转订单页
							this.navTo('/pages/order/order')
						}
					})
				}else {
					uni.showModal({
						content: '支付失败，原因：' + res.message,
						showCancel: false
					})
				}
				
				this.loading = false
			},
			
			// 登录微信小程序获取用户openid
			loginWeixinMp() {
				// https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
				return new Promise((resolve, reject)=>{
					// 1. 先获取用户code，再获取openid
					uni.login({
						provider: 'weixin',
						success: async (res) => {
							console.log('res', res.code)
							// 2. 再获取 openid, 调用后台服务接口
							// let {data: openid} = await api.getUserOpenid(res.code)
							let openid = 'xxx'
							uni.setStorageSync('openid', openid)
							resolve(openid)
						},
						fail: (err) => {
							reject(err)
						}
					})
				})
			},
			
			//微信小程序支付
			async wxPayHandler() {
				this.loading = true
				// 1. 登录微信小程序，获取code, 再获取 openid
				let openid = uni.getStorageSync('openid')
				if(!openid) {
					try{
						openid = await this.loginWeixinMp()
					}catch(e){
						console.error(e)
					}
					if( !openid ) {
						uni.showModal({
							content: '获取openid失败',
							showCancel: false
						})
						this.loading = false
						return
					}
				}
				// console.log('openid', openid)
				// 2. 通过 openid 调用后台服务接口获取订单信息
				let orderInfo = await this.getOrderInfo(openid)
				// 3. 发起支付
				uni.requestPayment({
					...orderInfo,
					success: (res) => {
						uni.showToast({
							title: '支付成功！'
						})
						// 跳转到订单页
						this.navTo('/pages/order/order')
					},
					fail: (res) => {
						uni.showModal({
							content: '支付失败，原因：' + res.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false
					}
				})
			},
			
			// 安卓端APP支付
			async payHandler() {
				// 支付中
				this.loading = true
				// #ifdef APP-PLUS
				// 1. 获取订单信息
				let orderInfo = await this.getOrderInfo()
				console.log('获取订单信息', orderInfo)
				if(!orderInfo) {
					uni.showModal({
						content: '获取支付订单信息失败',
						showCancel: false
					})
					return
				}
				// 2. 发送支付请求
				uni.requestPayment({
					provider: this.provider,
					orderInfo: orderInfo,
					success: (e) => {
						console.log('支付成功', e)
						uni.showToast({
							title: '支付成功！'
						})
						// 跳转到订单页
						this.navTo('/pages/order/order')
					},
					fail: (e) => {
						console.log('支付失败', e)
						uni.showModal({
							content: '支付失败！',
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false
					}
				})
				// #endif
				
				// #ifdef H5
				// #endif
			},
			
			getOrderInfo(openid) {
				return new Promise( async (resolve, reject) => {
					
					if(openid) {
						// https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_2.shtml
						// 微信小程序发送请求到服务端获取订单信息，
						 // await api.getOrderInfoWxpayMP({openid: openid})
						let orderInfo = {
							timeStamp: "1414561699",
							nonceStr: "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
							package: "prepay_id=wx201410272009395522657a690389285100",
							signType: "RSA",
							paySign: "oR9d8PuhnIc+YZ8cBHFCwfgpa",
						}
						resolve(orderInfo)
						return
					}
					
					let res= null 
					let data = {} // 提交给后台的数据（自行扩展）
					if(this.provider === 'alipay') {
						res = await api.getOrderInfoAlipay(data)
					}else if( this.provider === 'wxpay') {
						res = await api.getOrderInfoWxpay(data)
					}
					if(res.code === 20000) {
						resolve(res.data)
					}else {
						reject(new Error('获取支付信息失败，原因：'+ res.message))
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.confirm-order {
		font-size: 29rpx;
		color: #333;
	}
	.goods {
		padding: 20rpx 30rpx 0 30rpx;
		background-color: #FFFFFF;
	}
	
	.card {
		padding: 0 30rpx;
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
		.ios {
			line-height: 90rpx;
			text:last-child{
				color: $mxg-text-color-red;
			}
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
		>view {
			line-height: 90rpx;
			border-bottom: 1px solid #F8F9FB;
		}
	}
	
	.pay {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		height: 100rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
		border-top: $mxg-underline;
		view:first-child >text:last-child {
			color: $mxg-text-color-red;
			font-size: 35rpx;
		}
		.btn {
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
	}
</style>
