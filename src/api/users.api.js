import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

export const setUsersList = createAsyncThunk(
    'users/setUsersList',
    async function(role, { rejectWithValue }) {
        try {
            const response = await API.get(`/users?role=${role}`);
            console.log(response.data);
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