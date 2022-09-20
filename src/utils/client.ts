import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.hugofabricio.com'
})

export default instance
