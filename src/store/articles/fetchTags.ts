import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../constants";


export const fetchTags = createAsyncThunk(
    'tags/fetch',
    async () => {
        const response = await fetch(
            `${API_ROOT}/tags`
        )

        const data = await response.json()

        return data
    }
)