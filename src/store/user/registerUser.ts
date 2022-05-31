import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROOT } from "../../constants";
import superagent from 'superagent';


type UserReturn = {
    bio: string | null,
    email: string,
    username: string,
    token: string,
    image: string | null
}

type UserRegister = {
    username: string,
    email: string,
    password: string
}


export const registerUser = createAsyncThunk<UserReturn, UserRegister>(
    'users/register',
    async ( userData: UserRegister ) => {

        const response = await superagent.post(`${API_ROOT}/users`).send({ user: { ...userData } })

        const data = await response.body.payload.user

        return data
    }
)