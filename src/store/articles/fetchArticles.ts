import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../constants";


export const fetchArticles = createAsyncThunk(
    'articles/fetch',
    async () => {
        const response = await fetch(
            `${API_ROOT}/articles`
        )

        const data = await response.json()

        return data
    }
)