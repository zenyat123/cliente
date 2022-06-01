

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "flex justify-center font-semibold my-8">Publicaciones</h1>

		<input type = "text" v-model = "search" class = "float-right" placeholder = "Buscar...">

		<ul>

			<li v-for = "post in posts" v-bind:key = "post.id">

				<router-link v-bind:to = "{ name: 'Post', params: { id: post.id } }">

					{{ post.title }}

				</router-link>

				<router-link v-bind:to = "{ name: 'PostEdit', params: { id: post.id } }" title = "Editar" class = "px-3"> / </router-link>

				<button v-on:click = "deletePost(post.id)" title = "eliminar"> x </button>

			</li>

		</ul>

		<router-link v-bind:to = "{ name: 'PostCreate' }" class = "float-right font-semibold my-8">Registrar</router-link>

	</div>

</template>

<script>

	export default {

		data() {

			return {

				posts: [],
				search: ''

			}

		},

		mounted() {

			this.getPosts();

		},

		watch: {

			search() {

				this.getPosts();

			}

		},

		methods: {

			getPosts() {

				this.axios.get('http://localhost:8000/api/posts?filter[title]=' + this.search)
				    .then(response => {

				     	this.posts = response.data.data;

					});

			},

			deletePost(id) {

				this.axios.delete('http://localhost:8000/api/posts/' + id)
					.then( () => {

						this.getPosts();

					});

			}

		}

	}

</script>

