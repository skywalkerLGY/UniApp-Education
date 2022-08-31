<template>
	<view class="feedback-box center column">
		<radio-group class="radio-group" @change="radioChange">
			<label class="label">
				<radio value="1" checked color="#007aff" style="transform: scale(0.7);" />内容意见
			</label>
			<label class="label">
				<radio value="2" color="#007aff" style="transform: scale(0.7);" />产品建议
			</label>
			<label class="label">
				<radio value="3" color="#007aff" style="transform: scale(0.7);" />其他
			</label>
		</radio-group>
		
		<textarea  v-model="formData.content" maxlength="500" placeholder="请填写具体内容帮助我们了解您的意见和建议" />
		<input v-model="formData.qq" maxlength="15" type="text" placeholder="填写您的QQ">
		<input v-model="formData.weixin" maxlength="25" type="text" placeholder="填写您的微信">
		
		<!-- #ifdef APP-PLUS -->
		<view class="location">
			<view>您的当前位置：</view>
			<text>{{location || '获取信息中'}} </text>
		</view>
		<!-- #endif -->
		
		<button :loading="loading" :disabled="loading" type="primary" @click="submitHandler">提交</button>
	</view>
</template>

<script>
	import api from '@/api/system.js'
	
	export default {
		data() {
			return {
				formData: { //表单数据
					type: 1, // 类型
					content: '',
					qq: '',
					weixin: ''
				} ,
				location: '', //当前位置
				loading: false, 
			}
		},
		
		onLoad() {
			// #ifdef APP-PLUS
			//针对app端获取用户位置
			uni.getLocation({
				geocode: true, //解析中文地址信息
				success: (res) => {
					//console.log('res.address', res.address.province, res.address.city)
					this.location = res.address.province + res.address.city
				}
			})
			// #endif
		},
		
		methods: {
			radioChange(e) {
				this.formData.type = Number.parseInt(e.detail.value) 
				// console.log(typeof this.formData.type)
			},
			
			// 提交反馈意见
			async submitHandler() {
				if(!this.formData.content
					|| this.formData.content.trim().length<10 ) {
					this.$util.msg('反馈内容至少输入10个字')
					return
				}
				
				if(!this.formData.qq && !this.formData.weixin ) {
					this.$util.msg('QQ和微信至少填写一个')
					return
				}
				
				if(this.formData.qq 
					&& !this.$util.checkStr(this.formData.qq, 'QQ')) {
					this.$util.msg('QQ填写错误')
					return
				}
				// 在utils.js中添加关于微信的校验 /^[a-zA-Z][a-zA-Z\d_-]{5,19}$/.test(str)
				if(this.formData.weixin
					&& !this.$util.checkStr(this.formData.weixin, 'weixin')) {
					this.$util.msg('微信填写错误')
					return
				}
				
				this.loading = true
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				
				const res = await api.addFeedback(this.formData)
				this.loading = false
				uni.hideLoading()
				if(!res.code === 20000) {
					this.$util.msg(res.message)
					return
				}
				
				uni.showModal({
					content: '您的意见反馈成功！',
					showCancel: false,
					success: ()=> {
						this.navBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}
	
	.feedback-box {
		padding: 0 30rpx;
	}
	
	.radio-group {
		margin: 30rpx 0;
		.label {
			margin-right: 30rpx;
			font-size: 30rpx;
			color: $mxg-text-color-black;
		}
	}
	
	textarea {
		border: 1px solid #e9e9e9;
		width: 100%;
		padding: 10rpx;
		line-height: 60rpx;
	}
	
	input {
		width: 100%;
		border: 1px solid #e9e9e9;
		margin-top: 30rpx;
		padding: 10rpx;
		height: 70rpx;
	}
	
	.location {
		margin: 50rpx 0;
		align-self: flex-start;
		font-size: 30rpx;
		color: $mxg-text-color-grey;
		line-height: 50rpx;
		text {
			color: $mxg-text-color-black;
		}
	}
	button[type=primary] {
		width: 100%;
		margin-top: 50rpx;
		background-color: $mxg-text-color-blue !important;
	}
	.button-hover[type=primary] {
		background-color: $mxg-color-primary !important;
	}
</style>
