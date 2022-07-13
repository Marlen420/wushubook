import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';

// Delete event
export const deleteEvent = createAsyncThunk(
    'event/deleteEvent',
    async (id, { rejectWithValue }) => {
        try {
            const response = await API.delete('/events/' + id);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

// Create event
export const createNewEvent = createAsyncThunk(
    'event/createNewEvent',
    async (data, { rejectWithValue }) => {
        try {
            const response = await API.post('/events', data);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

// Past events list
export const setPastEventsList = createAsyncThunk(
    'event/setPastEventsList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('/events/pastEvents');
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

// Upcoming events list
export const setNewEventsList = createAsyncThunk(
    'event/setNewEventsList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await API.get('/events/newEvents');
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)