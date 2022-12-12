import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () => import('../views/Main.vue'),
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('../views/Home.vue'),
			},
			{
				path: 'mall',
				name: 'mall',
				component: () => import('../views/Mall.vue'),
			},
			{
				path: 'user',
				name: 'user',
				component: () => import('../views/User.vue'),
			},
			{
				path: 'pageone',
				name: 'page1',
				component: () => import('../views/PageOne.vue'),
			},
			{
				path: 'pagetwo',
				name: 'page2',
				component: () => import('../views/PageTwo.vue'),
			},
		],
	},
];

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
