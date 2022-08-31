<template>
	<view class="content">
		<view class="input-group">
			<view class="center">
				<text class="title">手机号：</text>
				<view class="row">
					<input v-model="mobile" class="mxg-input" type="number" maxlength="11" placeholder="请输入手机号码">
				</view>
			</view>
			<view class="center">
				<text class="title">验证码：</text>
				<view class="row">
					<input v-model="code" class="mxg-input" type="number" maxlength="6" placeholder="请输入验证码">
					<mxg-code :mobile="mobile" templateCode="SMS_1993234234"></mxg-code>
				</view>
			</view>
		</view>
		<button @click="submitHandler" type="primary" >提交</button>
	</view>
</template>

<script>
	
	import api from '@/api/auth.js'
	
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				data: null, //其他页面传递过来的数据
			}
		},
		
		onLoad(option) {
			this.data = option.data && JSON.parse(option.data)
			//console.log('data', this.data)
			if(option.title) {
				//设置导航标题
				uni.setNavigationBarTitle({
					title: option.title
				})
			}
		},
		
		methods: {
			// 提交手机号验证码等 
			async submitHandler() {
				const {mobile, code} = this
				if(!this.$util.checkStr(mobile, 'mobile')) {
					this.$util.msg('手机号码格式不正确')
					return
				}
				
				if(!this.$util.checkStr(code, 'code')) {
					this.$util.msg('验证码错误')
					return
				}
				
				// 更换手机号与原手机号一致，不允许发送
				if(this.$store && this.mobile === this.$store.state.userInfo.mobile) {
					this.$util.msg('新手机号与当前绑定的手机号不能相同')
					return
				}
				
				
				try{
					uni.showLoading({mask: true})
					const data = {mobile, code, ...this.data}
					const res = await api.updateUserMobile(data)
					uni.hideLoading()
					
					this.$util.msg(res.message)
					if(res.code !== 20000) return
					
					// 成功，更新状态值
					this.successCallBack(res.data)
				}catch(e){
					this.$util.msg('操作失败')
					uni.hideLoading()
				}
			},
			
			successCallBack(data) {
				this.$util.msg('提交成功')
				this.$store.commit('setToken', data)
				setTimeout(() => {
					this.navBack(2)
				}, 300)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}
	.content {
		margin: 80rpx 20rpx;
	}
	
	.input-group {
		padding: 0 25rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		.title {
			font-size: 35rpx;
			height: 100rpx;
			line-height: 100rpx;
			width: 190rpx;
		}
		.mxg-input {
			flex: 1;
			height: 60rpx;
			line-height: 60rpx;
			font-size: 35rpx;
		}
		.row {
			width: 100%;
		}
	}
	
	button[type=primary] {
		background-color: $mxg-color-primary !important;
		margin-top: 80rpx;
	}
</style>
