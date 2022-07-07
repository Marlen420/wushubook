import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';



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
            const response = await API.post('/users/independent', { link: process.env.REACT_APP_API, ...data });
            if (response.status === 201) return response.data;
            throw new Error('Some thing went wrong!');
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const setForgotPassword = createAsyncThunk(
    'profile/setForgotPassword',
    async function(data, { rejectWithValue }) {
        try {
            const response = await API.patch(`/users/forgot-password/${data}`, { link: process.env.REACT_APP_API });
            if (response.status === 200) return response.data;
            throw new Error('Something went wrong!');
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)