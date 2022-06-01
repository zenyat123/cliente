

import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({

	history: createWebHistory(),

	routes: [

		{

			path: '/',
			name: 'Login',
			component: () => import('@/views/Login.vue')

		},

		{

			path: '/posts',
			name: 'Posts',
			component: () => import('@/views/Posts.vue')

		},

		{

			path: '/posts/:id',
			name: 'Post',
			component: () => import('@/views/Post.vue')

		},

		{

			path: '/posts/create',
			name: 'PostCreate',
			component: () => import('@/views/PostCreate.vue')

		},

		{

			path: '/posts/edit/:id',
			name: 'PostEdit',
			component: () => import('@/views/PostEdit.vue')

		},

		{

			path: '/:pathMatch(.*)',
			name: '404',
			component: () => import('@/views/404.vue')

		}

	]

})

