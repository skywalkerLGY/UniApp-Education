<template>
	<view>
		<view class="money column center">
			<text>余额：</text>
			<text>{{ parseFloat(balance).toFixed(2) }}币</text>
		</view>
		
		<view class="recharge">
			<view>充值：</view>
			<view class="list">
				<view :class="{active: index === activeIndex}" 
				v-for="(item, index) in moneyList" :key="index"
				@click="clickItem(index, item)"
				>
					<view>{{item}}币</view>
					<view>￥{{item}}</view>
				</view>
			</view>
		</view>
		
		<view class="desc">
			<view>充值说明：</view>
			<view>
				1.在IOS设备的APP要进行充值后，使用虚拟币消费。<br>
				2.充值后不能在非IOS设备使用，与安卓版和网站余额不通用。<br>
				3.充值后没有使用期限，但不可提现、退换、转让和申请发票。<br>
				4.如遇无法充值、充值失败等问题，可关注[梦学谷]公众号，联系我们解决。<br>
			</view>
		</view>
		
		<view class="bottom center">
			<button class="btn" :loading="loading" :disabled="disabled"
				@click="iosPayHandler"
			>立即充值</button>
		</view>
	</view>
</template>

<script>
	let iapChannel = null // 不要逗号，苹果内部支付渠道
	
	import api from '@/api/order.js'
	
	export default {
		data() {
			return {
				loading: false,
				activeIndex: 0, // 选中的金额下标 
				price: 0, //支付金额
				courseIds: [] ,// 支付课程Ids
				balance: 0, // 余额
				applePrice: 0, // 充值金额
				moneyList: [], // 页面渲染选择金额
				disabled: true, //要先检查支付环境是否iap，不支付则点击立即支付无效
				orderId: null, // 订单id
			}
		},
		
		onLoad(option) {
			// - 接收页面传递过来的参数：支付金额和课程Ids
			if(option.params) {
				const params = JSON.parse(option.params) 
				this.price = params.price
				this.courseIds = params.courseIds
				this.orderId = params.orderId
			}
			
			// - 查询余额
			this.loadData()
			
			// 获取支付渠道对象
			plus.payment.getChannels((channels) => {
				console.log("获取到channel" + JSON.stringify(channels))
				for (var i in channels) {
					var channel = channels[i];
					if (channel.id === 'appleiap') {
						iapChannel = channel;
						this.requestOrder();
					}
				}
				if(!iapChannel){
					this.errorMsg()
				}
			}, (error) => {
				this.errorMsg()
			});
		},
		
		methods: {
			// 检测支付环境
			requestOrder() {
				uni.showLoading({
					title:'检测支付环境...'
				})
				// 参数注意this.moneyList
				iapChannel.requestOrder(this.moneyList, (orderList) => { //必须调用此方法才能进行 iap 支付
					this.disabled = false;
					console.log('requestOrder success666: ' + JSON.stringify(orderList));
					uni.hideLoading();
				}, (e) => {
					console.log('requestOrder failed: ' + JSON.stringify(e));
					uni.hideLoading();
					this.errorMsg()
				});
			},
			
			errorMsg(){
				uni.showModal({
					content: "暂不支持苹果 iap 支付",
					showCancel: false
				})
			},
						
			clickItem(index, item) {
				this.activeIndex = index
				this.applePrice = item
			},
			
			async loadData() {
				// 查询余额
				const {data} = await api.getUserBalance()
				this.balance = data
				
				// - 计算还差多少金额, 则充值多少,
				if(this.price) {
					// apple充值金额=余额balance-付款金额price
					const applePrice = this.balance - this.price
					// 先取正数，再向上取整
					this.applePrice = Math.ceil(Math.abs(applePrice)) 
				}
				console.log('this.applePrice', this.applePrice )
				//充值列表展示金额
				for(let i=0; i<6; i++) {
					this.moneyList.push(this.applePrice + i*30 )
				}
			},
			
			// 立即支付
			iosPayHandler() {
				this.loading = true;
				uni.requestPayment({
					provider: 'appleiap',
					orderInfo: {
						productid: this.applePrice // 支付金额
					},
					success: (e) => {
						uni.showToast({
							title: '支付成功！'
						})
						// 调用接口，立即扣款进行购买商品
						// 跳转到订单页
						this.navTo('/pages/order/order')
					},
					fail: (e) => {
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						console.log("payment结束")
						this.loading = false;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.money{
		height: 288rpx;
		background-color: $mxg-color-primary;
		color: #FFFFFF;
		font-size: 88rpx;
		text:first-child{
			color: #e7e4e9;
			font-size: 30rpx;
		}
	}
	.recharge{
		margin: 20rpx 0 0 20rpx;
		font-size: 30rpx;
		color: #999999;
		.list {
			margin-top: 20rpx;
			text-align: center;
			>view {
				float: left;
				width: 225rpx;
				border: 1px solid $mxg-color-grey;
				border-radius: 10rpx;
				background-color: #FFFFFF;
				margin-right: 10rpx;
				margin-bottom: 15rpx;
				padding: 20rpx 0;
				flex-wrap: wrap;
				view:first-child {
					color: $mxg-text-color-red;
					font-size: 36rpx;
				}
			}
		}
	}
	
	.active {
		box-shadow: 0 0 0 0.5px $mxg-text-color-red;
	}
	
	.desc {
		// 清除浮动
		clear: both;
		margin: 0 20rpx;
		font-size: 30rpx;
		line-height: 45rpx;
		color: #6e6d70;
		view:first-child {
			font-weight: bold;
			padding-top: 50rpx;
			padding-bottom: 30rpx;
		}
		view:last-child {
			padding-bottom: 120rpx;
		}
	}
	
	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100rpx;
		background-color: #FFFFFF;
		border-top: $mxg-underline;
		.btn {
			width: 700rpx;
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
