import axios from 'axios'
export const API = axios.create({
    baseURL: 'http://192.168.0.149:5000/',
    headers: {
        ContentType: 'application/json',
        // Authorization: `Bearer ${GetToken}`,
    }
})
