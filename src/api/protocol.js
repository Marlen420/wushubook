import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

// Form protocol by event
export const formProtocolByEvent = createAsyncThunk(
    'protocol/formProtocolByEvent',
    async(id, { rejectWithValue, dispatch }) => {
        try {
            const response = await API.get('/subgroups/' + id).then(() => dispatch(getProtocolByEvent()));
            console.log(id);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);

// Get protocols by event
export const getProtocolByEvent = createAsyncThunk(
    'protocol/getProtocolByEvent',
    async(id, { rejectWithValue }) => {
        try {
            const response = await API.get('/subgroups/get-by-event/' + id);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
);