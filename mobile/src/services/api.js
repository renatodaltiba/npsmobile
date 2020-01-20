import axios from 'axios'

const api = axios.create({
    baseURL: 'http://191.232.53.126:3333',
})

export default api