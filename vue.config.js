module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: "https://mock.mengxuegu.com/mock/625e2bc566abf914b1f1c131/mxg-education-app",
				pathRewrite: {
					"^/api": "" // 将请求地址 /api 替换为 ""
				}
			}
		}
	}
}