import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

// Delete club by id
export const deleteClub = createAsyncThunk(
    'club/deleteClub',
    async(id, { rejectedWithValue }) => {
        try {
            const response = await API.delete('/clubs/' + id);
            return response.data;
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)

// Get club by id
export const getClubById = createAsyncThunk(
    'club/getClubById',
    async(id, { rejectedWithValue }) => {
        try {
            const response = await API.get('/clubs/getById/' + id);
            return response.data;
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)

// Get all clubs
export const getAllClubs = createAsyncThunk(
    'club/getAllClubs',
    async(_, { rejectedWithValue }) => {
        try {
            const response = await API.get('/clubs');
            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)

// Create new club
export const createClub = createAsyncThunk(
    'club/createClub',
    async(data, { rejectedWithValue }) => {
        try {
            const response = await API.post('/clubs', data);
            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)