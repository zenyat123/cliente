

<template>

	<div class = "flex justify-center items-center h-screen">

		<div class = "h-screen w-1/2 hidden md:block">

			<img src = "../assets/img/logo.webp" class = "object-cover w-full h-full">

		</div>

		<div class = "w-full p-8 sm:20 md:p-52 lg:p-36 lg:w-1/2">

			<h1 class = "text-2xl text-semibold text-center text-gray-600 mb-12">Login</h1>

			<form v-on:submit.prevent = "login">

				<div class = "mb-4">

					<label for = "email" class = "block text-gray-600">Usuario</label>

					<input type = "email" v-model = "email" class = "w-full border border-gray-300 rounded-md py-2 px-3 focus:border-blue-500 focus:outline-none">

				</div>

				<div class = "mb-4">

					<label for = "password" class = "block text-gray-600">Contraseña</label>

					<input type = "password" v-model = "password" class = "w-full border border-gray-300 rounded-md py-2 px-3 focus:border-blue-500 focus:outline-none">

				</div>

				<button class = "bg-blue-900 font-semibold text-white rounded-md py-2 px-4 w-full">Ingresar</button>

			</form>

		</div>

	</div>

</template>

<script>

	import { mapMutations, mapState } from 'vuex'

	export default {

		data() {

			return {

				email: '',
				password: ''

			}

		},

		computed: {

			...mapState(['auth'])

		},

		methods: {

			...mapMutations(['setAuth']),

			login() {

				this.axios.post('/api/login', {

					email: this.email,
					password: this.password

				}).then(response => {

					localStorage.setItem('auth', JSON.stringify(response.data));

					this.setAuth(response.data);

					this.$router.push({ name: 'Posts' });

				})

			}

		}

	}

</script>

