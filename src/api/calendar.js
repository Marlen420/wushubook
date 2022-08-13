import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';
import { handleAlertDelete, handleAlertEdit, handleAlertPost } from './informingAlert';




export const getEventCalendar = createAsyncThunk(
    'calendar/getEventCalendar',
    async (_, { rejectWithValue }) => {
        try {

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
        console.log("postApi")
        try {
            const response = await API.post('/calendar', data);
            if (response.status >= 200 && response.status <= 299) {
                handleAlertPost('Мероприятия было успешно создана')
            }
            return response.data

        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const editEventCalendar = createAsyncThunk(
    'calendar/editEventCalendar',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            console.log("data: ", data)
            const response = await API.patch(`/calendar/${data.id}`, data);
            if (response.status >= 200 && response.status <= 299) {
                handleAlertEdit('Мероприятия было успешно  редактировано')
            }
            dispatch(getEventCalendar())

        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

export const deleteEventCalendar = createAsyncThunk(
    'calendar/deleteEventCalendar',
    async (id, { rejectWithValue, dispatch }) => {
        try {

            const response = await API.delete(`/calendar/${id}`);
            if (response.status >= 200 && response.status <= 299) {
                dispatch(getEventCalendar())
                handleAlertDelete("Мероприятия было успешно удаленно")
            }

        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)