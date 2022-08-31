<template>
	<view class="down-bar row sticky-box" @touchmove.stop.prevent="()=>{}">
		<view class="one" v-for="(item, index) in downBarList" :key="index"
			@click="clickDownView(item)"
		>
			<view class="center" :class="{active: item.active || (item.id || item.id === 0) || item.categoryId }">
				<text>{{item.name}}</text>
				<text class="iconfont icon-down1" v-show="!item.active"></text>
				<text class="iconfont icon-up" v-show="item.active"></text>
			</view>
			<view class="item-list" v-show="item.active" >
				<!-- 分类页面 -->
				<category class="category" v-if="item.isCategory" :value="item" @searchByLabel="searchByLabel"></category>
				<view class="name" v-else v-for="(info, i) in item.list" :key="i"
					:class="{active: info.name === item.name}"
					@click="changeInfo(item, info)"
				>
					{{info.name}}
				</view>
			</view>
			<!-- 蒙层 -->
			<view class="cover" v-show="item.active"></view>
		</view>
	</view>
</template>

<script>
	import category from '@/pages/category/category.vue'
	export default {
		components: { category },
		props: {
			params: { // 其他页面跳转到搜索页所带上请求参数，用于回显标题处
				type:Object,
				default: null
			},
			downBars: { // 下拉筛选相关内容
				type: Array,
				default: () => [
					{
						type: 'sort',
						name: '综合排序',
						active: false, //是否被选中
						list: [
							{
								id: null,
								name: '综合排序'
							},
							{
								id: 'new',
								name: '最新排序'
							},
							{
								id: 'hot',
								name: '热门排序'
							}
						]
					},
					{
						type: 'label',
						name: '全部分类', // 放到最后一个元素
						active: false,
						isCategory: true // 分类
					}
					
				]
			}
		},
		
		watch: {
			params: {
				handler(newVal) {
					if(newVal) {
						// console.log('请求参数', newVal)
						// 分类页面点击 标签 跳转过来的
						if(newVal.name) {
							// 将标签信息回显到全部分类处的标题处，不能用downBarList
							const obj = this.downBars[this.downBars.length-1]
							// console.log('obj', obj)
							// 将`全部分类`标题替换为标签信息
							obj.name = newVal.name
							obj.id = newVal.labelId
							// 为了弹窗后，显示当前标签是在哪个分类下的
							obj.activeIndex = newVal.activeIndex
							
							// 为了下拉筛选标签处高亮显示（首页分类区跳转过来）
							obj.categoryId = newVal.categoryId
							return // 直接结束，不往下执行了
						}
						
						// 其他页面（非分类页）跳转过来带的参数
						// 1. 获取请求参数中的第1个key值，与downBars里面的每个元素的type进行匹配
						const key = Object.keys(newVal)[0]
						// 找到目标元素（下拉筛选）
						const target = this.downBars.find((item) => {
							return item.type === key
						})
						// 2. 从目标元素中找到list(弹出列表)数组元素id匹配请求参数中的value
						const value = newVal[key]
						target.list.find((item) => { // 写箭头函数
							if(item.id === value) {
								//找到了对应的下拉选项中的对象，则将对象中的名称传到标题处
								target.name = item.name
								target.id = item.id
								return true // 匹配到直接结束，不用往后再找
							}
						})
					}
				},
				immediate: true
			}
		},
		
		data() {
			return {
				// 将父组件传递的数据赋值给此属性，方便后面修改，直接修改downBars小程序不生效
				downBarList: []
			}
		},
		
		created() {
			this.downBarList = this.downBars
		},
		
		methods: {
			// 点击弹出
			clickDownView(item) {
				// console.log('item', item)
				// 显示或隐藏弹窗
				this.downBarList.forEach( (i) => {
					// 将点击的这个显示或隐藏，其他全部隐藏
					i.active = (item === i) ? !item.active : false
				})
			},
			
			// 选中下拉弹出窗口选项时触发
			changeInfo(item, info) {
				// 如果和上次点击的选项一样，则不重新查询
				if(item.name === info.name) return
				
				// 更改标题处显示的名称
				item.name = info.name
				item.id = info.id
				
				// 查询数据 
				this.$emit('search', { [item.type]: info.id})
			},
			
			// 分类子组件触发此方法，来查询对应分类或标签的数据
			searchByLabel(label) {
				// console.log('选择的标签信息', label)
				// #ifdef MP
					//关闭弹窗
					this.clickDownView(label)
					// 获取最后一个全部分类对象，将标题替换
					const obj = this.downBarList[this.downBarList.length-1]
					obj.name = label.name
					obj.id = label.id
					obj.categoryId = label.categoryId
				// #endif
				
				this.$emit('search', {labelId: label.id, categoryId: label.categoryId})
			}
			
		}
	}
</script>

<style lang="scss">
	
	.down-bar {
		z-index: 100;
		background-color: #FFFFFF;
		font-size: 30rpx;
		line-height: 80rpx;
	}
	
	.item-list {
		z-index: 100;
		background-color: #FFFFFF;
		position: absolute;
		left: 0;
		right: 0;
		.name {
			padding-left: 80rpx;
		}
		.category {
			height: 580rpx;
		}
	}
	// 被点击之后的效果 
	.active {
		color: $mxg-text-color-blue;
	}
	
	// 粘顶
	.sticky-box {
		position: -webkit-sticky;
		position: sticky; /* 其他浏览器 */
		top: var(--window-top);
	}
	/*蒙层*/
	.cover {
		z-index: 99;
		position: fixed;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.2 !important;
	}
</style>
