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
    reducers: {
        setCurrentDialog: (state, action) => {
            state.currentDialog = { id: action.payload }
        }
    },
    extraReducers: {
        ...getDialogsExtra,

    }

})

export const {
    setCurrentDialog
} = dialodsSlice.actions;

export default dialodsSlice.reducer