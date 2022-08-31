<template>
	<view class="category-box">
		<!-- slice(开始下标，结束下标) 返回指定范围的元素，注意：包头不包尾 -->
		<view v-for="(item, index) in categoryList.slice(0, 7)" :key="index"
			@click="toPageSearch(categoryList[index].id, categoryList[index].name, index)"
		>
			{{item.name}}
		</view>
		<view @click="toPageSearch(null, '全部分类', -1)" >全部分类</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			categoryList: { // 分类数据
				type: Array,
				default: () => [
					{
						id: 1,
						name: 'java'
					},
					{
						id: 2,
						name: '运维'
					},
					{
						id: 3,
						name: 'Python'
					},
					{
						id: 4,
						name: 'UI设计'
					},
					{
						id: 5,
						name: '大数据'
					},
					{
						id: 6,
						name: '前端'
					},
					{
						id: 7,
						name: 'PHP'
					},
					{
						id: 8,
						name: 'VUE'
					},
				]
			}
		},
		
		methods: {
			// 跳转到搜索页
			toPageSearch(id, name, index) {
				console.log('id', id)
				const params = {categoryId: id, name: name, activeIndex: index}
				this.navTo(`/pages/search/search?params=${ JSON.stringify(params) }`)
			}
		}
	}
	
</script>

<style lang="scss">
	.category-box {
		display: flex;
		justify-content: space-around;
		// 不行显示不下，自动换行
		flex-wrap: wrap;
		// 上 右 下 左
		padding: 20rpx 30rpx 0 30rpx;
		>view {
			width: 160rpx;
			height: 70rpx;
			background-color: $mxg-color-grey;
			text-align: center;
			line-height: 70rpx;
			font-size: 26rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-top: 15rpx;
		}
	}
</style>
