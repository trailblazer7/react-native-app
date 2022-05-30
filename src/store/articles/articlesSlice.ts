import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchArticles } from "./fetchArticles";


interface AuthorInterface {
    bio: any,
    following: boolean,
    image: string,
    username: string
}

export interface ArticleInterface {
    author: AuthorInterface,
    body: string,
    createdAt: string,
    description: string,
    favorited: boolean,
    favoritesCount: number,
    slug: string,
    tagList: string[],
    title: string,
    updatedAt: string
}


const articlesSlice = createSlice({
    
    name: 'articles',

    initialState: {
        articles: [] as ArticleInterface[],
        loading: false
    },

    reducers: {

        add(state) {
            //state.articles.push()
            console.log( 'Add article: ', state );
        },

        remove(state, action: PayloadAction<string>) {
            //const filtered = state.articles.filter( ({ id }) => id !== action.payload )
            //state.articles = filtered
        }
    },


    extraReducers: (builder) => {

        builder.addCase(fetchArticles.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
            
            state.loading = false
            state.articles = state.articles.concat(payload.articles)
        })

        builder.addCase(fetchArticles.rejected, (state, {payload}) => {

            state.loading = false
            console.log('Error on fetch articles: ', payload)
        })
    }
})

export const { add, remove } = articlesSlice.actions 

export default articlesSlice.reducer