import { createSlice } from '@reduxjs/toolkit'
import { getStatistics } from '../../api/statistics';


export const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
}

export const setLoading = (state) => {
    state.status = 'loading';
    state.error = null
}


export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        statistics: [],
        status: null,
        errors: {
            events: null,
            news: null,
        }
    },

    extraReducers: {
        [getStatistics.pending]: setLoading,

        [getStatistics.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.statistics = action.payload
        },
        [getStatistics.rejected]: setError,
    }
})


export default statisticsSlice.reducer
