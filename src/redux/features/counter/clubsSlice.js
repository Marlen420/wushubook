import { createSlice } from '@reduxjs/toolkit'
import { documents_mock } from '../../../api/mock';


export const counterSlice = createSlice({
    name: 'clubs',
    initialState: {
        status: 'Active',
        error: null,
        data: [
            { id: 0, title: 'Черный Дракон', trainers: ['Иванов Иван Иванович', 'Андреев Андрей Андреевич'], rating: 4, color: '#6786F4' },
            { id: 1, title: 'Оранжевая кошка', trainers: ['Иванов Иван Иванович'], rating: 4, color: '#F46767' },
            { id: 2, title: 'Скорпион', trainers: ['Иванов Иван Иванович'], rating: 4, color: '#94F6F6' },
            { id: 3, title: 'Печать спящего дракона', trainers: ['Иванов Иван Иванович'], rating: 4, color: '#F4EF67' },
            { id: 4, title: 'Шаолинь', trainers: ['Иванов Иван Иванович'], rating: 4, color: '#BF67F4' },
            { id: 5, title: 'Панда', trainers: ['Иванов Иван Иванович'], rating: 4, color: '#67F497' },
        ],
    },
    extraReducers: {},
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