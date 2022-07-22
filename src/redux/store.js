import { configureStore } from '@reduxjs/toolkit'
import clubsSlice from './features/counter/clubsSlice';
import documentSlice from './features/counter/documentSlice';
import eventSlice from './features/counter/eventSlice';

import profileSlice from './features/counter/profileSlice'
import usersSlice from './features/counter/usersSlice';
import dialodsSlice from './reducers/dialogsSlice';

import mainSlice from './reducers/mainSlice'
import newsSlice from './reducers/newsSlice';
import statisticsSlice from './reducers/statisticsSlice';


export default configureStore({
    reducer: {
        profile: profileSlice,

        main: mainSlice,
        users: usersSlice,
        events: eventSlice,
        statistics: statisticsSlice,
        documents: documentSlice,
        clubs: clubsSlice,
        dialogs: dialodsSlice,
        news: newsSlice
    },
})