

import api from './api'
import { IPost } from '../interfaces/constants'

export default {

    index(search = '') {

        return api.get('/posts?filter[title]='+search)

    },

    show(id: number | string) {

        return api.get('/posts/'+id+'?included=category,user')

    },

    save(post: IPost) {

        return api.post('/posts', post)

    },

    update(id: number | string, post: IPost) {

        return api.put('/posts/'+id, post)

    },

    delete(id: number | string) {

        return api.delete('/posts/'+id)

    }

}

