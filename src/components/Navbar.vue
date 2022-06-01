

<script setup>

    import { ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()

    const auth = ref(store.state.auth)

    store.watch(() => store.state.auth, (value) => {

        auth.value = value

    })

    const logout = () => store.dispatch('logout')

</script>

<template>

    <header class = "border-b">

        <div class = "max-w-7xl mx-auto" v-if = "auth">

            <nav class = "flex items-center relative px-4">

                <div class = "text-lg text-stone-700 font-bold md:py-0 py-4">

                    <router-link to = "/posts">Company</router-link>

                </div>

                <ul class = "md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 md:px-2 ml-auto">

                    <li>

                        <router-link to = "/posts" class = "flex md:inline-flex items-center hover:bg-stone-100 p-4" exact-active-class = "active">

                            <span>Publicaciones</span>

                        </router-link>

                    </li>

                    <li>

                        <router-link to = "/employees" class = "flex md:inline-flex items-center hover:bg-stone-100 p-4" exact-active-class = "active">

                            <span>Empleados</span>

                        </router-link>

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

                                <router-link to = "/employee-form" class = "flex hover:bg-stone-100 px-4 py-2">Opciones</router-link>

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

</template>

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

    .active {
        background: rgb(245 245 244);
    }

</style>

