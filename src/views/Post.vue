

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

<script>

	export default {

		data() {

			return {

				post: {},
				category: {},
				user: {}

			}

		},

		mounted() {

			this.getPost();

		},

		methods: {

			getPost() {

				this.axios.get('/api/posts/' + this.$route.params.id + '?included=category,user')
				    .then(response => {

					  	this.post = response.data.data;

					  	this.category = response.data.data.category.category;

					  	this.user = response.data.data.user;

					});

			}

		}

	}

</script>

