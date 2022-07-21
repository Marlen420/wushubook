import { createAsyncThunk } from '@reduxjs/toolkit'
import { array } from './mock/index'

export const getStatistics = createAsyncThunk(
    'statistics/getStatistics',
    async function(_, { rejectWithValue }) {
        try {
            // const response = await API.get(`statistics`)
            // if (response.status !== 200) {
            // throw new Error("Server Error!")
            // }

            return array
        } catch (error) {
            return rejectWithValue(error.message)
        }

    })