import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 声明状态
	state: {
		userInfo: {}, //用户信息
		accessToken: '' // 访问令牌
	},
	
	// store的计算属性
	getters: {
		hasLogin(state) {
			// 取两次反，会将原数据类型转为成布尔类型，有值就是true
			return !!state.accessToken
		}
	},
	
	mutations: {
		
		// 只赋值状态值，不保存本地 obj: {userInfo: xxx, accessToken: xxx}
		setState(state, obj) {
			for(let key in obj) {
				// 获取每个key作为状态名，value作为状态值
				state[key] = obj[key]
			}
		},
		
		// 更新用户登录状态
		setToken(state, data) {
			const {access_token, userInfo} = data
			// 赋值状态值和保存到本地
			if(access_token) {
				state.accessToken = access_token
				uni.setStorageSync('mxgEducationToken', access_token)
			}
			
			if(userInfo) {
				state.userInfo = userInfo
				uni.setStorageSync('userInfo', userInfo)
			}
		},
		
		// 退出登录，触发
		logout(state) {
			// 状态清空
			state.userInfo = {}
			state.accessToken = ''
			// 移除本地数据
			uni.removeStorageSync('userInfo')
			uni.removeStorageSync('mxgEducationToken')
		}
		
	}
	
})

export default store
