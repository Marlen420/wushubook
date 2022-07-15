import { createSlice } from '@reduxjs/toolkit'
import { documents_mock } from '../../../api/mock';


export const counterSlice = createSlice({
    name: 'document',
    initialState: {
        status: 'Active',
        error: null,
        data: documents_mock || [],
    },
    extraReducers: {},
    reducers: {
        deleteDocument: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        }
    },
})


export const {
    deleteDocument,
} = counterSlice.actions;

export default counterSlice.reducer