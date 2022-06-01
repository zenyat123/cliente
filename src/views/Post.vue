

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16">{{ post.title }}</h1>

		<div class = "bg-blue-100 rounded-lg h-96 mb-6"></div>

		<span class = "font-semibold">Categoría:</span> {{ category }}

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
				category: {}

			}

		},

		mounted() {

			this.getPost();

		},

		methods: {

			getPost() {

				this.axios.get('http://localhost:8000/api/posts/' + this.$route.params.id + '?included=category')
				    .then(response => {

					  	this.post = response.data.data;

					  	this.category = this.post.category.category;

					});

			}

		}

	}

</script>

