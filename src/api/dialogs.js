import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";

// Get messages in current dialog
export const getCurrentDialog = createAsyncThunk(
    "dialogs/getDialogMessages",
    async(params, { rejectWithValue }) => {
        try {
            const response = await API.get('/get-messages', {
                params
            });
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)

// Get list of dialogs
export const getDialogs = createAsyncThunk(
    "dialogs/getDialogs",
    async function(_, { rejectWithValue }) {
        try {
            const response = await API.get("/get-my-groups");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);