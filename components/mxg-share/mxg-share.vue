<template>
	<view>
		<!-- 遮罩蒙层 -->
		<view v-show="isShow" @click="showHandler" class="mask" @touchmove.stop.prevent="()=>{}"></view>
		<view v-show="isShow" class="share-body">
			<scroll-view scroll-x class="share-scroll noScorll">
				<view class="share-item" @click="share(item)"
					v-for="(item, index) in providerList" :key="index"
				>
					<image :src="item.icon"></image>
					<view>{{item.name}}</view>
				</view>
			</scroll-view>
			
			<view class="share-cancel" @click="showHandler">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		props: {
			shareData: Object // 分享的数据
		},
		
		watch: {
			shareData(newVal) {
				if(newVal.mainImage) this.image = newVal.mainImage
				if(newVal.title) this.title = newVal.title
				this.href = this.$env.HOST_H5 + this.$util.routePath()
			}
		},
		
		data() {
			return {
				isShow: false, //是否显示
				title: '在线教育APP视频教程',
				shareText: '梦学谷-陪你学习，伴你梦想',
				href:  'https://www.mengxuegu.com', // $util.routePath() 获取当前页面的url（html5）
				image: 'https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png',
				shareType: 0, // 分享类型：0 图文，1 文字，2图片
				providerList: [] // 提供商
			}
		},
		
		created: function () { // 不能写onload，因为 当前是组件，没有页面钩子
			uni.getProvider({
				service: 'share',
				success: (e) => {
					// console.log('success', e);
					let data = [] // 提供商
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '微信好友',
									id: 'weixin',
									sort:0,
									icon: '/static/share/weixin.png'
								})
								data.push({
									name: '微信朋友圈',
									id: 'weixin',
									type:'WXSenceTimeline',
									sort:1,
									icon: '/static/share/pengyouquan.png'
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									sort:2,
									icon: '/static/share/weibo.png'
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									sort:3,
									icon: '/static/share/qq.png'
								})
								break;
							default:
								break;
						}
					}
					
					data.push({
						name: '复制链接',
						id: 'copy',
						sort: 4,
						icon: '/static/share/link.png'
					})
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
					
					// console.log('providerList', this.providerList)
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		
		methods: {
			// 显示隐藏分享组件
			showHandler() {
				this.isShow = !this.isShow
			},
			
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				// 复制链接
				if(e.id === 'copy') {
					uni.setClipboardData({
					    data: this.href,
					    success: () => {
					        // 隐藏默认提示
							uni.hideToast()
							this.$util.msg('已复制到剪贴板')
					    }
					});
					this.showHandler()
					return // 结束
				}
				
				
				// 加载中
				uni.showLoading()
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = this.title;
						shareOPtions.href = this.href;
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '欢迎体验uniapp';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'https://uniapp.dcloud.io',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = this.href;
					shareOPtions.title = this.title;
				}
				
				// 隐藏加载中
				uni.hideLoading()
				uni.share(shareOPtions);
			},
			
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise( async  (res) => {
					// var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					// console.log('after' + localPath);
					
					if(img.startsWith('http')) {
						//下载网络图片到本地，返回本地存储的临时文件
						img = await this.downFile(img)
					}
					
					// 压缩size
					plus.io.resolveLocalFileSystemURL(img, (entry) => {
					// plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									// console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
			},
			
			// 下载图片文件
			downFile(url) {
				console.log('url', url)
				return new Promise((resolve) => {
					uni.downloadFile({
						url, // url:url
						success: (res) => {
							// console.log('下载完成', res.tempFilePath)
							resolve( res.tempFilePath)
						},
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.mask {
		z-index: 99;
		position: fixed;
		top: 0;
		left:0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0, 0.6);
	}
	
	.share-body {
		z-index: 100;
		position: fixed;
		left:0;
		right: 0;
		bottom: 0;
		.share-scroll {
			background-color: #f7f7f7;
			width: 100%;
			height: 200rpx;
			display: flex;
			white-space: nowrap;
			padding-top: 45rpx;
			.share-item {
				display: inline-flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 25%;
				image{
					width: 60rpx;
					height: 60rpx;
				}
				view {
					color: $mxg-text-color-grey;
					font-size: 25rpx;
					padding-top: 10rpx;
				}
			}
		}
		.share-cancel {
			background-color: #fff;
			text-align: center;
			width: 100%;
			padding: 25rpx 0;
		}
	}
</style>
