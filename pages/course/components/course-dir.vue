<template>
	<view class="course-dir">
		<view v-for="(chapter, index) in chapterList" :key="index">
			<!-- 第几章 -->
			<text class="chapters text-ellipsis">第{{index+1}}章 {{chapter.name}}</text>
			<!-- 第几节 -->
			<view class="sections row "
				:class="{active: index=== activeObj.chapterIndex&& index2 === activeObj.sectionIndex}"
				@click="playVideo(index, index2, section)"
				v-for="(section, index2) in chapter.sectionList" :key="index2">
				<text class="iconfont icon-roundrightfill"></text>
				<view class="row">
					<text>{{index+1}}-{{index2+1}}</text>
					<text class="title text-ellipsis">{{section.name}}</text>
				</view>
				<text v-if="section.isFree && !isBuy" class="see">试看</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isBuy: Boolean, // 是否购买
			chapterList: {
				type: Array,
				default: () => [
					{
						id: 1,
						name: '项目内容介绍',
						sectionList: [ //课节信息
							{
								id: 1,
								name: '什么是uniapp框架',
								isFree: 1, // 是否付费（0付费，1免费）
							},
							{
								id: 2,
								name: '安装开发工具和插件',
								isFree: 1, // 是否付费（0付费，1免费）
							},
							{
								id: 3,
								name: '开发第一个helloworld项目',
								isFree: 0, // 是否付费（0付费，1免费）
							}
						]
					},
					
					{
						id: 2,
						name: '初始化梦学谷在线教育项目',
						sectionList: [ //课节信息
							{
								id: 3,
								name: '创建项目和完善配置',
								isFree: 0, // 是否付费（0付费，1免费）
							},
							{
								id: 4,
								name: '导入静态文件内容',
								isFree: 0, // 是否付费（0付费，1免费）
							}
						]
					}
				]
			},
			
			activeObj: { // 接收点击哪个章节
				type: Object,
				default: ()=>({
					chapterIndex: -1, //章下标
					sectionIndex: -1,// 节下标
				})
			}
		},
		
		methods: {
			// 点击试看
			playVideo(chapterIndex, sectionIndex, section) {
				// 已经购买，则直接跳转到视频播放列表页面
				if(section.isFree || this.isBuy) {
					this.activeObj.chapterIndex = chapterIndex
					this.activeObj.sectionIndex = sectionIndex
					this.$emit('playVideo', {section: section, activeObj: this.activeObj})
				}else {
					this.$util.msg('请先购买')
				}
			}
		}
	}
</script>

<style lang="scss">
	
	.course-dir {
		padding: 0 36rpx;
		.chapters {
			margin-top: 30rpx;
			margin-bottom: 10rpx;
			color: $mxg-text-color-black;
			font-size: 35rpx;
			font-weight: bold;
		}
		.sections {
			padding: 20rpx 0;
			font-size: 30rpx;
			border-bottom: $mxg-underline;
			line-height: 40rpx;
			color: #3d3c40;
			text {
				margin-right: 10rpx;
			}
			.title {
				width: 470rpx;
			}
			.see {
				color: $mxg-text-color-blue;
				font-size: 25rpx;
				// 靠右
				flex: 1;
				text-align: right;
			}
		}
		
		.active {
			color: $mxg-text-color-blue;
		}
	}
</style>
