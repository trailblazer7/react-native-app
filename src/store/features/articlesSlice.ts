import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleData {
    id: string,
    title: string,
    description: string
}

const initialArticles = [
    {id: '1', title: 'First Article', description: 'first description'},
    {id: '2', title: 'Second Article', description: 'second description'},
    {id: '3', title: 'Theard Article', description: 'theard description'}
]


const articlesSlice = createSlice({
    
    name: 'articles',

    initialState: {
        articles: initialArticles as ArticleData[],
        loading: false
    },

    reducers: {

        add(state) {
            state.articles.push({
                id: '4', title: 'Addeddddd Article', description: 'adddeddddd description'
            })
        },

        remove(state, action: PayloadAction<string>) {
            const filtered = state.articles.filter( ({ id }) => id !== action.payload )

            state.articles = filtered
        }
    }
})

export const { add, remove } = articlesSlice.actions 

export default articlesSlice.reducer