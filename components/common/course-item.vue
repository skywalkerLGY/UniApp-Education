<template>
	<view class="course-item" :class="{column: isColumn}"
		@click="navTo(`/pages/course/course-details?id=${item.id}`)"
	>
		<view class="item-left">
			<image class="course-img" :src="item.mainImage" lazy-load></image>
			<view class="course-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="item-right column">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<view class="nickname iconfont icon-laoshi2">{{item.nickName}}</view>
				<view class="count">
					<view v-if="item.isFree" class="money" >免费</view>
					<view v-else class="money iconfont icon-moneybag">
						{{ item.priceDiscount || item.priceOriginal }}
					</view>
					<view class="iconfont icon-video">{{item.studyTotal}} 人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isColumn: { // 是否纵向排列图片和文字（true纵向，false则横向）
				type: Boolean,
				default: false
			},
			
			item: {
				type: Object, 
				default: () => ({
					id: 1,
					mainImage: '/static/images/banner2.jpg',
					totalTime: '00:59:38',
					title: 'uni-app梦学谷在线教育项目实战！',
					nickName: '梦学谷',
					isFree: 0, // 是否收费0收费，1免费
					priceOriginal: 999, // 原价
					priceDiscount: 599, // 优惠价
					studyTotal: 399
				})
			}
		}
	}
</script>

<style lang="scss">
	.course-item {
		display: flex;
		// 纵向排列
		// flex-direction: column;
		width: 100%;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #f1f1f1;
		.item-left {
			position: relative;
			width: 290rpx;
			height: 160rpx;
			margin-right: 20rpx;
			.course-img {
				width: 290rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}
			.course-time {
				position: absolute;
				bottom: 5rpx;
				right: 5rpx;
				font-size: 22rpx;
				color: #fff;
				background: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				padding: 0 8rpx;
			}
		}
		
		.item-right {
			// display: flex;
			// flex-direction: column;
			justify-content: space-between;
			height: 160rpx;
			padding-top: 5rpx;
			padding-left: 5rpx;
			.title {
				max-width: 365rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
				// 显示两行，超出部分…显示
				overflow: hidden;
				text-overflow: ellipsis; //显示省略号
				-webkit-line-clamp: 2; //最多2行
				display: -webkit-box;
				-webkit-box-orient: vertical;
				white-space: normal;
			}
			.info {
				.nickname {
					font-size: 23rpx;
					color: #999;
				}
					
				.count {
					display: flex;
					align-items: center;
					.iconfont {
						font-size: 23rpx;
						color: #222222;
					}
					.money {
						color: $mxg-color-orange;
						width: 130rpx;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>
