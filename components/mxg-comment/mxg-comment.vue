<template>
	<view>
		<!-- 蒙层 -->
		<view v-if="isShow" @click="show" class="mask" @touchmove.stop.prevent="()=>{}" catchtouchmove="true"></view>
		<view v-if="isShow" class="course-comment center column">
			<uni-rate :size="22" v-model="comment.score" ></uni-rate>
			<text class="desc">{{descArr[comment.score-1]}}</text>
			<view class="input-box center">
				<textarea :value="comment.content" @input="getContent" class="textarea" placeholder="请输入评价内容……"></textarea>
				<text class="btn" @click="submitComment">提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props: {
			comment: {
				type: Object,
				default: ()=>({
					userId: 1, // 当前用户id
					nickName: 'xxx梦',
					userImage: 'xxx.png',
					content: '', // 评论内容
					score: 5 // 评分值
				})
			},
			descArr: { //每个评分的提示内容
				type: Array,
				default: () => [
					'极差,课程很糟糕，我要吐槽。', 
					'差,我对课程不满意。', 
					'中评,课程一般。', 
					'良好,课程还可以。', 
					'推荐,课程非常棒。'
				]
			}
		},
		
		data() {
			return {
				isShow: false, //默认不显示
			}
		},
		methods: {
			// 显示隐藏评论窗口
			show() {
				this.isShow = !this.isShow
			},
			// 获取评论框内容
			getContent(e) {
				this.comment.content = e.detail.value
			},
			
			// 提交评论
			submitComment() {
				// 去除内容左右 空格
				this.comment.content = this.comment.content.trim()
				this.$emit('submitComment', this.comment)
			}
		}
	}
</script>

<style lang="scss">
	.course-comment {
		z-index: 100;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 50%;
		width: 650rpx;
		margin: 0 auto;
		padding-top: 30rpx;
		font-size: 30rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		.desc {
			color: $mxg-text-color-black;
			letter-spacing: 2px;
			padding: 20rpx 0;
		}
		.input-box {
			border-top: $mxg-underline;
			width: 100%;
			white-space: nowrap;
		}
		.textarea {
			background-color: #F8F9FB;
			border-radius: 0 0 0 20rpx;
			height: 100rpx;
			font-size: 30rpx;
			padding: 10rpx;
			width: 100%;
		}
		.btn {
			padding: 0 15rpx;
			color: $mxg-text-color-blue;
		}
	}
	
</style>
