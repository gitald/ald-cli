// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import register from './components/registerComponents'
import store from './store/index'

import VueLazyLoad from 'vue-lazyload'//图片懒加载
import Loading from '@/components/Loading' //页面初始化loading
import Toast from '@/components/toast' //toast弹窗

import VConsole from 'vconsole'

import { WechatPlugin } from 'vux'
import './index.less'

let vconsole = new VConsole()
Vue.use(vconsole)

// import Vuex from 'vuex'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
Vue.use(WechatPlugin)
// Vue.use(register)

window.Toast = Toast // toast弹窗
Vue.use(Loading) // 页面初始化loading
// loading全局方法--‘g’参数代表全屏，默认不是全屏
Vue.prototype.loadingFun = function(time) {
	this.$loading('g')
	setTimeout(() => {
		this.$loaded()
	}, time)
}

//图片懒加载
Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: 'https://f.51fanbei.com/h5/common/images/bitmap1.png',
  loading: 'https://f.51fanbei.com/h5/common/images/bitmap1.png',
  attempt: 2,
})

// //数据监控--获取错误信息--初始化
// Vue.config.errorHandler = function(err,vm,info){
// 	console.log('error:'+err,vm,info);
// 	let errorPageUrl = vm.$parent.$el.baseURI;
// 	let errorCont = [err,errorPageUrl,info]
// 	testErrorInit(errorCont);
// }


/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})