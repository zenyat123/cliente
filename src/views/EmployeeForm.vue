

<template>

    <div class = "max-w-7xl mx-auto">
    
        <form-new :mode = "employee" />

    </div>

</template>

<script lang = "ts" setup>

    import { ref, onBeforeMount } from 'vue'
    import { useRoute } from 'vue-router'
    import { IEmployee } from '../interfaces/constants'
    import employeeService from '../services/employeeService'

    import FormNew from '@/components/FormNew.vue'

    const route = useRoute()

    const employee = ref<IEmployee | null>(null)

    onBeforeMount(async () => {

        if(route.params.id) {

            const response = await employeeService.show(route.params.id as string)

            employee.value = response.data.data

        }

    })

</script>

