import { createSlice } from '@reduxjs/toolkit'
import { getDialogs } from '../../api/dialogs';
import { getDialogsExtra } from '../extraReducers/dialogExtraReducer';

export const dialodsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        items: [],
        status: 'Active',
        errors: null,
        dialogs: [],
        currentDialog: null
    },

    extraReducers: {
        ...getDialogsExtra,

    }

})
export default dialodsSlice.reducer