import request from '@/common/js/request.js'

export default {
	
	// 新增反馈信息
	addFeedback(data) {
		return request({
			url: '/system/api/feedback',
			method: 'POST',
			data
		})
	},
	
	//发送短信验证码
	sendSmsCode(data) {
		return request({
			url: '/system/sms/code',
			method: 'POST',
			data
		})
	},
	
	// 更新用户信息
	updateUserInfo(data) {
		return request({
			url: '/system/user',
			method: 'PUT',
			data
		})
	},
	
	
}