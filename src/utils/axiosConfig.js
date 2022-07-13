import axios from "axios";

const token = localStorage.getItem('jwt-token') || null;

const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        ContentType: 'application/json',
    }
})

API.interceptors.request.use(
    async req => {
        req.headers['Authorization'] = `Bearer ${token}`;
        return req;
    }
)

export default API;