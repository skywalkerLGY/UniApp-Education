import upload from '@/common/js/upload.js'

export default {
	
	//上传图片文件
	uploadImg(filePath) {
		return upload({
			url: '/article/file/upload',
			filePath
		})
	}
	
}