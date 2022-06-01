

import { defineStore } from 'pinia';
import { IAuth, ILogin } from '../interfaces/auth'
import { login, refreshToken, logout } from '../services/authService'

export const useAuthStore = defineStore('auth', {

    state: () => ({

        token: localStorage.getItem('access_token') || '',
        refreshToken: localStorage.getItem('refresh_token') || '',
        isAuthenticated: !!localStorage.getItem('access_token')

    }),

    actions: {

        async login(credentials: ILogin) {

            const response: IAuth = await login(credentials)
            this.setTokens(response)

        },

        async refreshAuthToken() {

            if(!this.refreshToken) throw new Error('sin refresh token')
            const response = await refreshToken({ refresh_token: this.refreshToken })
            this.token = response.access_token
            localStorage.setItem('access_token', response.access_token)

        },

        async logout() {

            await logout()
            this.clearTokens()

        },

        setTokens(response: IAuth) {

            this.isAuthenticated = true
            this.token = response.access_token
            this.refreshToken = response.refresh_token
            localStorage.setItem('access_token', response.access_token)
            localStorage.setItem('refresh_token', response.refresh_token)

        },

        clearTokens() {

            this.token = ''
            this.refreshToken = ''
            this.isAuthenticated = false
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')

        }

    }

})

