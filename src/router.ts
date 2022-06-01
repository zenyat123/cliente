

import { createRouter, createWebHistory } from 'vue-router'

const routes = [

	{

		path: '/',
		name: 'Login',
		component: () => import('@/views/Login.vue')

	},

	{

		path: '/posts',
		name: 'Posts',
		component: () => import('@/views/Posts.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/posts/:id',
		name: 'Post',
		component: () => import('@/views/Post.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/posts/create',
		name: 'PostCreate',
		component: () => import('@/views/PostCreate.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/posts/edit/:id',
		name: 'PostEdit',
		component: () => import('@/views/PostEdit.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/:pathMatch(.*)',
		name: '404',
		component: () => import('@/views/404.vue')

	}

]

const router = createRouter({
	
	history: createWebHistory(),
	routes

})

router.beforeEach((to, from, next) => {

	const protectedRoute = to.matched.some(record => record.meta.requiresAuth);

	if(protectedRoute && !localStorage.getItem('auth')) {

		next('/');

	} else {

		next();

	}

})

export default router

