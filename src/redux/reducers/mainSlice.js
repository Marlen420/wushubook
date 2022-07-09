import { createSlice } from '@reduxjs/toolkit'
import { getLastEvent, getNewEvent, getNews, getNewsId } from '../../api/main'


export const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
}

export const setLoading = (state) => {
    state.status = 'loading';
    state.error = null
}


export const toolkitSlice = createSlice({
    name: 'main',
    initialState: {
        news: [],
        newsId: [],
        lastEvents: [],
        newsEvents: [],
        status: null,
        errors: {
            events: null,
            news: null,
        }
    },

    extraReducers: {
        [getNewEvent.pending]: setLoading,

        [getNewEvent.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.newsEvents = action.payload
        },
        [getNewEvent.rejected]: setError,



        [getLastEvent.pending]: setLoading,

        [getLastEvent.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.lastEvents = action.payload
        },
        [getLastEvent.rejected]: setError,


        [getNews.pending]: setLoading,

        [getNews.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.news = action.payload
        },
        [getNews.rejected]: setError,




        [getNewsId.pending]: setLoading,

        [getNewsId.fulfilled]: (state, action) => {

            state.status = 'resolved';
            state.newsId = action.payload

        },
        [getNewsId.rejected]: setError,

    }


})


export default toolkitSlice.reducer
