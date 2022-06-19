import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'profile',
    initialState: {
        login: {
            isLogged: false,
            role: 'unauthorized'
        },
    },
    reducers: {
        setLogin: (state) => {
            state.login.isLogged = true;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },

    },
})


// Action creators are generated for each case reducer function
export const {
    incrementByAmount,
    setLogin,
    setRole
} = counterSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
// }

export default counterSlice.reducer