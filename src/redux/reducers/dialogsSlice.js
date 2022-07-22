import { createSlice } from '@reduxjs/toolkit'
import { getDialogs } from '../../api/dialogs';

export const dialodsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        items: [],
        status: null,
        errors: null
    },

    extraReducers: {
        [getDialogs.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null
        },

        [getDialogs.fulfilled]: (state, action) => {
            state.status = 'resolved';
            console.log("a: ", action.payload)
            state.items = action.payload
        },

        [getDialogs.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

    }

})
export default dialodsSlice.reducer