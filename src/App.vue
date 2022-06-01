

<template>

	<nav v-if = "auth" class = "h-16">

		<div class = "float-right">

			<button v-on:click = "logout" class = "bg-stone-600 text-white font-semibold rounded-md px-3 m-3">finalizar sesión</button>

		</div>

	</nav>

	<main>

		<router-view />

	</main>

</template>

<script>

	import { mapState, mapActions } from 'vuex'

	export default {

		mounted() {

			this.setAuth();

		},

		computed: {

			...mapState(['auth'])

		},

		watch: {

			auth(newValue) {

				if(newValue) {

					this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newValue.access_token;

				}

			}

		},

		methods: {

			...mapActions(['setAuth', 'logout'])

		}

	}

</script>

