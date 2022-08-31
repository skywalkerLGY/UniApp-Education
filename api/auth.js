import request from '@/common/js/request.js'

export default {

	// 手机号登录
	login(data) {
		return request({
			url: '/auth/login',
			method: 'POST',
			data
		})
	},
	
	// 第三方授权后，进行应用内登录
	loginByProvider(data) {
		return request({
			url: '/auth/login/provider',
			method: 'POST',
			data
		})
	},
	
	//更新绑定用户手机号
	updateUserMobile(data) {
		return request({
			url: '/auth/user/mobile',
			method: 'PUT',
			data
		})
	},
	
	//退出系统
	logout(accessToken) {
		return request({
			url: '/auth/logout', // /auth/logout?accessToken=${accessToken}
			method: 'GET',
			data: { accessToken }
		})
	}

}