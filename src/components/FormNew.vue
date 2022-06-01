

<template>

    <h1 class = "text-3xl text-blue-900 font-semibold mt-8 mb-16"> {{ mode ? 'Actualizar' : 'Registrar' }} empleado</h1>

    <div class = "grid grid-cols-3 gap-8">

        <form @submit.prevent = "submit">

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

<script lang = "ts" setup>

    import { ref, computed, watch } from 'vue'
    import { useRouter } from 'vue-router'
    import { IEmployee } from '../interfaces/constants'
    import api from '../services/api'

    import InputNew from '@/components/InputNew.vue'
    import ButtonNew from '@/components/ButtonNew.vue'

    const router = useRouter()

    const props = defineProps<{mode: IEmployee | null}>()

    const form = ref({
        names: '',
        job: ''
    })

    const edit = computed(() => props.mode)

    watch(edit, () => {

        if(edit.value) {

            form.value.names = edit.value.names
            form.value.job = edit.value.job

        }

    }, { immediate: true })

    const submit = async () => {

        if(!edit.value) {

            await api.post('/employees', form.value)

        } else {

            await api.put('/employees/'+edit.value.id, form.value)

        }

        router.push('/employees')

    }

</script>

