

<template>

    <div class = "flex items-center justify-between bg-white px-4 py-3 sm:px-6">

        <div class = "flex flex-1 justify-between sm:hidden">

            <a href = "#" class = "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>

            <a href = "#" class = "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ml-3">Next</a>

        </div>

        <div class = "sm:flex sm:flex-1 sm:items-center sm:justify-between hidden">

            <div>

                <p class = "text-sm text-gray-700">

                    Mostrando <span class = "font-medium"> {{ links.from }} </span> a <span class = "font-medium"> {{ links.to }} </span> de <span class = "font-medium"> {{ links.total }} </span> resultados

                </p>

            </div>

            <div>

                <nav class = "isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label = "Pagination">

                    <template v-for = "(link, index) in links.links">

                        <div v-if = "link.url == null" :key = "index" class = "relative inline-flex items-center text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 px-4 py-2" v-html = "link.label"></div>

                        <a v-else :key = "'link-'+index" @click = "changePage(link.url)" class = "cursor-pointer relative inline-flex items-center text-sm font-semibold focus:z-20 px-4 py-2" :class = "link.active ? 'z-10 bg-blue-900 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900' : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:outline-offset-0'" v-html = "link.label"></a>

                    </template>

                </nav>

            </div>

        </div>

    </div>

</template>

<script lang = "ts" setup>

    import { defineProps } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const props = defineProps({

        links: {

            type: Object,
            required: true

        }

    })

    const changePage = (url: string) => {

        router.replace({

            query: { page: url.split('page=')[1] }

        })

    }

</script>

