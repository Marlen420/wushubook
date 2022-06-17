import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './features/counter/newsSlice'
import profileSlice from './features/counter/profileSlice'

export default configureStore({
  reducer: {
      profile: profileSlice,
      news: newsSlice
  },
})