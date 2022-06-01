

<template>

	<div class = "max-w-7xl mx-auto">

		<h1 class = "font-semibold my-8">{{ post.title }}</h1>

		<p class = "text-justify">{{ post.content }}</p>

		<span class = "font-semibold">Categoría:</span> {{ category }}

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

