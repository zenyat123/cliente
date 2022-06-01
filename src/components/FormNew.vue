

<script setup lang = "ts">

    import { ref } from 'vue'
    import { computed } from 'vue'
    import { watch } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    import InputNew from '@/components/InputNew.vue'
	import ButtonNew from '@/components/ButtonNew.vue'

    import { IEmployee } from '@/constants'
    
    const router = useRouter()

    const props = defineProps({

        mode: {

            type: Object as () => IEmployee | null,
            default: null

        }

    })

    const form = ref({

        names: '',
        job: ''

    })

    const edit = computed(() => {

        return props.mode

    })

    watch(edit, () => {

        form.value.names = edit.value.names
        form.value.job = edit.value.job

    })

    const employee = async() => {

        if(!edit.value) {

            axios.post('/api/employees', form.value)
                .then( () => {

                router.push('/employees')

            })
            
        }else {
            
            axios.put('/api/employees/' + edit.value.id, form.value)
                 .then( () => {

                router.push('/employees')

            })

        }

    }

</script>

<template>

    <h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16"> {{ mode ? 'Actualizar' : 'Registrar' }} empleado</h1>

    <div class = "grid grid-cols-3 gap-8">

        <form @submit.prevent = "employee">

            <div class = "col-span-1">

                <label for = "names">Nombres:</label>

                <input-new type = "text" v-model = "form.names" />

            </div>

            <div class = "col-span-1">

                <label for = "job">Puesto:</label>

                <input-new type = "text" v-model = "form.job" />

            </div>

            <div class = "col-span-3">

                <button-new class = "float-right my-8"> {{ mode ? 'Actualizar' : 'Registrar' }} </button-new>

            </div>

        </form>

    </div>

</template>

