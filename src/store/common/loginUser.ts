import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../constants";
import superagent from 'superagent';

export type UserType = {
    bio: string | null,
    email: string,
    username: string,
    token: string,
    image: string | null
} | null

type RegisterUserType = {
    username: string,
    email: string,
    password: string
}

type LoginUserType = {
    email: string,
    password: string
}

// LOGIN
export const loginUser = createAsyncThunk<UserType, LoginUserType>(

    'users/login',
    
    async ( userData:LoginUserType ) => {

        const response = await superagent.post(`${API_ROOT}/users/login`)
            .use(req => {
                if (userData) {
                    //req.set('authorization', `Token ${token}`
                }
            })
            .send({ user: { ...userData } })

        const user = await response.body.user

        console.log( 'User LOGGED IN: ', user );
        return user
    }
)

// REGISTER
export const registerUser = createAsyncThunk<UserType, RegisterUserType>(

    'users/register',
    
    async ( userData: RegisterUserType ) => {
        const response = await superagent.post(`${API_ROOT}/users`).send({ user: { ...userData } })

        const data = await response.body.payload.user
        return data
    }
)