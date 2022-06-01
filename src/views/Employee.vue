

<script setup lang = "ts">

    import { ref } from 'vue'
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    import { IEmployee } from '@/constants'

    const { params } = useRoute()

    const router = useRouter()

    const employee = ref<IEmployee[]>([])

    onMounted(async() => {

        getEmployee()

    })

    const getEmployee = async() => {

        axios.get('/api/employees/' + params.id)
             .then(response => {

                employee.value = response.data.data

             })

    }

    const remove = async(id:number) => {

        const response = confirm('confirma la eliminación del identificador ' + id)

        if(response) {

            axios.delete('/api/employees/' + id)
                .then( () => router.push('/employees') )

        }

    }

</script>

<template>

    <div class = "max-w-7xl mx-auto">

        <div class = "bg-blue-100 rounded-lg h-96 my-3"></div>

        <p class = "font-semibold text-blue-900 text-3xl mt-3 mb-1"> {{ employee.names }} </p>

        <p class = "font-semibold"> {{ employee.job }} </p>

        <p class = "mt-8">

            Lorem ipsum dolitun, situn ametin consectetur adipisicing elit. Possimus quae, eos reiciendis sole quia accusantium maxime in veniam quaerat numquam roindae nihil ab iusto voluptatibus cotintur fugit labore yuis.

        </p>

        <div class = "flex mt-3">

            <router-link :to = "{ name: 'EmployeeForm', params: { id: employee.id } }" class = "font-semibold mr-3">editar</router-link>

            <button @click = "remove(employee.id)" class = "font-semibold">eliminar</button>

        </div>

    </div>

</template>

