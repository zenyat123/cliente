

import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/auth'

const api = axios.create({

    baseURL: 'http://integrar.dev/api'

})

// Interceptor de respuesta
api.interceptors.response.use(

    response => response,

    async error => {

        const originalRequest = error.config

        if(error.response?.status === 401 && !originalRequest._retry) {

            originalRequest._retry = true

            try {

                const auth = useAuthStore()
                await auth.refreshAuthToken()

                originalRequest.headers['Authorization'] = 'Bearer ' + auth.token

                return api(originalRequest)

            } catch (rError) {

                const auth = useAuthStore()
                await auth.logout()

                router.push('/')

                return Promise.reject(rError)

            }

        }

        return Promise.reject(error)

    }

)

// Interceptor de petición
api.interceptors.request.use(config => {

    const auth = useAuthStore()

    if(auth.token) {

        config.headers['Authorization'] = 'Bearer ' + auth.token

    }

    return config

})

export default api

