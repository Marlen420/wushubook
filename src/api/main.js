import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { lastEvents, news, newsEvents } from './mock/doctorsMock'

let GetToken = localStorage.getItem('token')
const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        ContentType: 'application/json',
        // Authorization: `Bearer ${GetToken}`,
    }
})


export const getNewEvent = createAsyncThunk(
    'main/getNewEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('users')
            if (response.status != 200) {
                throw new Error("Server Error!")
            }
            console.log(newsEvents)
            // console.log("response:", response)
            return newsEvents
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getLastEvent = createAsyncThunk(
    'main/getLastEvent',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('users')
            if (response.status != 200) {
                throw new Error("Server Error!")
            }

            return lastEvents
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getNews = createAsyncThunk(
    'main/getNews',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('users')
            if (response.status != 200) {
                throw new Error("Server Error!")
            }

            return news
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })
