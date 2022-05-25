import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    login: {
      isLogged: false,
      role: null
    },
    value: 0,
  },
  reducers: {
  },
})

// export const {} = counterSlice.actions

export default counterSlice.reducer;