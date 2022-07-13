import { configureStore } from '@reduxjs/toolkit'
import eventSlice from './features/counter/eventSlice';
import newsSlice from './features/counter/newsSlice'
import profileSlice from './features/counter/profileSlice'
import usersSlice from './features/counter/usersSlice';
import mainSlice from './reducers/mainSlice'

// const middleware = getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
// });
export default configureStore({
    reducer: {
        profile: profileSlice,
        news: newsSlice,
        main: mainSlice,
        users: usersSlice,
        events: eventSlice,
    },
})