import Vue from 'vue'
import App from './App'
import http from './utils/https.js'
Vue.config.productionTip = false
Vue.prototype.request = http
// 全局引入混合文件
import mixin from './common/mixin/mixin.js'
Vue.mixin(mixin)

// 在main.js注册全局组件 (mescroll-uni 遵循 easycom 规范, 可自动引入, 而mescroll-body需注册全局组件)
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
Vue.component('mescroll-body', MescrollBody)

// 工具方法 
import * as util from './common/js/util.js'
// 挂载到Vue原型上，在组件页面中，直接通过 this.$util.throttle
Vue.prototype.$util = util

// 环境配置 
import * as env from './config/env.js'
 // this.$env.HOST_H5
Vue.prototype.$env = env

App.mpType = 'app'

import store from './store'
Vue.prototype.$store = store

const app = new Vue({
	store,
    ...App
})
app.$mount()
