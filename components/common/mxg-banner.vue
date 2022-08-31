<template>
	<view class="banner-box">
		<!-- 背景色 -->
		<view class="banner-bg" :style="{'background-image': `linear-gradient(${bannerBackgroud || '#345DC2'} 50%, #FFF)`}"></view>
		<!-- 轮播图 
		indicator-dots	指示点
		autoplay 是否自动切换 
		interval 自动切换时间间隔
		-->
		<swiper class="banner-swipper" indicator-dots	indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="#FFFFFF"
			autoplay :interval="4000" :current="current" @change="swiperChange"
		>
			<swiper-item class="swiper-item" v-for="(item, index) in bannerList" :key="index">
				<image @click="navTo(item.advertUrl)" :src="item.imageUrl"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		
		props: {
			bannerList: { // 轮播图数组
				type: Array, 
				default: () => [
					{
						id: 1,
						imageUrl: '/static/images/banner1.jpg',
						background: '#45328C',
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 2,
						imageUrl: '/static/images/banner2.jpg',
						background: '#006C00',
						advertUrl: '/pages/course/course-details'
					},
					{
						id: 3,
						imageUrl: '/static/images/banner3.jpg',
						background: '#0072B7',
						advertUrl: '/pages/course/course-details'
					}
				]
			}
		},
		
		data() {
			return {
				current: 0,// 当前所在滑块的 index
				bannerBackgroud: '' // 背景色
			}
		}, 
		methods: {
			// 每次切换滑动时触发
			swiperChange(e) {
				// console.log('e', e.detail.current)
				this.current = e.detail.current
				// 切换轮播图背景色
				this.bannerBackgroud = this.bannerList[this.current].background
				// console.log('bannerBackgroud', this.bannerBackgroud)
			}
		},
		
		watch: {
			bannerList: {
				handler(newVal) {
					if(newVal && newVal.length > 0 ) {
						// 获取第1个元素中的背景色，然后设置 
						this.current = 0
						// 设置第1张图背景色
						this.bannerBackgroud = 
							this.bannerList[0] && this.bannerList[0].background
					}
				},
				immediate: true // 第1次加载就执行此监听器
			}
		}
	}
</script>

<style lang="scss">
	.banner-box {
		padding-top: 120rpx;
		/* #ifdef APP-PLUS*/
		padding-top: calc(var(--status-bar-height) + 120rpx);
		/* #endif*/
		.banner-bg {
			position: absolute;
			top: 0;
			width: 100%;
			height: 470rpx;
			/* #ifdef APP-PLUS*/
			height: calc(var(--status-bar-height) + 470rpx);
			/* #endif*/
			// background-image: linear-gradient(red 50%, #FFF);
			// 过渡效果
			transform: .5s;
		}
		.banner-swipper{
			width: 100%;
			height: 350rpx;
			.swiper-item {
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}
		}
	}
</style>
