import { createSlice } from '@reduxjs/toolkit'
import { setLogin } from '../../../api/login';


export const counterSlice = createSlice({
    name: 'profile',
    initialState: {
        login: {
            isLogged: false,
            role: 'unauthorized'
        },
        status: 'Active',
        error: null
    },
    reducers: {},
    extraReducers: {
        [setLogin.pending]: (state) => {
            state.status = 'Loading';
            state.error = null;
        },
        [setLogin.fulfilled]: (state, action) => {
            state.status = "Resolved";
            state.login.isLogged = true;
            state.login.role = action.payload.role;
        },
        [setLogin.rejected]: (state, action) => {
            state.status = "Rejected";
            state.error = action.payload;
        }
    }
})


// Action creators are generated for each case reducer function
export const {
    incrementByAmount,
} = counterSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
// }

export default counterSlice.reducer