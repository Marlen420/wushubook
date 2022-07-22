import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/axiosConfig';





export const getNews = createAsyncThunk(
    'news/getNews',
    async function (_, { rejectWithValue }) {
        try {
            const response = await API.get('news')
            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })


export const createNew = createAsyncThunk(
    'news/createNew',
    async function (data, { rejectWithValue, dispatch }) {
        try {
            const response = await API.post('news', data)
            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const getNewsId = createAsyncThunk(
    'news/getNewsId',

    async function ({ id, navigations }, { rejectWithValue }) {
        try {
            const response = await API.get(`news/getById/${id}`)

            navigations('/moreNews')
            return response.data

        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })

export const deleteNew = createAsyncThunk(
    'news/deleteNew',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            console.log("idNews: ", id)
            const response = await API.delete(`news/${id}`)

            dispatch(getNews())
            // return response.data


        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })


export const editNew = createAsyncThunk(
    'news/editNew',
    async function (data, { rejectWithValue }) {

        try {
            let userData = {};
            data.forEach((value, key) => {
                userData[key] = value;


            });

            const response = await API.patch(`news/${userData.id}`, userData)

            return response.data
        }
        catch (error) {
            return rejectWithValue(error.message)
        }

    })