<template>
	<list-box :name="name" :word="word" :params="params">
		<course-item v-for="(item, index) in courseData" :key="index" :item="item"></course-item>
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
				default: '热门推荐'
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

<style>
</style>
