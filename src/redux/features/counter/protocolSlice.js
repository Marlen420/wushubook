import { createSlice } from '@reduxjs/toolkit';
import { formProtocolByEventExtra, getProtocolByEventExtra } from '../../extraReducers/protocolExtraReducer';


export const counterSlice = createSlice({
    name: 'protocol',
    initialState: {
        protocolList: [],
        status: 'Active',
        error: null,
    },
    extraReducers: {
        ...getProtocolByEventExtra,
        ...formProtocolByEventExtra,
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
})


export const {
    setStatus,
    setError
} = counterSlice.actions;

export default counterSlice.reducer;