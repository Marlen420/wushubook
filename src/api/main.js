
import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';



export const getNewEvent = createAsyncThunk(
    'main/getNewEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get(`events?start=${new Date()}end=${2022 - 12 - 31}`)


            return response.data

        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getLastEvent = createAsyncThunk(
    'main/getLastEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get(`events?end=${new Date()}`)


            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

