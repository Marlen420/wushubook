
import { createAsyncThunk } from '@reduxjs/toolkit'
import { array } from './mock/index'
import API from '../utils/axiosConfig';


export const getClubsStatistics = createAsyncThunk(
    'statistics/getClubsStatistics',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('clubs')

            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })



export const getStatistics = createAsyncThunk(
    'statistics/getStatistics',
    async function (_, { rejectWithValue }) {
        try {
            // const response = await API.get(`statistics`)
            // if (response.status !== 200) {
            // throw new Error("Server Error!")
            // }

            return array
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })