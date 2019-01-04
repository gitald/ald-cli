import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('../pages/index') //首页

Vue.use(Router)

export default new Router({
	mode:'history',
	base: '/asj/template',
	routes: [
		{
			path: '/',
			name:'index',
			component:index
		}
		
	]
})
