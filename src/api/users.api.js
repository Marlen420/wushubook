import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

export const setNewUser = createAsyncThunk(
    'users/setNewUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await API.post('/users/referral', data);
            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.respones.data.message);
        }
    }
)

export const setUsersList = createAsyncThunk(
    'users/setUsersList',
    async function(role, { rejectWithValue }) {
        try {
            const response = await API.get(`/users?role=${role}`);
            return {
                ...response.data,
                role: role === '' ? 'users' : role
            };
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'users/deletUsers',
    async(id, { rejectWithValue }) => {
        try {
            const response = await API.delete(`/users/${id}`);
            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);