

export interface IAuth {
    token_type: string
    expires_in: number
    access_token: string
    refresh_token: string
}

export interface ILogin {
    email: string
    password: string
}

export interface IRefresh {
    refresh_token: string
}

