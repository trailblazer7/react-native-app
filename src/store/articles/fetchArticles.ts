import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchArticles = createAsyncThunk(
    'articles/fetch',
    async () => {
        const response = await fetch(
            'https://conduit.productionready.io/api/articles'
        )

        const data = await response.json()

        return data
    }
)