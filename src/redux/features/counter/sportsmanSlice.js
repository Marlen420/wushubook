import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'sportsman',
    initialState: {
        status: 'Active',
        error: null,
    },
    extraReducers: {},
    reducers: {},
})


export const {} = counterSlice.actions;

export default counterSlice.reducer;