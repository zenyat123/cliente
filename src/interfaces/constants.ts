

export interface IEmployee {
    id: number
    names: string
    job: string
}

export interface IUser {
    id: number
    name: string
    email: string
}

export interface ICategory {
    id: number
    name: string
}

export interface IPost {
    id: number
    title: string
    url: string
    resume: string
    content: string
    status: string
    category_id: number | string
    category?: any
    user?: any
}

