<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">{{name}}</text>
				<text class="word" v-if="word">{{word}}</text>
			</view>
			<view class="all" @click="toSearchPage" >
				<text >全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<!-- 插槽 -->
		<slot></slot>
	</view>
</template>

<script>
	import courseData from '@/mock/courseData.js'
	export default {
		props: {
			name: {
				type: String,
				default: '热门推荐'
			},
			word: { // HOT
				type: String,
				default: null
			},
			
			params: Object, // 点击`全部`按钮要向搜索页传递的查询条件
		},
		
		methods: {
			// 跳转到搜索页查询对应数据
			toSearchPage() {
				console.log('跳转搜索页', this.params)
				this.navTo(`/pages/search/search?params=${ JSON.stringify(this.params) }`)
			}
		}
	}
</script>

<style lang="scss">
	.list-box {
		margin-top: 60rpx;
		.name {
			font-size: 38rpx;
			font-weight: 500;
			color: #303133;
			margin-right: 10rpx;
		}
		.word {
			font-size: 20rpx;
			background-image: linear-gradient(to right, $mxg-color-orange, $mxg-text-color-red);
			color: #fff;
			padding: 0 10rpx;
			border-radius: 30rpx 30rpx 30rpx 0;
		}
		.all {
			font-weight: normal;
			color: $mxg-text-color-grey;
			font-size: 28rpx;
			.iconfont {
				font-size: 25rpx;
			}
		}
	}
</style>
