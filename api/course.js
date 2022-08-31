import request from '@/common/js/request.js'

export default {
	
	// 查询指定位置的广告信息
	getAdvertList(position = 1) {
		return request({
			url: `/article/api/advert/show/${position}`
		})
	},
	
	// 查询分类与标签信息
	getCategoryList() {
		return request({
			url: '/article/api/category/label/list'
		})
	},
	
	// 条件分页查询课程列表 query条件对象{isFree: 0}，current当前页码，size每页显示多少条
	getList(query, current = 1, size = 10) {
		return request({
			url: '/course/api/course/search',
			method: 'POST',
			data: {...query, current, size} // {isFree: 0, current: current, size: size}
		})
	},
	
	// 通过课程ID查询课程基本信息
	getCourseById(id) {
		return request({
			url: `/course/api/course/${id}`,
			method: 'GET'
		})
	},
	
	// 通过课程ID查询课程章节列表数据
	getChapterSectionList(id) {
		return request({
			url: `/course/api/chapter/section/list/${id}`,
			method: 'GET'
		})
	},
	
	// 通过课程ID查询课程评论列表数据
	getCourseCommentList(id) {
		return request({
			url: `/course/api/comment/list/${id}`,
			method: 'GET'
		})
	},
	
	// 通过课程ID查询课程套餐搭配列表数据
	getCourseGroupList(id) {
		return request({
			url: `/course/api/group/list/${id}`,
			method: 'GET'
		})
	},
	
	// 查询课程是否已购买
	getCourseIsBuy(courseId){
		return request({
			url: `/course/course/is-buy/${courseId}`,
			method: 'GET'
		})
	},
	
	// 通过课程id查询已购买的视频列表
	getCourseBuyList (id) {
		return request({
			url: `/course/course/buy/list/${id}`,
			method: 'GET'
		})
	},
	
	// 新增评论
	addCourseComment(data) {
		return request({
			url: '/course/comment',
			method: 'POST',
			data //data: data
		})
	},
	
	// 查询我的学习列表
	getCourseStudyList() {
		return request({
			url: '/course/course/study/list',
			method: 'GET'
		})
	}
	
}