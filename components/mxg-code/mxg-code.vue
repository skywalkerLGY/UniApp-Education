<template>
	<view class="mxg-code center" @click="sendSmsCode">
		<text class="code-btn" >
			{{codeDuration > 0 ? codeDuration+'s':  '获取验证码'}} 
		</text>
	</view>
</template>

<script>
	
	let interval = null
	
	import api from '@/api/system.js'
	export default {
		
		props: {
			mobile: { // 手机号码
				type: String,
				default: ''
			},
			templateCode: { // 短信模板代码
				type: String,
				default: ''
			}
		},
		
		data() {
			return {
				codeDuration: 0 // 倒计时时长
			}
		},
		methods: {
			
			async sendSmsCode() {
				
				if(this.codeDuration) {
					uni.showModal({
						content: `请在${this.codeDuration}秒后重试`,
						showCancel: false
					})
					return
				}
				
				// 校验手机号
				if(!this.$util.checkStr(this.mobile, 'mobile')) {
					this.$util.msg('手机号码格式不正确')
					return
				}
				
				// 更换手机号与原手机号一致，不允许发送
				if(this.$store && this.mobile === this.$store.state.userInfo.mobile) {
					this.$util.msg('新手机号与当前绑定的手机号不能相同')
					return
				}
				
				try{
					//发送短信
					uni.showLoading({
						mask: true
					})
					const data = {mobile: this.mobile, templateCode: this.templateCode}
					const res = await api.sendSmsCode(data)
					uni.hideLoading()
					
					//响应结果
					this.$util.msg(res.message)
					if(res.code !== 20000) return
					
					// 倒计时
					this.codeDuration = 60
					interval = setInterval(() => {
						this.codeDuration--
						if(this.codeDuration === 0) {
							clearInterval(interval)
							interval = null
						}
					}, 1000) // 每隔1秒中调用一次
				}catch(e){
					uni.hideLoading()
					this.$util.msg('验证码发送失败')
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.mxg-code {
		background-color: $mxg-color-primary;
		border-radius: 10rpx;
		width: 160rpx;
	}
	
	.code-btn {
		font-size: 25rpx;
		padding: 10rpx 0;
		color: #FFFFFF;
	}
</style>
