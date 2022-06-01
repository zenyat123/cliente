

import api from './api'
import { IEmployee } from '../interfaces/constants'

export default {

    index() {

        return api.get('/employees')

    },

    show(id: number | string) {

        return api.get('/employees/'+id)

    },

    save(employee: IEmployee) {

        return api.post('/employees', employee)

    },

    update(id: number | string, employee: IEmployee) {

        return api.put('/employees/'+id, employee)

    },

    delete(id: number | string) {

        return api.delete('/employees/'+id)

    }

}

