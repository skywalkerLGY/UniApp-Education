<template>
	<view>
		<!-- #ifdef MP -->
			<!-- navBack()不要少了小括号 -->
			<uni-search-bar ref="searchBar" :focus="focus" radius="100" placeholder="搜索你想要的内容" 
			clearButton="auto" cancelButton="always" @cancel="navBack(1)"
			 @confirm="doSearch">
			</uni-search-bar>
		<!-- #endif -->
		<!-- 搜索关键字组件 -->
		<keyword @doSearch="doSearch" v-if="!searched"></keyword>
		
		<!-- 标签导航 -->
		<tab-bar v-if="searched" v-model="tabIndex"></tab-bar>
		
		<!-- 下拉筛选 -->
		<!-- <down-bar v-if="searched" :params="params" ></down-bar> -->
		
		<!-- 标签体内容 -->
		<block v-if="searched" >
			<!-- 注意ref只能为 "mescrollItem下标" 的格式, 另外 :i="下标" :index="tabIndex"也是固定写法 -->
			<course-list ref="mescrollItem0" :i="0" :index="tabIndex" :params="params" :content="content"></course-list>
			<article-list ref="mescrollItem1" :i="1" :index="tabIndex" :params="params" :content="content"></article-list>
			<question-list ref="mescrollItem2" :i="2" :index="tabIndex" :params="params" :content="content"></question-list>
		</block>
		
	</view>
</template>

<script>
	// 当前页面实例
	let currentWebview = null
	
	import keyword from './components/keyword.vue'
	import tabBar from '@/components/common/tab-bar.vue'
	// import downBar from './components/down-bar.vue'
	
	import courseList from './components/course-list.vue'
	import articleList from './components/article-list.vue'
	import questionList from './components/question-list.vue'
	import MescrollMoreMixin from "@/components/mescroll-uni/mixins/mescroll-more.js"
	export default {
		mixins: [MescrollMoreMixin], // 多个mescroll-body写在子组件时, 则使用mescroll-more.js补充子组件的页面生命周期
		
		components: {
			keyword,
			tabBar,
			// downBar,
			courseList,
			articleList,
			questionList
		},
		
		onLoad(option) { // 通过option接收其他页面传递的参数
			// #ifdef APP-PLUS
			currentWebview = this.$scope.$getAppWebview();
			// #endif
			
			// 如果有参数，不自动获取焦点；没有参数，自动获取焦点
			if(option.params) {
				// 解析参数，传递给属性
				// console.log('option', JSON.parse(option.params))
				this.params = JSON.parse(option.params)
				//开始搜索
				this.doSearch()
			}else {
				// 获取焦点
				// #ifdef APP-PLUS
				currentWebview.setTitleNViewSearchInputFocus(true)
				// #endif
				
				// #ifdef MP
				// 小程序端获取焦点
				this.focus = true 
				// #endif
			}
			
			
		},
		
		data() {
			return {
				params: null, // 其他页面带的参数
				content: null, // 搜索内容
				focus: false, // 小程序端搜索框焦点
				searched: false, //是否搜索过，将keyword隐藏
				tabIndex: 0, // 当前所在标签下标
			}
		},
		
		// 取消按钮，点击事件
		onNavigationBarButtonTap(e) {
			//后退(不需要判断index,因为只有1个按钮，如果有多个按钮再进行判断)
			this.navBack()
		},
		
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			// console.log('搜索框输入的内容', e.text)
			this.content = e.text
		},
		
		// 用户点击软键盘上的“搜索”按钮时触发。
		onNavigationBarSearchInputConfirmed(e) {
			// console.log('点击了搜索按钮', e.text)
			// 失去焦点，收起键盘
			// #ifdef APP-PLUS
			currentWebview.setTitleNViewSearchInputFocus(false)
			// #endif
			
			this.doSearch()
		},
		
		methods: {
			// 搜索动作
			doSearch(obj) {
				// obj && obj.value 是否是小程序传递的搜索关键字
				this.content = obj && obj.value ? obj.value : this.content
				// console.log('content', this.content)
				
				// #ifdef MP
				// 修改小程序端输入框内容
				this.$refs.searchBar.searchVal = this.content
				// #endif
				
				// 搜索过，隐藏关键字keyword.vue组件
				this.searched = true
				
				// 将当前搜索关键字保存到本地缓存
				this.storageHistory()
				
				this.$nextTick(() => { // 箭头函数
					// 节流处理，以防太快请求多次
					this.$util.throttle(()=>{
						// 触发当前标签页的列表子组件的search开始查询
						this.$refs[`mescrollItem${this.tabIndex}`].search()
					})
				})
				
				// uni.showLoading()
			},
			
			// 保存历史搜索关键，用于历史搜索列表展示
			storageHistory() {
				// 历史搜索保存到本地的key
				const key = 'history_list'
				// 获取当前本地已经存在的记录，
				uni.getStorage({
					key, // key:key
					success: (res) => { // 写箭头函数，不然里面用不了this
						// console.log('原历史关键字', res.data)
						// 查询到的原历史关键字数组，判断数组中是否存在当前关键字
						// 不存在则添加到数组的第1个元素，存在不添加
						this.content && res.data.indexOf(this.content) < 0 
							&& res.data.unshift(this.content)
						// 保存到本地缓存中
						uni.setStorageSync(key, res.data)
					},
					fail: (error) => {
						// console.log('获取历史关键字失败', error)
						// 如果没有保存过，则会失败，即进行第1次保存。值不要少[]是数组
						this.content && uni.setStorageSync(key, [this.content] )
					}
				})
			}
		}
	}
</script>

<style>

</style>
