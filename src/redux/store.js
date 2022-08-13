import { configureStore } from '@reduxjs/toolkit'
import clubsSlice from './features/counter/clubsSlice';
import documentSlice from './features/counter/documentSlice';
import eventSlice from './features/counter/eventSlice';

import profileSlice from './features/counter/profileSlice'
import sportsmanSlice from './features/counter/sportsmanSlice';
import usersSlice from './features/counter/usersSlice';
import calendarSlice from './reducers/calendarSlice';
import chatSlice from './reducers/chatSlice';
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
        sportsman: sportsmanSlice,
        dialogs: dialodsSlice,
        calendar: calendarSlice,
        news: newsSlice,
        chat: chatSlice
    },
})