<template>
	<view>
		<mxg-list :list="list" 
			@chooseImg="chooseImg"
			@editUsername="editUsername"
			@editMobile="editMobile"
			@editName="editName"
			@chooseSex="chooseSex"
		/>
		<button class="logout-btn" @click="logout" type="default">退出登录</button>
		
		<view v-if="isUpdate" class="update-box row">
			<input v-model="content" class="mxg-input" focus maxlength="20" type="text">
			<text @click="submitUpdate" class="update-btn">修改</text>
		</view>
		
	</view>
</template>

<script>
	import list from '@/config/user-list-bar.js'
	
	import api from '@/api/system.js'
	import commonApi from '@/api/common.js'
	
	import authApi from '@/api/auth.js'
	
	import {mapState} from 'vuex'
	
	const sex = ['男', '女']
	
	export default {
		data() {
			return {
				list: list(),
				content: '', // 修改框的内容
				isUpdate: false, //是否显示修改输入框
			}
		},
		
		onLoad() {
			this.$util.isLogin()
		},
		
		computed: {
			...mapState(['userInfo'])
		},
		
		// 监听左上角后退按钮
		onBackPress() {
			//返回值为 true 时，不执行默认的返回; 不返回或返回其它值，均会执行默认的返回行为。
			if(this.isUpdate) {
				this.isUpdate = false //隐藏输入框窗口
				return true //不会返回上一页
			}
		},
		
		methods: {
			// 更换头像
			chooseImg(obj) {
				/* console.log('更换头像', obj) */
				// 1. 选择本地图片或拍摄照片上传
				uni.chooseImage({
				    count: 1, //只能选择1张
				    sizeType: ['compressed'], //压缩图
				    success: async (res) => {
				        console.log(res.tempFilePaths)
						// 2. 调用接口将对应照片上传服务器（后台服务接口）
						const filePath = res.tempFilePaths[0]
						
						uni.showLoading({title: '更换头像中',mask: true })
						const {code, message, data} = await commonApi.uploadImg(filePath)
						console.log(code, data)
						if(code === 20000) {
							// 更新用户数据
							this.userInfo.imageUrl = data
							this.updateUserInfo()
						}else {
							uni.hideLoading()
							this.$util.msg("头像更新失败，请重试")
						}
				    }
				})
				
			},
			
			//更新用户信息
			async updateUserInfo() {
				await api.updateUserInfo(this.userInfo)
				//console.log('更新用户信息', this.userInfo)
				// 更新状态
				this.$store.commit('setToken', {userInfo: this.userInfo})
				// 重新渲染
				this.list = list()
				uni.hideLoading()
			},
			
			//编辑用户名
			editUsername(obj) {
				this.$util.msg('用户名不允许修改')
			},
			
			//选择性别
			chooseSex(obj) {
				uni.showActionSheet({
				    itemList: sex, 
				    success: (res) => {
						// 与上一次性别一样，不作更新
						if(res.tabIndex === this.userInfo.sex) return
						// 0男，1女
				       this.userInfo.sex = res.tapIndex
					   // 更新数据
					   this.updateUserInfo()
				    }
				});
			},
			
			//手机号
			editMobile(obj) {
				const data = JSON.stringify({userInfo: this.userInfo})
				uni.navigateTo({
					url: '/pages/auth/bind-mobile?title=修改手机号&data='+data,
					animationType: 'slide-in-bottom'
				})
			},
			
			// 昵称
			editName(obj) {
				//显示修改窗口
				this.isUpdate = true
				this.content = obj.text
			},
			// 提交修改信息
			submitUpdate() {
				const content = this.content.trim()
				if(!content) {
					this.$util.msg('不能为空，请重新填写')
					return
				}
				
				if(this.userInfo.nickName === content) {
					this.$util.msg('与上次内容不能相同')
					return
				}
				
				uni.showLoading({mask: true})
				this.userInfo.nickName = content
				//调用接口更新数据，并刷新列表
				this.updateUserInfo()
				//隐藏窗口
				this.isUpdate = false
			},
			
			//退出
			logout() {
				uni.showModal({
					title: '确定退出登录?',
					content: '退出后不会删除任何历史数据',
					success: async (res) => {
						if(res.confirm) {
							const {code, message} = await authApi.logout(this.$store.state.accessToken)
							if(code === 20000) {
								//退出成功
								this.$util.msg('成功退出登录')
								this.$store.commit('logout')
								setTimeout(() => {
									this.navBack()
								}, 300)
							}else {
								this.$util.msg(message)
							}
						}
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
	
	.logout-btn {
		margin-top: 39rpx;
		background-color: #FFFFFF !important; 
		color: $mxg-text-color-black;
		border-radius: 0;
		&::after {
			border: 0;
		}
	}
	.button-hover {
		background-color: $mxg-color-grey !important;
	}
	
	.update-box {
		z-index: 90;
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
	}
	
	.mxg-input {
		z-index: 100;
		width: 650rpx;
		border: $mxg-underline;
		height: 90rpx;
		font-size: 35rpx;
		padding: 0 20rpx;
		margin: 0 10rpx;
		background-color: #FFFFFF;
	}
	.update-btn {
		z-index: 100;
		width: 100rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		color: $mxg-text-color-blue;
	}
</style>
