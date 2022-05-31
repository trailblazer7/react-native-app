import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./registerUser";


const registerUserSlice = createSlice({
    
    name: 'user',

    initialState: {
        user: {},
        loading: false,
        error: false
    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        })

        builder.addCase(registerUser.fulfilled, (state, data) => {

            // payload: user: 

            state.loading = false
            state.user = data
        })

        builder.addCase(registerUser.rejected, (state, { error }) => {

            state.loading = false
            state.error = true
            console.log('Error on user register: ', error.message)
        })
    }
})

export default registerUserSlice.reducer