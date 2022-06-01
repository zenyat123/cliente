

<template>

	<div class = "w-90 absolute top-2 right-1">

		<input-new type = "text" v-model = "search" placeholder = "Buscar..." />

	</div>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "flex justify-center text-3xl text-blue-900 font-semibold mt-8 mb-16">Publicaciones</h1>

		<div class = "grid grid-cols-5 gap-5">

			<div v-for = "post in posts" v-bind:key = "post.id">

				<figure class = "rounded-lg bg-white shadow-xl my-3">

					<div class = "bg-blue-100 rounded-t-lg h-48"></div>

					<div class = "p-3">

						<router-link v-bind:to = "{ name: 'Post', params: { id: post.id } }">

							<span class = "font-medium text-lg text-blue-900"> {{ post.title }} </span>

						</router-link>

						<p class = "line-clamp-3"> {{ post.resume }} </p>

					</div>

					<div class = "flex justify-between">

						<router-link v-bind:to = "{ name: 'PostEdit', params: { id: post.id } }" class = "bg-blue-900 text-white font-semibold rounded-md px-3 m-3">

							editar

						</router-link>

						<button v-on:click = "deletePost(post.id)" class = "bg-red-900 text-white font-semibold rounded-md px-3 m-3">

							eliminar

						</button>

					</div>

				</figure>

			</div>

		</div>

		<pagination :links = "links" />

		<router-link v-bind:to = "{ name: 'PostCreate' }" class = "bg-blue-900 text-white font-semibold rounded-md px-4 py-2 float-right my-8">Registrar</router-link>

	</div>

</template>

<script lang = "ts" setup>

	import { ref, onMounted, computed, watch } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { IPost } from '../interfaces/constants'
	import api from '../services/api'

	import InputNew from '../components/InputNew.vue'
	import Pagination from '../components/Pagination.vue'

	const posts = ref<IPost[]>([])
	const search = ref('')
	const links = ref({} as any)

	const route = useRoute()
	const router = useRouter()

	const page = computed(() => {

		let page = route.query.page ?? 1

		if(Number(page) > links.value.lastPage) {

			router.replace({ 

				query: { page: links.value.lastPage }

			})

			return links.value.lastPage

		}

		return page

	})

	const getPosts = async () => {

		const response = await api.get('/posts?perPage=5&page='+page.value+'&filter[title]='+search.value)

		posts.value = response.data.data

		links.value = {

			'links': response.data.meta.links,
			'lastPage': response.data.meta.last_page,
			'from': response.data.meta.from,
			'to': response.data.meta.to,
			'total': response.data.meta.total

		}

	}

	const deletePost = async (id: number) => {

		await api.delete('/posts/'+id)

		await getPosts()

	}

	onMounted(getPosts)

	watch(search, getPosts)

	watch(page, getPosts)

</script>

