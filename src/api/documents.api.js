import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";


// Upload document
export const uploadDocument = createAsyncThunk(
    'documents/upload',
    async({ localId, data, callback }, { rejectedWithValue }) => {
        try {
            const response = await API.post('/docs', data, {
                onUploadProgress: callback
            });
            return { localId, response: response.data };
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)

// Get all documents
export const getAllDocuments = createAsyncThunk(
    'documents/get',
    async(_, { rejectedWithValue }) => {
        try {
            const response = await API.get('/docs');
            return response.data;
        } catch (e) {
            return rejectedWithValue(e.response.data.message);
        }
    }
)