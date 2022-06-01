

<script setup lang = "ts">

    import { ref } from 'vue'
    import { onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'
    import axios from 'axios'

    import FormNew from '@/components/FormNew.vue'
    import { IEmployee } from '@/constants'

    const { params } = useRoute()

    const employee = ref<null | IEmployee>(null)

    onBeforeMount(async() => {

        if(params.id) {

            axios.get('/api/employees/' + params.id)
                 .then(response => {

                employee.value = response.data.data

            })

        }

    })

</script>

<template>

    <div class = "max-w-7xl mx-auto">
    
        <form-new :mode = "employee" />

    </div>

</template>

