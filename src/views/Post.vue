

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16">{{ post.title }}</h1>

		<div class = "bg-blue-100 rounded-lg h-96 mb-6"></div>

		<p class = "my-3"><span class = "font-semibold">Autor:</span> {{ user.name }}</p>

		<p><span class = "font-semibold">Categoría:</span> {{ category }}</p>

		<p class = "text-justify my-3">

			<span class = "font-semibold">Contenido:</span> 

			{{ post.content }}

		</p>

	</div>

</template>

<script lang = "ts" setup>

	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { IUser, ICategory, IPost } from '../interfaces/constants'
	import postService from '../services/postService'

	const route = useRoute()

	const user = ref<IUser>({} as IUser)
	const category = ref<ICategory>()
	const post = ref<IPost>({} as IPost)

	const getPost = async () => {

		const response = await postService.show(route.params.id as string)

		user.value = response.data.data.user
		category.value = response.data.data.category.category
		post.value = response.data.data

	}

	onMounted(getPost)

</script>

