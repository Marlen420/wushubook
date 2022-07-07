import { createSlice } from '@reduxjs/toolkit'
import { deleteUser } from '../../../api/users.api';
import { ROLES_FIND } from '../../../const/user_roles';
import { deleteUserExtra, setUsersListExtra } from '../../extraReducers/usersExtraReducer';


export const counterSlice = createSlice({
    name: 'users',
    initialState: {
        user: {
            status: "Active",
            error: null,
            deleteId: null
        },
        users: {
            data: null,
            current: [],
            page: 0,
            total: 0,
            status: 'Active',
            error: null
        },
        trainer: {
            data: null,
            current: [],
            page: 0,
            total: 0,
            status: 'Active',
            error: null
        },
        secretary: {
            data: null,
            current: [],
            page: 0,
            total: 0,
            status: 'Active',
            error: null
        },
        judge: {
            data: null,
            current: [],
            page: 0,
            total: 0,
            status: 'Active',
            error: null
        },
        selected: [],
    },
    extraReducers: {
        ...setUsersListExtra,
        ...deleteUserExtra,
    },
    reducers: {
        setSelectAll: (state, action) => {
            state.selected = [];
            state.selected = action.payload;
        },
        setSelectItem: (state, action) => {
            state.selected = [...state.selected, action.payload];
        },
        setUnselectAll: (state) => {
            state.selected = [];
        },
        setUnselectItem: (state, action) => {
            state.selected = state.selected.filter((item) => item.id !== action.payload.id);
        },
        setCurrent: (state, action) => {
            if (state[ROLES_FIND[action.payload.roleFilter]].data) {
                state[ROLES_FIND[action.payload.roleFilter]].current = state[ROLES_FIND[action.payload.roleFilter]].data.slice((action.payload.page * 10 - 10), (action.payload.page * 10));
            }
        },
        setDeleteId: (state, action) => {
            // Set confirm modal true
            state.user.deleteId = action.payload;
        },
        deleteUsers: (state, action) => {
            // Check for selected users and delete picked or selected items;
            if (state.selected.length > 0) {} else {
                deleteUser(action.payload);
            }
        }
    },
})

export const {
    setSelectAll,
    setSelectItem,
    setUnselectAll,
    setUnselectItem,
    setCurrent,
    deleteUsers,
    setDeleteId,
} = counterSlice.actions;

export default counterSlice.reducer;