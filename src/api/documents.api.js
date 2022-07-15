import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../utils/axiosConfig";


// export const uploadDocument = createAsyncThunk(
//     'documents/upload',
//     async (data, {rejectedWithValue}) => {
//         try {
//             const response = await API.post('/')
//         }
//     }
// )