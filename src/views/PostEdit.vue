

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "font-semibold my-8">Editar publicación</h1>

		<form v-on:submit.prevent = "editPost()">

			<label for = "title">Título:</label>

			<input type = "text" v-model = "post.title">

			<label for = "url">Url:</label>

			<input type = "text" v-model = "post.url">

			<label for = "resume">Resumen:</label>

			<input type = "text" v-model = "post.resume">

			<label for = "content">Contenido:</label>

			<input type = "text" v-model = "post.content">

			<label for = "status">Estado</label>

			<select v-model = "post.status">

				<option value = "0">Borrador</option>
				<option value = "1">Publicado</option>

			</select>

			<label for = "category-id">Categoría:</label>

			<select v-model = "post.category_id">

				<option value = "" selected disabled>Seleccionar</option>

				<option v-for = "category in categories" v-bind:key = "category.id" v-bind:value = "category.id">{{ category.category }}</option>

			</select>

			<button class = "float-right font-semibold my-8">Actualizar</button>

		</form>

	</div>

</template>

<script>

	export default {

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

