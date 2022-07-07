import { createSlice } from '@reduxjs/toolkit'
import { loginExtraReducers, signupExtraReducers, forgotPasswordExtraReducers } from '../../extraReducers/loginExtraReducer';


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
        ...loginExtraReducers,
        ...signupExtraReducers,
        ...forgotPasswordExtraReducers
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