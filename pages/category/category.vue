<template>
	<view class="category">
		<scroll-view class="left noScorll" scroll-y >
			<view class="title">
				<view v-for="(item, index) in categoryList" :key="index"
				:class="{active: index === activeIndex}"
				@click.stop="getLabel(index, item)"
				>
				{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y >
			<view class="tag">
				<view v-for="(item, index) in labelList" :key="index"
					@click.stop="clickLabel(item)"
				>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import api from '@/api/course.js'
	export default {
		
		props: {
			// 搜索页将当前组件作为子组件，传递了对应`分类标题处`的对象
			value: {
				type: Object,
				default: ()=>{}
			}
		},
		
		data() {
			return {
				categoryList: [], //左侧分类数据
				labelList: [], // 右侧标签数据
				activeIndex: 0, //当前选中的下标(分类下标)
			}
		},
		
		mounted() {
			// 查询分类数据
			this.getList()
		},
		
		// 监听原生标题栏按钮点击事件，参数为Object
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				this.navTo('/pages/search/search')
			}
		},
		
		
		methods: {
			async getList() {
				// 查询分类及标签信息，不要少了 async await
				const {data} = await api.getCategoryList()
				this.categoryList = data
				
				// 如果有value值，则是搜索页传递的数据
				if(this.value) {
					//针对每个分类下的标签列表，向标签列表第1个元素中添加`不限`
					this.categoryList.forEach((item)=> {
						// id 标签id, name用于在标签列表中显示，cname分类名称用于在标题中显示，categoryId分类id用于作为条件查询
						item.labelList.unshift( 
							{ id: null, name: '不限', cname: item.name, categoryId: item.id} 
						)
					})
					
					// 向分类列表中第1个元素添加`全部分类`
					this.categoryList.unshift( {id: null, name: '全部分类'} )
					
					// 弹出分类窗口，回显上次点击所在分类处（颜色是蓝色）
					this.activeIndex = this.value.activeIndex > -1 
						? this.value.activeIndex+1 : this.activeIndex
				}
				
				// console.log('categoryList', this.categoryList)
				// 获取当前选中的标签列表（第1个分类的）
				this.getLabel(this.activeIndex)
			},
			
			// 获取标签列表(分类下标，分类信息)
			getLabel(index, item) {
				// 选中样式
				this.activeIndex = index
				
				if(item && item.name==='全部分类'){
					// 有则是分类弹窗，直接关闭窗口，将数据传递给下拉筛选标题处
					this.searchPageChangeLabel(item)
					return
				}
				
				// 获取点击的分类对象
				const activeCategory = this.categoryList[index]
				// 通过分类对象获取标签列表
				this.labelList = activeCategory.labelList
				// console.log('labelList', this.labelList)
			},
			
			// 点击标签，跳转到搜索页面(item当前标签信息)
			clickLabel(item) {
				// 如果有value，则当前页面搜索页作为子组件，
				if(this.value) {
					// 将点击的标签信息回显到搜索页（下拉筛选）进行搜索
					this.searchPageChangeLabel(item)
					return
				}
				
				// 注意：labelId一定要放到第1个位置，后面解析时需要使用，顺序一定不要乱
				const params = {labelId: item.id, name: item.name, activeIndex: this.activeIndex}
				this.navTo(`/pages/search/search?params=${ JSON.stringify(params) }`)
			},
			
			// 弹窗选择标签、分类
			searchPageChangeLabel(item) {
				// 避免重复点击
				// this.value.name 上一次的分类或标签名称, item.name是当前这次点击的标签名称, item.cname当前点击的分类名称
				if(this.value.name !== item.name && this.value.name !== item.cname) {
					// 如果有cname则是不限，否则是具体标签名
					this.value.name = item.cname || item.name
					// 标签id
					this.value.id = item.id || null
					// 分类id(点击的是`不限`，就取分类id)
					this.value.categoryId = item.categoryId || null
					this.$emit('searchByLabel', this.value)
				}
				
				// 关闭弹窗
				this.value.active = false
			}
		}
		
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.category {
		display: flex;
		height: 100%;
		.left {
			background-color: #F8F9FB;
			width: 200rpx;
			border-radius: 0 25rpx 25rpx 0;
			.title {
				view {
					text-align: center;
					font-size: 30rpx;
					color: #888888;
					width: 200rpx;
					line-height: 40rpx;
					padding: 55rpx 30rpx;
					position: relative;
					&:before { // 在分类前加上|
						position: absolute;
						content: '';
						width: 0;
						height: 0;
						border-right: 6rpx solid $mxg-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: .3s;
					}
				}
				
				.active {
					color: $mxg-color-primary;
					font-size: 33rpx;
					font-weight: bold;
					&:before {
						height: 50rpx;
					}
				}
			}
		}
		.right {
			background-color: #fff;
			padding-left: 15rpx;
			margin: 0; // 铺满
			.tag {
				display: flex;
				flex-wrap: wrap; 
				padding-top: 35rpx;
				padding-left: 10rpx;
				view {
					font-size: 25rpx;
					line-height: 60rpx;
					border: 1px solid #999;
					border-radius: 30rpx;
					min-width: 160rpx;
					text-align: center;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
				}
			}
		}
	}
</style>
