

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'

const routes = [

	{

		path: '/',
		name: 'Login',
		component: () => import('@/views/Login.vue')

	},

	{

		path: '/employees',
		name: 'Employees',
		component: () => import('@/views/Employees.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/employees/:id',
		name: 'Employee',
		component: () => import('@/views/Employee.vue'),
		meta: { requiresAuth: true }

	},

	{

		path: '/employee-form/:id?',
		name: 'EmployeeForm',
		component: () => import('@/views/EmployeeForm.vue'),
		meta: { requiresAuth: true }

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

router.beforeEach(async (to, from, next) => {

	const auth = useAuthStore()

	if(!auth.isAuthenticated && localStorage.getItem('access_token')) {

		auth.isAuthenticated = true
		auth.token = localStorage.getItem('access_token')!
		auth.refreshToken = localStorage.getItem('refresh_token')!

	}

	if(to.meta.requiresAuth && !auth.isAuthenticated) {

		return next('/')

	} else {

		next()

	}

})

export default router

