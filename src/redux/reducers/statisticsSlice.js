import { createSlice } from '@reduxjs/toolkit'
import { getClubs, getClubss, getClubsStatistics, getStatistics } from '../../api/statistics';


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
        clubs: [],
        status: {
            getClubsStatus: null
        },
        errors: {
            getClubsError: null
        }
    },

    extraReducers: {
        //get Club
        [getClubsStatistics.pending]: (state, action) => {
            state.status.getClubsStatus = 'Getting clubs';
            state.errors.getClubsError = null
        },
        [getClubsStatistics.fulfilled]: (state, action) => {
            state.status.getClubsStatus = 'Geted clubs';
            state.errors.ClubsError = null
            state.clubs = action.payload
        },
        [getClubsStatistics.rejected]: (state, action) => {
            state.status.getClubsStatus = 'Rejected get clubs'
            state.errors.getClubsError = action.payload
        },








        // [getStatistics.pending]: setLoading,

        // [getStatistics.fulfilled]: (state, action) => {
        //     state.status = 'resolved';
        //     state.statistics = action.payload
        // },
        // [getStatistics.rejected]: setError,
    }
})


export default statisticsSlice.reducer
