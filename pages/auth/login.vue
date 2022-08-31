<template>
	<view class="app">
		<text class="back-btn iconfont icon-close" @click="navBack(1)"></text>
		<view class="left-top-sign">LOGIN</view>
		<view class="welcome">欢迎回来,李光亚！</view>
		
		<!-- 手机验证码 -->
		<view class="input-content">
			<view class="input-item">
				<text class="tit">手机号码</text>
				<view>
					<input v-model="mobile" maxlength="11" type="number" placeholder="请输入手机号码" placeholder-style="color: #909399"/>
				</view>
			</view>
			<view class="input-item">
				<text class="tit">验证码</text>
				<view class="row">
					<input v-model="code" maxlength="6" type="number" placeholder="请输入手机验证码" placeholder-style="color: #909399"/>
					<mxg-code :mobile="mobile" templateCode="MSM_1999123123"></mxg-code>
				</view>
			</view>
			<button :loading="loading" type="primary" @click="login">登录</button>
		</view>
		
		<!-- #ifndef H5 -->
		<view class="other-wrapper center column">
			<view class="line">
				<text class="tit">社交帐号登录</text>
			</view>
			<view class="row">
				<image @click="toProviderLogin('weixin')"
					class="icon" src="/static/share/weixin.png"></image>
				<!-- #ifdef APP-PLUS -->
				<image @click="toProviderLogin('qq')" class="icon" src="/static/share/qq.png"></image>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->
		<!-- 协议 -->
		<view class="agreement center">
			<text @click="checkAgreement" :class="{active: agreement}" class=" iconfont icon-roundcheckfill"></text>
			<text @click="checkAgreement">请认真阅读并同意</text>
			<text class="tit" @click="navTo('/pages/public/xieyi')">《用户服务协议》</text>
			<text class="tit" @click="navTo('/pages/public/yinsi')">《隐私权政策》</text>
		</view>
	</view>
</template>

<script>
	
	import api from '@/api/auth.js'
	
	export default {
		data() {
			return {
				mobile: '', //手机号码 
				code: '', //验证码
				loading: false, //登录中
				agreement: true, //勾选协议 
			}
		},
		methods: {
			async login() {
				// 协议
				if(!this.agreement) {
					this.$util.msg('请阅读并同意用户服务及隐私协议')
					return
				}
				
				const {mobile, code} = this
				if(!this.$util.checkStr(mobile, 'mobile')) {
					this.$util.msg('请输入有效手机号码')
					return
				}
				if(!this.$util.checkStr(code, 'mobileCode')) {
					this.$util.msg('验证码输入错误')
					return
				}
				
				//调用接口
				this.loading = true
				uni.showLoading({title: '登录中', mask: true})
				const res = await api.login( {mobile, code} )
				this.loading = false
				uni.hideLoading()
				
				if(res.code === 20000) {
					this.loginSuccessCallBack(res.data)
				}else {
					this.$util.msg(res.message)
				}
			},
			
			// 登录成功操作 vuex 
			loginSuccessCallBack(data) {
				this.$util.msg('登录成功')
				// 状态管理保存用户信息
				this.$store.commit('setToken', data)
				setTimeout(() => {
					this.navBack()
				}, 500)
			},
			
			// 第3方授权登录
			toProviderLogin(provider) {
				if( !this.agreement ) {
					this.$util.msg('请阅读并同意用户服务及隐私协议')
					return
				}
				
				uni.showLoading({mask: true})
				
				uni.login({
					provider,
					// #ifdef MP-ALIPAY 
					scopes: 'auth_user', //支付宝小程序要设置主动授权
					// #endif
					success: (res) => {
						// console.log('授权成功', res)
						// #ifdef APP-PLUS
						const data = {userInfo: res.authResult}
						// #endif
						// #ifdef MP-WEIXIN
						const data = {code: res.code}
						// #endif
						// 2. 授权成功后，请求自己的后台认证接口来完成自己平台的认证
						this.getServiceUserInfo(data)
						
					},
					fail: (err) => {
						this.$util.msg('授权登录失败')
						uni.hideLoading()
					}
				})
			},
			
			// 获取应用内的认证授权信息
			async getServiceUserInfo(reqData) {
				// 1. 调用后台来完成登录
				const {code, message, data} = await api.loginByProvider(reqData)
				uni.hideLoading()
				
				if(code !== 20000) {
					this.$util.msg(message)
					return
				}
				
				// 2.成功后，判断是否绑定了手机号
				if(data.userInfo.mobile && data.access_token) {
					// 登录成功 
					this.loginSuccessCallBack(data)
				}else {
					// 未绑定手机号，进入绑定手机号页面
					this.$util.msg('授权成功，请绑定手机号')
					this.navTo('/pages/auth/bind-mobile?data=' + JSON.stringify(data))
				}
				
			},
			
			checkAgreement() {
				this.agreement = !this.agreement
			}
		}
	}
</script>

<style lang="scss">
	.app{
		padding-top: 200rpx;
	}
	/* 关闭按钮 */
	.back-btn{
		position:absolute;
		left: 20rpx;
		top: calc(var(--status-bar-height) + 20rpx);
		z-index: 90;
		padding: 20rpx;
		font-size: 39rpx;
		color: #606266;
	}
	
	.left-top-sign{
		font-size: 120rpx;
		color: #f8f8f8;
	}
	
	.welcome{
		position: relative;
		top: -90rpx;
		padding-left: 60rpx;
		font-size: 46rpx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}

	.input-content{
		padding: 0 60rpx;
	}
	
	.input-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-left: 30rpx;
		background: #f8f6fc;
		height: 120rpx;
		border-radius: 4px;
		margin-bottom: 50rpx;
		
		&:last-child{
			margin-bottom: 0;
		}
		.row{
			width: 100%;
		}
		.tit{
			height: 50rpx;
			line-height: 56rpx;
			font-size: 26rpx;
			color: #606266;
		}
		input{
			flex: 1;
			height: 60rpx;
			font-size: 30rpx;
			color: #303133;
			width: 100%;
		}	
	}
	
	button[type=primary] {
		background-color: $mxg-color-primary !important;
	}
	
	.button-hover[type=primary] {
		background-color: $mxg-text-color-blue !important;
	}
	
	/* 其他登录方式 */
	.other-wrapper{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 20rpx;
		margin-top: 80rpx;
		
		.weixin {
			border: 0;
		}
		.line{
			margin-bottom: 40rpx;
			.tit{
				margin: 0 32rpx;
				font-size: 24rpx;
				color: #606266;
			}
			&:before, &:after{
				content: '';
				width: 160rpx;
				height: 0;
				border-top: 1px solid #e0e0e0;
			}
		}
		.icon{
			width: 80rpx;
			height: 80rpx;
			margin: 0 50rpx;
		}
	}
	
	.agreement{
		position: absolute;
		left: 0;
		bottom: 10rpx;
		width: 750rpx;
		height: 90rpx;
		font-size: 24rpx;
		color: #999;
		.iconfont{
			font-size: 36rpx;
			color: #ccc;
			margin-right: 8rpx;
			&.active{
				color: $mxg-color-primary;
			}
		}
		.tit{
			color: #40a2ff;
		}
	}
</style>
