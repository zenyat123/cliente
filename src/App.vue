

<template>

    <navbar />

	<main>

		<router-view />

	</main>

</template>

<script>

	import { mapState, mapActions } from 'vuex'

    import Navbar from '@/components/Navbar.vue'

	export default {

		components: {

			Navbar

		},

		mounted() {

			this.setAuth();

		},

		computed: {

			...mapState(['auth'])

		},

		watch: {

			auth(newValue) {

				if(newValue) {

					this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newValue.token;

				}

			}

		},

		methods: {

			...mapActions(['setAuth', 'logout'])

		}

	}

</script>

