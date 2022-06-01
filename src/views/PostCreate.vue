

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16">Registrar publicación</h1>

		<form v-on:submit.prevent = "savePost()">

			<div class = "grid grid-cols-3 gap-8">

				<div class = "col-span-1">

					<label for = "title">Título:</label>

					<input-new type = "text" v-model = "post.title" />

				</div>

				<div class = "col-span-1">

					<label for = "url">Url:</label>

					<input-new type = "text" v-model = "post.url" />

				</div>

				<div class = "col-span-1">

					<label for = "resume">Resumen:</label>

					<input-new type = "text" v-model = "post.resume" />

				</div>

				<div class = "col-span-1">

					<label for = "content">Contenido:</label>

					<input-new type = "text" v-model = "post.content" />

				</div>

				<div class = "col-span-1">

					<label for = "status">Estado:</label>

					<select v-model = "post.status" class = "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none">

						<option value = "0">Borrador</option>
						<option value = "1">Publicado</option>

					</select>

				</div>

				<div class = "col-span-1">

					<label for = "category-id">Categoría:</label>

					<select v-model = "post.category_id" class = "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none">

						<option value = "" selected disabled>Seleccionar</option>

						<option v-for = "category in categories" v-bind:key = "category.id" v-bind:value = "category.id">{{ category.category }}</option>

					</select>

				</div>

				<div class = "col-span-3">

					<button-new class = "float-right my-8">Registrar</button-new>

				</div>

			</div>

		</form>

	</div>

</template>

<script>

	import InputNew from '@/components/InputNew.vue'
	import ButtonNew from '@/components/ButtonNew.vue'

	export default {

		components: {

			InputNew,
			ButtonNew

		},

		data() {

			return {

				categories: {},
				post: {

					title: '',
					url: '',
					resume: '',
					content: '',
					status: '',
					category_id: ''

				}

			}
 
		},

		mounted() {

			this.getCategories();

		},

		methods: {

			getCategories() {

				this.axios.get('http://localhost:8000/api/categories')
				    .then(response => {

				    	this.categories = response.data.data;

				    });

			},

			savePost() {

				this.axios.post('http://localhost:8000/api/posts', this.post)
					.then(response => {

					 	this.post = {

					 		title: '',
					 		url: '',
					 		resume: '',
					 		content: '',
					 		status: '',
					 		category_id: ''

					 	}

					 	this.$router.push({ name: 'Posts' });

					});

			}

		}

	}

</script>

