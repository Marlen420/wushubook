import axios from 'axios'
export const API = axios.create({
    baseURL: 'http://167.172.33.23:5000/',
    headers: {
        ContentType: 'application/json',
        // Authorization: `Bearer ${GetToken}`,
    }
})
