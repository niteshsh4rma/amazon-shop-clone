import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:5001/clone-d2780/us-central1/api' // the api (cloud fuction) url
})

export default instance