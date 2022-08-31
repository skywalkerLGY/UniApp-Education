<template>
	<list-box :name="name" :word="word" :params="params">
		<scroll-view class="list-scroll noScorll" scroll-x >
			<view class="list-scroll-view" v-for="(item, index) in courseData" :key="index">
				<course-item :isColumn="true" :item="item"></course-item>
			</view>
		</scroll-view>
	</list-box>
</template>

<script>
	import listBox from './list-box.vue'
	import courseItem from '@/components/common/course-item.vue'
	import courseData from '@/mock/courseData.js'
	export default {
		components: {listBox, courseItem},
		
		props: {
			name: {
				type: String,
				default: '近期上新'
			},
			word: { // HOT
				type: String,
				default: null
			},
			courseData: {
				type: Array,
				default: () => courseData
			},
			
			params: Object, // 点击`全部`按钮要向搜索页传递的查询条件
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		// 不换行，一行显示
		white-space: nowrap;
		height: 380rpx;
		.list-scroll-view {
			display: inline-block;
			width: 310rpx;
			padding: 0 10rpx;
			margin-right: 20rpx;
			border-radius: 20rpx;
			box-shadow: 1px 1px 3px rgba(0,0,0,0.1);
			background-color: #fff;
		}
	}
</style>
