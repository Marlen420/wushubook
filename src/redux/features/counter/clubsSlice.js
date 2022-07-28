import { createSlice } from '@reduxjs/toolkit'
import { documents_mock } from '../../../api/mock';
import { createClubExtra, getAllClubsExtra } from '../../extraReducers/clubExtraReducer';


export const counterSlice = createSlice({
    name: 'clubs',
    initialState: {
        status: 'Active',
        error: null,
        data: [
            { id: 0, name: 'Черный Дракон', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }, { id: 2, name: 'Андреев Андрей Андреевич' }], rating: 4, color: '#6786F4' },
            { id: 1, name: 'Оранжевая кошка', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }], rating: 4, color: '#F46767' },
            { id: 2, name: 'Скорпион', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }], rating: 4, color: '#94F6F6' },
            { id: 3, name: 'Печать спящего дракона', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }], rating: 4, color: '#F4EF67' },
            { id: 4, name: 'Шаолинь', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }], rating: 4, color: '#BF67F4' },
            { id: 5, name: 'Панда', trainers: [{ id: 1, name: 'Иванов Иван Иванович' }], rating: 4, color: '#67F497' },
        ],
    },
    extraReducers: {
        ...createClubExtra,
        ...getAllClubsExtra,
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