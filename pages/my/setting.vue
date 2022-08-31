<template>
	<view>
		<mxg-list :list="list" 
			@setWifiPlay="setWifiPlay"
			@setWifiDownload="setWifiDownload"
			@setAutoPlay="setAutoPlay"
			@clearStorage="clearStorage"
		/>
	</view>
</template>

<script>
	import list from '@/config/setting-list-bar.js'
	export default {
		data() {
			return {
				list: list(),
			}
		},
		methods: {
			
			saveStorage(obj, key) {
				//取反状态值就是要更新的
				const checked = !obj.checked
				this.$set(obj, 'checked', checked)
				//保存到本地
				uni.setStorage({
					key,
					data: checked
				})
			},
			
			// 设置非wifi播放
			setWifiPlay(obj) {
				// console.log('设置非wifi播放', obj)
				this.saveStorage(obj, 'wifi-play')
			},
			
			// 设置非wifi缓存
			setWifiDownload(obj) {
				/* console.log('设置非wifi缓存', obj) */
				this.saveStorage(obj, 'wifi-download')
			},
			
			// 设置自动播放
			setAutoPlay(obj) {
				/* console.log('设置自动播放', obj) */
				this.saveStorage(obj, 'auto-play')
			},
			
			// 清除缓存
			clearStorage(obj) {
				uni.showModal({
					title: '您确定清除应用缓存吗?',
					content: '(该操作不会删除缓存课程)',
					success: (res) => {
						if(res.confirm) {
							// 清空
							uni.clearStorage()
							// 清空赋值
							this.$set(obj, 'text', '0KB')
							this.$util.msg('清除成功')
							this.list = list()
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $mxg-color-grey;
	}
</style>
