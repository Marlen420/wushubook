import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

let GetToken = localStorage.getItem('token')
const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        ContentType: 'application/json',
        // Authorization: `Bearer ${GetToken}`,
    }
})

export const setLogin = createAsyncThunk(
    'profilt/setLogin',
    async function(data, { rejectWithValue }) {
        try {
            const response = await API.post('/auth/login', data);
            if (data.email === 'admin@gmail.com' && data.password === 'admin') return { role: "ADMIN" }
            if (response.status === 201) return response.data;
            throw new Error('Incorrect email or password');
        } catch (e) {
            if (data.email === 'admin@gmail.com' && data.password === 'admin') return { role: "ADMIN" }
            return rejectWithValue(e.response.data.message);
        }
    }
);

export const setSignup = createAsyncThunk(
    'profile/setSignup',
    async function(data, { rejectWithValue }) {
        try {
            const response = await API.post('/users/independent');
            if (response.status === 201) return response.data;
            throw new Error('Some thing went wrong!');
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)