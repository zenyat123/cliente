

<template>

    <div class = "max-w-7xl mx-auto">

        <h1 class = "flex justify-center text-3xl text-blue-900 font-semibold mt-8 mb-16">Empleados</h1>

        <div class = "grid grid-cols-5 gap-5">

            <div v-for = "employee in employees" :key = "employee.id">

                <figure class = "rounded-lg bg-white shadow-xl my-3">

                    <div class = "bg-blue-100 rounded-t-lg h-48"></div>

                    <div class = "p-3">

                        <router-link :to = "{ name: 'Employee', params: { id: employee.id } }">

                            <span class = "font-medium text-lg text-blue-900 cursor-pointer"> {{ employee.names }} </span>

                        </router-link>

                        <h3> {{ employee.job }} </h3>

                    </div>

                </figure>

            </div>

        </div>

    </div>

</template>

<script lang = "ts" setup>

    import { ref, onMounted } from 'vue'
    import { IEmployee } from '../interfaces/constants'
    import employeeService from '../services/employeeService'

    const employees = ref<IEmployee[]>([])

    const getEmployees = async () => {

        const response = await employeeService.index()

        employees.value = response.data.data

    }

    onMounted(getEmployees)

</script>

