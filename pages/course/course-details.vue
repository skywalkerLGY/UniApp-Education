<template>
	<view>
		<!-- 主图和基本信息 -->
		<course-header :course="course"></course-header>
		<view class="course-details" :style="'height:' + pageHeight + 'px'">
			<tab-bar :tabs="tabs" v-model="tabIndex"></tab-bar>
			<swiper class="swiper-box" :duration="300" :current="tabIndex" circular @change="changeTab">
				<swiper-item v-for="(item, index) in tabs" :key="index">
					<scroll-view class="scroll-box" :scroll-y="enableScroll" 
						@scrolltoupper="scrolltoupper" :upper-threshold="0">
						<view class="details-info">
							<course-info v-if="index === 0" :detailUrls="course.detailUrls" ></course-info>
							<course-dir v-if="index === 1" :chapterList="chapterList" :isBuy="isBuy" @playVideo="playVideo" :activeObj="activeObj"></course-dir>
							<course-comment v-if="index === 2" :commentList="commentList"></course-comment>
							<course-group v-if="index === 3" :groupList="groupList"></course-group>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 底部按钮：立即购买 -->
		<bottom-btn :btnText="isBuy || course.isFree ? '立即观看': '立即购买'" @clickBottom="clickBottom"></bottom-btn>
		
		<!-- #ifdef APP-PLUS -->
		<!-- 分享组件 -->
		<mxg-share ref="share" :shareData="course"></mxg-share>
		<!-- #endif -->
		
		<!-- 试看窗口 -->
		<view v-if="videoUrl" class="video-box mask" @click="closePlay" @touchmove.stop.prevent="()=>{}">
			<view class="name">
				<text>免费试看</text>
				<text class="iconfont icon-close"></text>
			</view>
			<!-- h5端播放是有问题 -->
			<video id="playVideo" class="video" :src="videoUrl"></video>
		</view>
		
	</view>
</template>

<script>
	import courseHeader from './components/course-header.vue'
	import tabBar from '@/components/common/tab-bar.vue'
	import tabs from '@/config/course-details-tabs.js'
	
	import courseInfo from  './components/course-info.vue'
	import courseDir from './components/course-dir.vue'
	import courseComment from './components/course-comment.vue'
	import courseGroup from './components/course-group.vue'
	import bottomBtn from './components/bottom-btn.vue'
	
	import api from '@/api/course.js'
	
	export default {
		components: {
			courseHeader, 
			tabBar,
			courseInfo,
			courseDir,
			courseComment,
			courseGroup,
			bottomBtn
		},
		
		data() {
			return {
				tabs, // tabs:tabs 标签选项卡数据
				tabIndex: 0, //当前所在选项下标
				pageHeight: 3000, // 手机的视口高度
				statusNavHeight: 0, // 状态栏+导航栏高度
				enableScroll: false, //详情区域是否允许纵向滚动，false不允许
				detailTop: 0, //详情区域距离顶部距离
				
				id: null, //课程id
				course: {}, // 课程基本信息
				chapterList: [], //章节信息
				commentList: [], //评论信息
				groupList: [], //套餐信息
				isBuy: false, // 是否购买，默认未购买
				
				videoUrl: null, // 播放视频地址
				videoContext: null, // 播放器实例
				activeObj: {}, // 当前点击的第几节下标
			}
		},
		
		onLoad(option) {
			// console.log(option.id)
			this.getPageHeight()
			
			//禁用点击状态栏回到顶部
			// #ifdef APP-PLUS
			this.noStatusScrollTop()
			// #endif
			
			// 获取课程id，查询课程数据
			// this.id = option.id
			this.loadData()
		},
		
		// 第1次页面渲染完后触发
		onReady() {
			// 获取详情区域距离顶部高度
			let view = uni.createSelectorQuery().in(this).select(".course-details");
			view.fields({
			  rect: true
			}, data => {
			  // console.log("节点的顶部高度为" + data.top);
			  this.detailTop = data.top
			}).exec();
			
			// 获取当前播放实例
			this.videoContext = uni.createVideoContext('playVideo', this)
		},
		
		// 监听页面滚动到底部
		onReachBottom() {
			console.log('监听页面滚动到底部')
			//页面到达底部，开启详情区域滚动
			this.enableScroll = true
		},
		
		// 监听页面滚动
		onPageScroll(e) {
			// console.log('监听页面滚动', e, this.detailTop)
			// console.log(this.detailTop - this.statusNavHeight)
			if(this.detailTop - this.statusNavHeight <= e.scrollTop) {
				// 页面到达底部则将详情区域滚动条开启
				this.enableScroll = true
				return
			}
			
			
			// 当前滚动条距离顶部距离 小于 详情区域到达顶部高度
			if(this.enableScroll && e.scrollTop < this.detailTop) {
				// 禁用详情滚动
				this.enableScroll = false
			}
			
		},
		
		// 监听app端右上角分享按钮
		// #ifdef APP-PLUS
		onNavigationBarButtonTap(e) {
			
			console.log('e', e)
			if(e.type === 'share') {
				// 自定义分享组件
				this.$refs.share.showHandler()
				
				// 下面使用的系统自带分享组件
			// 	// app端分享
			// 	uni.downloadFile({
			// 		url: this.course.mainImage,
			// 		success: (res) => {
			// 			// console.log('下载完成', res.tempFilePath)
			// 			// Android 在分享时可能微信只会发送图片
			// 			uni.shareWithSystem({
			// 			  summary: this.course.title,
			// 			  href: 'https://www.mengxuegu.com',
			// 			  type: 'image',
			// 			  imageUrl: res.tempFilePath,
			// 			  success(){
			// 				  // 分享完成，请注意此时不一定是成功分享
			// 				  uni.showToast({
			// 				  	title: '分享成功'
			// 				  })
			// 			  }
			// 			})
			// 		}
			// 	})
			}
		},
		// #endif
		
		// 小程序端分享（onLoad)
		onShareAppMessage(res) {
		    return {
		      title: this.course.title,
		      path: this.$util.routePath()
		    }
		},
		
		
		methods: {
			// 左右切换
			changeTab(e) {
				this.tabIndex = e.detail.current
				
				// 页面回到底部
				uni.pageScrollTo({
					scrollTop: this.detailTop,
					duration: 300
				})
			},
			
			// 获取当前页面视口高度
			getPageHeight() {
				const res = uni.getSystemInfoSync()
				// 平台
				const system = res.platform
				// 状态栏高度
				const statusBarHeight = res.statusBarHeight
				if(system === 'android') {
					// 状态导航高度
					this.statusNavHeight = statusBarHeight + 48
				}else if(system === 'ios'){
					this.statusNavHeight = statusBarHeight + 44
				}
				// console.log(res.screenHeight , res.windowHeight)
				this.pageHeight = res.screenHeight - this.statusNavHeight
			},
			
			// scrollView组件滚动到顶部
			scrolltoupper() {
				// 1. 让页面滚动条回到顶部
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 150
				})
				// 2. 禁用详情scrollView滚动
				this.enableScroll = false
			},
			
			// 禁用点击状态栏回到顶部
			noStatusScrollTop() {
				// 获取当前页面实例
				const webView = this.$scope.$getAppWebview()
				webView.setStyle({'scrollsToTop': false})
			},
			
			// 初始化课程数据
			loadData() {
				// 0. 判断是否已购买
				this.getCourseIsBuy()
				// 1. 查询课程基本信息
				this.getCourseById()
				// 2. 查询章节列表
				this.getChapterSectionList()
				// 3. 查询评论列表
				this.getCourseCommentList()
				// 4. 查询组合套餐列表
				this.getCourseGroupList()
			},
			
			async getCourseIsBuy() {
				//未登录不用跳转登录页
				const isLogin = this.$util.isLogin({nav: false}) 
				if(isLogin) {
					// 如果已登录，则判断是否已购买
					const {data} = await api.getCourseIsBuy(this.id)
					this.isBuy = data.isBuy
					// console.log('isBuy', this.isBuy)
				}
			},
			
			// 1. 查询课程基本信息
			async getCourseById() {
				const {data} = await api.getCourseById(this.id)
				// console.log('查询课程基本信息', data)
				this.course = data
				// 将当前课程标题动态传递给导航
				uni.setNavigationBarTitle({
				    title: data.title
				});
			},
			
			// 2. 查询章节列表
			async getChapterSectionList() {
				const {data} = await api.getChapterSectionList(this.id)
				// console.log('查询章节列表', data)
				this.chapterList = data
			},
			
			// 3. 查询评论列表
			async getCourseCommentList() {
				const {data} = await api.getCourseCommentList(this.id)
				// console.log('查询评论列表', data)
				this.commentList = data
			},
			
			// 4. 查询组合套餐列表
			async getCourseGroupList() {
				const {data} = await api.getCourseGroupList(this.id)
				// console.log('查询组合套餐列表', data)
				this.groupList = data
			},
			
			// 点击底部按钮触发
			clickBottom() {
				if(this.isBuy || this.course.isFree) {
					// 已购买过或免费，跳转视频播放页面
					this.navTo(`/pages/course/course-play?id=${this.id}`, {login: true})
				}else {
					// 未购买过，跳转确认购买页
					this.navTo(`/pages/order/confirm-buy?course=` + encodeURIComponent(JSON.stringify(this.course)), {login: true} )
				}
			},
			
			// 关闭播放窗口
			closePlay() {
				this.videoContext.stop()
				this.videoUrl = null
			},
			
			// 试看视频
			playVideo(obj) {
				// console.log( obj.section.videoUrl )
				if(this.isBuy) {
					// 已经购买，则直接跳转到视频播放列表页面
					this.navTo(`/pages/course/course-play?id=${this.id}`, {login: true})
					return
				}
				//解决小程序高亮显示问题
				this.activeObj = obj.activeObj
				// 弹出播放窗口
				this.videoUrl = obj.section.videoUrl
				this.$nextTick(() => {
					// 播放
					this.videoContext.play()
				})
			},
			
		}	
	}
</script>

<style lang="scss">
	.course-details {
		overflow: hidden;
		.swiper-box, .scroll-box {
			height: 100%;
		}
		.details-info {
			// 被隐藏的80rpx（标签选项卡高度）
			padding-bottom: 180rpx;
		}
	}

	.video-box {
		z-index: 100;
		text-align: center;
		.name{
			color: #FFFFFF;
			position: relative;
			top: 380rpx;
			/* #ifdef MP */
			top: 300rpx;
			/* #endif */
			font-size: 38rpx;
			font-weight: bold;
		}
		.icon-close{
			margin-left: 20rpx;
		}
		.video {
			width: 750rpx;
			height: 420rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		
	}
</style>
