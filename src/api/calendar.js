import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';



export const getEventCalendar = createAsyncThunk(
    'calendar/getEventCalendar',
    async (_, { rejectWithValue }) => {
        try {
            console.log("hellloDis  ")
            const response = await API.get('/calendar');
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)



export const createNewEventCalendar = createAsyncThunk(
    'calendar/createNewEventCalendar',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.post('/calendar', data);
            return response.data
            // dispatch(getEventCalendar())
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)
