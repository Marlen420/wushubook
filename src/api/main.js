import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


const API = axios.create({
    baseURL: 'http://167.172.33.23:5000/',
    headers: {
        ContentType: 'application/json',
        // Authorization: `Bearer ${GetToken}`,
    }
})



const All_Last_Events =
{
    NotRegistering_Date_Last_Event: [

        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 25, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 22, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },

        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 25, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 22, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
    ],

    Registering_Date_Last_Event: [
        {
            id: 1,

            title: "Чемпионат среди детей",
            city: "Бишкек",
            allDataTime: '22.07.2022, 9:00' // Здесь надо передать и время и дата
        },
        {
            id: 2,

            title: "Чемпионат среди детей",
            city: "Бишкек",
            allDataTime: '22.07.2022, 9:00' // Здесь надо передать и время и дата
        },
    ]
}



const All_New_Events =
{
    NotRegistering_Date_News_Event: [

        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 25, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 22, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },

        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 25, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
        {
            id: 2,
            title: "Чемпионат среди детей",
            onlyDay: 22, // Здесь нужно передать только день проведение мероприятии
            onlyMonth: 'март', // Здесь только месяц проведение мероприятии
            startTimeFinish: '9:00-12:00', // Здесь время,  начало мероприятии и конец
            city: "Бишкек",
            adress: 'Национальный Центр детей и юношества «Сейтек»' // Адрес где будет походить  мероприятия
        },
    ],

    Registering_Date_NewEvent: [
        {
            id: 1,

            title: "Чемпионат среди детей",
            city: "Бишкек",
            allDataTime: '22.07.2022, 9:00' // Здесь надо передать и время и дата
        },
        {
            id: 2,

            title: "Чемпионат среди детей",
            city: "Бишкек",
            allDataTime: '22.07.2022, 9:00' // Здесь надо передать и время и дата
        },
    ]
}



export const getNewEvent = createAsyncThunk(
    'main/getNewEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('events/newEvents')
            if (response.status !== 200) {
                throw new Error("Server Error!")
            }

            //             return response.data
            return All_New_Events

        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getLastEvent = createAsyncThunk(
    'main/getLastEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('/events/pastEvents')
            if (response.status !== 200) {
                throw new Error("Server Error!")
            }

            return All_Last_Events
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getNews = createAsyncThunk(
    'main/getNews',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('news')
            if (response.status !== 200) {
                throw new Error("Server Error!")
            }

            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })
