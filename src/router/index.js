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
				component: () => import('../views/Home.vue'),
			},
			{
				path: 'mall',
				component: () => import('../views/Mall.vue'),
			},
			{
				path: 'user',
				component: () => import('../views/User.vue'),
			},
			{
				path: 'pageone',
				component: () => import('../views/PageOne.vue'),
			},
			{
				path: 'pagetwo',
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
