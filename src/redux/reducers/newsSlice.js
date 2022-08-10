import { createSlice } from '@reduxjs/toolkit'
import { createNew, deleteNew, editNew, getNews, getNewsId } from '../../api/news';



export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        newsId: [],
        status: {
            createNewSatatus: null,
            newsStatus: null,
            newsIdStatus: null,
            deleteNew: null,
            editNew: null
        },

        errors: {
            createNewSatatusError: null,
            newsStatusError: null,
            newsIdStatusError: null,
            deleteNewError: null,
            editNewError: null
        },
    },

    extraReducers: {
        [getNews.pending]: (state) => {
            state.status.newsStatus = 'loading';
            state.errors.newsStatusError = null
        },
        [getNews.fulfilled]: (state, action) => {

            state.status.newsStatus = 'resolved';
            state.news = action.payload
        },
        [getNews.rejected]: (state, action) => {
            state.status.newsStatus = 'rejected';
            state.errors.newsStatusError = action.payload
        },


        [getNewsId.pending]: (state) => {
            state.status.newsIdStatus = 'loading';
            state.errors.newsIdStatusError = null
        },

        [getNewsId.fulfilled]: (state, action) => {

            state.status.newsIdStatus = 'resolved';
            state.newsId = action.payload

        },
        [getNewsId.rejected]: (state, action) => {
            state.status.newsIdStatus = 'rejected';
            state.errors.newsIdStatusError = action.payload
        },




        [createNew.pending]: (state, action) => {
            state.status.createNewSatatus = 'Creating new';
            state.errors.createNewSatatusError = null
        },

        [createNew.fulfilled]: (state, action) => {

            state.status.createNewSatatus = 'Created new';
            state.news = [action.payload, ...state.news]

        },
        [createNew.rejected]: (state, action) => {
            state.status.createNewSatatus = 'Rejected create new';
            state.createNewSatatusError.error = action.payload;
        },






        [deleteNew.pending]: (state, action) => {
            state.status.deleteNew = 'Deleting new';
            state.error = null
        },

        [deleteNew.fulfilled]: (state, action) => {
            console.log("stataeActiom: ", state.payload)
            state.status.deleteNew = 'Deleted new';
            state.error = null
        },
        [deleteNew.rejected]: (state, action) => {
            state.status.deleteNew = 'Rejected Delete new';
            state.error = action.payload;
        },




        [editNew.pending]: (state, action) => {
            state.status.editNew = 'Editing new';
            state.error = null
        },
        [editNew.fulfilled]: (state, action) => {
            state.status.editNew = 'Edited new';
            state.news = [action.payload, ...state.news]
            state.error = null
        },
        [editNew.rejected]: (state, action) => {
            state.status.editNew = 'Rejected Edit new';
            state.error = action.payload;
        },
    }

})

export default newsSlice.reducer
