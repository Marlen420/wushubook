import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";


// Get sportsman achievement
export const getSportsmanAchievements = createAsyncThunk(
    'sportsman/getSportsmanAchievement',
    async(id, { rejectWithValue }) => {
        try {
            const response = await API.get('/achievements/get-by-sportsman/' + id);
            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    }
)