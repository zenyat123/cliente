

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

<script lang = "ts" setup>

    import { ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { IEmployee } from '../interfaces/constants'
    import api from '../services/api'

    const route = useRoute()
    const router = useRouter()

    const employee = ref<IEmployee>({} as IEmployee)

    const getEmployee = async () => {

        const response = await api.get('/employees/'+route.params.id)

        employee.value = response.data.data

    }

    const remove = async (id: number) => {

        if(confirm('¿Confirma la eliminación del identificador '+id+'?')) {

            await api.delete('/employees/'+id)

            router.push('/employees')

        }

    }

    onMounted(() => {

        getEmployee()

    })

</script>

