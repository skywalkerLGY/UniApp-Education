
import api from '@/api/order.js'

export default {
	data() {
		return {
			provider: 'alipay', // 选择支付方式
			loading: false, // 提交中
			data: {}, // 订单信息服务接口时作为请求参数
		}
	},
	
	onLoad(option) { 
		// #ifdef MP-WEIXIN
		// 微信小程序选中微信支付
		this.provider = 'wxpay'
		// #endif
	},
	
	
	methods: {
		// 获取支付渠道
		radioChange(event) {
			// console.log('event', event)
			this.provider = event.detail.value
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
		
		// 获取预支付订单信息
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
				// let data = {} // 提交给后台的数据（自行扩展）
				if(this.provider === 'alipay') {
					res = await api.getOrderInfoAlipay(this.data)
				}else if( this.provider === 'wxpay') {
					res = await api.getOrderInfoWxpay(this.data)
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