import { createSlice } from '@reduxjs/toolkit'
import { documents_mock } from '../../../api/mock';
import { createClubExtra, getAllClubsExtra, getClubByIdExtra } from '../../extraReducers/clubExtraReducer';


export const counterSlice = createSlice({
    name: 'clubs',
    initialState: {
        status: 'Active',
        error: null,
        data: [],
        currentClub: null,
    },
    extraReducers: {
        ...createClubExtra,
        ...getAllClubsExtra,
        ...getClubByIdExtra,
    },
    reducers: {
        deleteClub: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        }
    },
})


export const {
    deleteDocument,
} = counterSlice.actions;

export default counterSlice.reducer