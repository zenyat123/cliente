

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16">Editar publicación</h1>

		<form v-on:submit.prevent = "editPost()">

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

					<label for = "status">Estado</label>

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

					<button-new class = "float-right my-8">Actualizar</button-new>

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
				post: {}

			}

		},

		mounted() {

			this.getCategories();
			this.getPost();

		},

		methods: {

			getCategories() {

				this.axios.get('http://localhost:8000/api/categories')
					.then(response => {

						this.categories = response.data.data;

					});

			},

			getPost() {

				this.axios.get('http://localhost:8000/api/posts/' + this.$route.params.id + '?included=category')
					.then(response => {

						this.post = response.data.data;

					});

			},

			editPost() {

				this.axios.put('http://localhost:8000/api/posts/' + this.$route.params.id, this.post)
				    .then( () => {

						this.$router.push({ name: 'Posts' });

					});

			}

		}

	}

</script>

