import { msg } from './util.js'

// 基础URL
// #ifndef H5
// 非h5端，
let BASE_URL = 'https://mock.mengxuegu.com/mock/625e2bc566abf914b1f1c131/mxg-education-app'
// #endif

// #ifdef H5
// h5, 进行代理转发
let BASE_URL = 'https://mock.mengxuegu.com/mock/625e2bc566abf914b1f1c131/mxg-education-app' // 'http://39.108.187.100:6001'
// #endif

// 1.导入
import store from '@/store'

const request = (options = {}) => {
	
	// 判断是否有访问令牌
	const accessToken = store.state.accessToken
	if(accessToken) {
		// oauth2协议
		options.header = {'Authorization': `Bearer ${accessToken}` }
	}
	
	// 短信验证码也要放行
	const whileList = ['/system/sms/code','/auth/login', '/auth/login/provider', '/auth/user/mobile']
	
	// resolve 正常响应，reject异常响应
	return new Promise((resolve, reject) => {
		/* if(option.isLogin && !accessToken) {
			//跳转到登录页
			return uni.navigateTo({
				url: '/pages/auth/login'
			})
		} */
		// 判断请求接口url包含/api/ 说明不需要登录，
		// 如果没有 包含，说明需要登录才可以访问（accessToken)
		if( whileList.indexOf(options.url)===-1 && 
			options.url.indexOf('/api/')<0 && !accessToken) {
			//跳转到登录页
			return uni.navigateTo({
				url: '/pages/auth/login'
			})
		}
		
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			timeout: 8000, // 8秒超时时间，单位ms
			header: options.header || {},
			success: (res) => {
				// console.log('res', res.data)
				resolve(res.data)
			},
			fail: (err) => {
				// console.log('err', err)
				msg('请求接口失败')
				reject(err)
			}
		})
	}) 
}

// 导出
export default request