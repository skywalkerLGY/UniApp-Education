<template>
	<view class="container">
		<tab-bar ref="tabBar" :tabs="tabs" v-model="tabIndex"></tab-bar>
		<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
			<swiper-item v-for="(tab,i) in tabs" :key="i">
				<mescroll-item ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs"></mescroll-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import tabBar from '@/components/common/tab-bar.vue'
	import MescrollItem from "./components/article-swiper-item.vue"
	
	import courseApi from '@/api/course.js'
	
	export default {
		components: {tabBar, MescrollItem},
		data() {
			return {
				tabs: [{name: '全部'}, {name: 'Java'}, {name: '前端'}, {name: '测试'}, {name: '云计算'}, {name: '人工智能'},  ],
				tabIndex: 0, // 当前tab的下标
				height: '400px', // 需要固定的swiper高度
			}
		},
		
		onLoad() {
			// 需要固定swiper的高度
			this.height = uni.getSystemInfoSync().windowHeight + 'px'
			
			// 查询分类
			this.loadData()
		},
		
		onNavigationBarSearchInputClicked() {
			// 点击导航搜索框进入搜索页
			this.navTo('/pages/search/search')
		},
		
		methods: {
			// 轮播菜单
			swiperChange(e){
				this.tabIndex = e.detail.current
				// 左右切换时，重新计算移动的宽度 scroll-view 头部标签选项栏
				this.$refs.tabBar.changeTab(this.tabIndex)
			},
			
			async loadData() {
				uni.showLoading({title: '加载中'})
				const {data} = await courseApi.getCategoryList()
				data.unshift({id: null, name: '推荐'})
				this.tabs = data
				uni.hideLoading()
			},
		}
	}
</script>

<style>
	page, .container {
		height: 100%;
		overflow: hidden;
	}
</style>
