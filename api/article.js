import request from '@/common/js/request.js'

export default {
	
	// 条件分页查询文章列表数据
	getList(query, current=1, size=20 ) {
		return request({
			url: '/article/api/article/search',
			method: 'POST',
			data: {...query, current, size}
		})
	},
	
	// 通过文章id查询文章详情
	getArticleById(articleId){
		return request({
			url: `/article/api/article/${articleId}`,
			method: 'GET'
		})
	},
	
	// 通过文章id查询文章评论列表
	getArticleCommentById(articleId){
		return request({
			url: `/article/api/comment/list/${articleId}`,
			method: 'GET'
		})
	},
	
	// 新增文章评论
	addArticleComment(data){
		return request({
			url: `/article/comment`,
			method: 'POST',
			data,
			/* isLogin: true */
		})
	},
	
}