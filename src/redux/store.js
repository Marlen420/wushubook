import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import newsSlice from './features/counter/newsSlice'
import profileSlice from './features/counter/profileSlice'
import mainSlice from './reducers/mainSlice'

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});
export default configureStore({
    reducer: {
        profile: profileSlice,
        news: newsSlice,
        main: mainSlice

    },
})