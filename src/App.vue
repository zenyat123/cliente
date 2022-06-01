

<template>

    <header class = "border-b">

        <div class = "max-w-7xl mx-auto" v-if = "auth">

            <nav class = "flex items-center relative px-4">

                <div class = "text-lg text-stone-700 font-bold md:py-0 py-4">

                    <a href = "/">Company</a>

                </div>

                <ul class = "md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 md:px-2 ml-auto">

                    <li>

                        <a href = "#" class = "flex md:inline-flex items-center hover:bg-stone-100 p-4"><span>Publicaciones</span></a>

                    </li>

                    <li>

                        <a href = "#" class = "flex md:inline-flex items-center hover:bg-stone-100 p-4"><span>Empleados</span></a>

                    </li>

                    <li class = "relative parent">

                        <a href = "#" class = "flex justify-between md:inline-flex items-center hover:bg-stone-100 space-x-2 p-4">

                            <span>Usuario</span>

                            <svg xmlns = "http://www.w3.org/2000/svg" class = "w-4 h-4 fill-current pt-1" viewBox = "0 0 24 24">

                                <path d = "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>

                            </svg>

                        </a>

                        <ul class = "md:absolute top-full right-0 md:w-48 bg-white transition duration-300 md:rounded-b child">

                            <li>

                                <a href = "#" class = "flex hover:bg-stone-100 px-4 py-2">Perfil</a>

                            </li>

                            <li>

                                <a href = "#" class = "flex hover:bg-stone-100 px-4 py-2">Opciones</a>

                            </li>

                            <li>

                                <a href = "#" v-on:click = "logout" class = "flex hover:bg-stone-100 px-4 py-2">finalizar sesión</a>

                            </li>

                        </ul>

                    </li>

                </ul>

            </nav>

        </div>

    </header>

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

					this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newValue.token;

				}

			}

		},

		methods: {

			...mapActions(['setAuth', 'logout'])

		}

	}

</script>

<style>

    .parent:hover .child {
        opacity: 1;
        height: auto;
        overflow: none;
        transform: translateY(0);
    }

    .child {
        opacity: 0;
        height: 0;
        overflow: hidden;
        transform: translateY(-10%);
    }

</style>

