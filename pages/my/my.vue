<template>
	<view>
		<!-- #ifndef MP -->
		<!-- 头部空出的距离 -->
		<view class="status_bar"></view>
		<!-- #endif -->
		<!-- 头部用户信息 -->
		<view class="my-header">
			<view @click="hasLogin ? navTo('/pages/my/user') :  navTo('/pages/auth/login')"
				class="header-content space-between center">
				<view class="left center">
					<image class="header-image" :src="userInfo.imageUrl || '/static/logo.png'" ></image>
					<view v-if="hasLogin" class="header-info column">
						<text class="nickname">{{userInfo.nickName}}</text>
						<text class="username">用户名：{{userInfo.username}}</text>
					</view>
					<view v-else class="header-info">
						<text class="nickname">欢迎回来，请登录</text>
					</view>
				</view>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		
		<!-- 功能列表 -->
		<mxg-list :list="list" ></mxg-list>
	</view>
</template>

<script>
	
	import list from '@/config/my-list-bar.js'
	
	import {mapState, mapGetters} from 'vuex'
	
	export default {
		data() {
			return {
				list: list() // 调用方法 ，不要少了小括号 
			}
		},
		
		computed: {
			// 解构状态作为计算属性
			...mapState(['userInfo']),
			...mapGetters(['hasLogin'])
			/* userInfo() {
				return this.$store.state.userInfo
			} */
		},
		
		methods: {
			
		}
	}
</script>

<style lang="scss">
	
	.status_bar {
		height: calc(var(--status-bar-height) + 48px);
		width: 100%;
		background-color: $mxg-color-primary;
	}
	
	.my-header {
		background-color: $mxg-color-primary;
		.header-content {
			padding: 50rpx 39rpx;
			background-color: #FFFFFF;
			border-radius: 30rpx 30rpx 0 0;
		}
		
		.left {
			.header-image {
				width: 150rpx;
				height: 150rpx;
				border-radius: 80rpx;
			}
			.header-info{
				margin-left: 30rpx;
				.nickname {
					font-size: 39rpx;
					font-weight: bold;
				}
				.username {
					font-size: 33rpx;
					color: $mxg-text-color-grey;
				}
			}
		}
		
		.icon-right {
			font-size: 35rpx;
			color: $mxg-text-color-grey;
		}
	}
</style>
