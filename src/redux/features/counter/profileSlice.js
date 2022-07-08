import { createSlice } from '@reduxjs/toolkit'
import { signupExtraReducers, forgotPasswordExtraReducers, setLoginExtra, setUpdateUserExtra, checkTokenExtra, setNewPasswordExtra, setConfirmStatusExtra } from '../../extraReducers/loginExtraReducer';


export const counterSlice = createSlice({
    name: 'profile',
    initialState: {
        login: {
            isLogged: false,
            role: 'unauthorized'
        },
        status: 'Active',
        error: null,
        checkTmp: null
    },
    reducers: {
        setError: (state, action) => state.error = action.payload,
    },
    extraReducers: {
        ...signupExtraReducers,
        ...forgotPasswordExtraReducers,
        ...setLoginExtra,
        ...setUpdateUserExtra,
        ...checkTokenExtra,
        ...setNewPasswordExtra,
        ...setConfirmStatusExtra,
    }
})


// Action creators are generated for each case reducer function
export const {
    setError,
} = counterSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
// }

export default counterSlice.reducer