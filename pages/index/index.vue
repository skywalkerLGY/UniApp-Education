<template>
	<view class="index-box">
		<!-- #ifdef MP -->
		<!-- 搜索框在小程序中显示 , .native 不要少了-->
		<search-input @click.native="navTo('/pages/search/search')"></search-input>
		<!-- #endif -->
		
		<!-- 轮播图 -->
		<mxg-banner :bannerList="bannerList"></mxg-banner>
		
		<!--  
			@init="mescrollInit" @down="downCallback"
			 @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致)
		 :down="downOption" :up="upOption" 绝大部分情况无需配置 
		 :top="顶部偏移量" :bottom="底部偏移量" :topbar="状态栏" :safearea="安全区" (常用)
		 字节跳动小程序 ref="mescrollRef" 必须配置 
		 此处支持写入原生组件 -->
		 
		<mescroll-body ref="mescrollRef" 
					@init="mescrollInit" @down="downCallback" @up="upCallback" 
					:down="downOption" :up="upOption">
			
			<!-- 分类区域  -->
			<category-box :categoryList="categoryList"></category-box>
			
			<view class="list-container">
				<!-- 热门推荐 -->
				<swiper-course name="热门推荐" word="HOT" :courseData="hotCourseList" :params="{sort: 'hot'}"></swiper-course>
				<scroll-course name="近期上新" word="NEW" :courseData="newCourseList" :params="{sort: 'new'}"></scroll-course>
				<swiper-course name="免费精选" word="FREE" :courseData="freeCourseList" :params="{isFree: 1}"></swiper-course>
				<list-course name="付费精品" word="NICE" :courseData="payCourseList" :params="{isFree: 0}"></list-course>
			</view>
		
		</mescroll-body>
		
	</view>
</template>

<script>
	import searchInput from '@/components/common/search-input.vue'
	import mxgBanner from '@/components/common/mxg-banner.vue'
	import categoryBox from './components/category-box.vue'
	
	import swiperCourse from './components/swiper-course.vue'
	import scrollCourse from './components/scroll-course.vue'
	import listCourse from './components/list-course.vue'
	
	import api from '@/api/course.js'
	
	// 引入mescroll-mixins.js
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js"
			
	export default {
		mixins: [MescrollMixin], // 使用mixin
		
		components: { searchInput, mxgBanner, categoryBox, swiperCourse, scrollCourse, listCourse },
		
		async onLoad() {
			// #ifdef APP-PLUS
			this.placeholderData()
			// #endif
			
			// // 查询数据
			// this.loadBannerData()
			// this.loadCateData()
			// // 查询列表数据
			// this.loadHotCourseData()
			// this.loadFreeCourseData()
			// this.loadNewCourseData()
			// this.loadPayCourseData()
		},
		
		data() {
			return {
				bannerList: [],
				categoryList: [] ,
				hotCourseList: [], //热门列表数据
				freeCourseList: [],
				newCourseList: [],
				payCourseList: [],
				downOption: {
					offset: 50 ,// 下拉大于50px,松手即可触发下拉刷新的回调
					// textLoading: '亲亲，稍等加载中'
				},
				upOption: {
					// textLoading: '亲亲，在查询下页数据中',
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10, // 每页数据的数量
					},
					textNoMore: '-- 我是有底线的 --', 
				}
			}
		},
		
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			// console.log('e', e)
			// 点击第1个按钮
			if(e.index === 0) {
				// 打开扫一扫功能,允许从相机和相册扫码
				uni.scanCode({
				    success: (res) => { // 如果要在方法中使用 this 则使用箭头函数
				  //       console.log('条码类型：' + res.scanType);
				  //       console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/public/web-view?url=${res.result}`
						})
				    },
					fail: ()=> {
						uni.showModal({
							title: '扫码失败',
							icon: ''
						})
					}
				});
			}
		},
		
		// 监听搜索框点击事件
		onNavigationBarSearchInputClicked() {
			// 跳转到搜索页
			// uni.navigateTo({
			// 	url: '/pages/search/search'
			// })
			this.navTo('/pages/search/search')
		},
		
		methods: {
			
			// 搜索框提示内容
		   placeholderData() {
				// 获取当前页面实例 
				const webView = this.$scope.$getAppWebview(); 
				// 搜索框提示内容定时从这数组中获取
				let arr = ['APP · 微信小程序', 'Java · SpringBoot', 'SpringCloud · SpringSecurity', 'Vue · React']
				// 一加载页面就调用第1次
				let i = 0;
				webView.setStyle({"titleNView": {"searchInput": {"placeholder": arr[i]}}})
				
				const len = arr.length - 1
				setInterval( ()=> {
					// 第2次，就是下标1，每次+1，如果到达最后一个元素，则重新从0开始
					i = i < len ? ++i : 0
					webView.setStyle({"titleNView": {"searchInput": {"placeholder": arr[i]}}})
				}, 3000)
		   },
		   
		   // 查询轮播图数据
		   async loadBannerData() {
			  const { data } = await api.getAdvertList(1)
			  this.bannerList = data
			  // console.log('data', data)
		   },
		   
		   // 查询分类数据
		   async loadCateData() {
			   const {data} = await api.getCategoryList()
			   this.categoryList = data
			   // console.log('cate', this.categoryList)
		   },
		   
		   // 查询热门推荐数据
		   async loadHotCourseData() {
			  const {data} = await api.getList({sort: 'hot'}, 1, 8)
			  this.hotCourseList = data.records
			  // console.log('hotCourseList', this.hotCourseList)
		   },
		   // 免费列表
		   async loadFreeCourseData() {
			   // 0收费，1免费
			   const {data} = await api.getList({isFree: 1}, 1, 8)
			   this.freeCourseList = data.records
		   },
		   
		   // 近期上新
		   async loadNewCourseData() {
			   const {data} = await api.getList({sort: 'new'}, 1, 10)
			   this.newCourseList = data.records
		   },
		   
		   // 付费列表
		   async loadPayCourseData() {
			   // 0收费，1免费
			   const {data} = await api.getList({isFree: 0})
			   this.payCourseList = data.records
		   },
		   
		   
			/*下拉刷新的回调, 有3种处理方式:*/
			// downCallback(){
			//    console.log('下拉刷新')
			// },

			/*上拉加载的回调*/
			async upCallback(page) {
				let pageNum = page.num; // 当前页码, 默认从1开始
				let pageSize = page.size; // 每显每页显示多少条数据, 默认每页10条
				// console.log('上拉加载的回调', page.num)
				// 如果是第1页，则是下拉刷新
				if(page.num === 1) {
					// 查询数据
					this.loadBannerData()
					this.loadCateData()
					// 查询列表数据
					this.loadHotCourseData()
					this.loadFreeCourseData()
					this.loadNewCourseData()
				}
				
				// 分页查询
				// this.loadPayCourseData()
				// 付费列表 （0收费，1免费）
				const {data} = await api.getList({isFree: 0}, page.num, page.size)
				const curList = data.records
				// console.log('data', data)
				
				// 判断是否第1页，是则将原付费数据清空
				if(page.num === 1) this.payCourseList = []  
				// 追加新数据
				this.payCourseList = this.payCourseList.concat(curList)
				
				// 请求成功，隐藏加载状态
				this.mescroll.endBySize(curList.length, data.total)
			}
		   
		}
	}
</script>

<style>
	
	.list-container {
		padding: 0 30rpx;
	}
</style>