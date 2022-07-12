import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import mainSlice from './reducers/mainSlice'
import statisticsSlice from './reducers/statisticsSlice';


const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});

export default configureStore({
    reducer: {
        main: mainSlice,
        statistics: statisticsSlice



    },


})
