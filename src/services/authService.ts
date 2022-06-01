

import api from './api'
import { IAuth, ILogin, IRefresh } from '../interfaces/auth'

export const login = (data: ILogin): Promise<IAuth> => {

    return api.post('/login', data).then(response => response.data)

}

export const refreshToken = (data: IRefresh): Promise<IAuth> => {

    return api.post('/refresh', data).then(response => response.data)

}

export const logout = (): Promise<void> => {

    return api.post('/logout')

}

