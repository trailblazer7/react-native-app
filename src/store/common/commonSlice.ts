import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks'
import { loginUser, registerUser, UserType } from './loginUser'

type onLoadPropsType = {
    token: string | null,
    user?: any 
}

type initialStateType = {
    appName: string,
    token: string | null,
    loading: 'idle' | 'loading' | 'finished', 
    currentUser: any,
    error: string,
    redirectTo?: string
}

const initialState: initialStateType = {
    appName: '',
    token: null,
    loading: 'idle',
    currentUser: {},
    error: ''
}


const commonSlice = createSlice({

  name: 'common',
  initialState: initialState,
  reducers: {

      appLoad(state, action: PayloadAction<onLoadPropsType>) {
        const {payload} = action

        state.token = payload.token ? payload.token : null 
        state.currentUser = payload.user ? payload.user : null 
      }
  },

  extraReducers: (builder) => {

    // User registration
    builder.addCase(registerUser.pending, (state) => {
        state.loading = 'loading'
    })
    .addCase(registerUser.fulfilled, (state, payload) => {
        state.currentUser = payload
        state.loading = 'finished'
    })
    .addCase(registerUser.rejected, (state, payload) => {
        const {error} = payload

        state.loading = 'finished'
        if ( error.message ) state.error = error.message
        console.log('Error on user register: ', error.message)
    })

    // User login
    builder.addCase(loginUser.pending, (state) => {
        state.loading = 'loading'
    })
    .addCase(loginUser.fulfilled, (state, { payload }) => {

        if (payload?.token) {
            (async () => {
                try {
                    await AsyncStorage.setItem('jwt', payload.token )
                    
                    state.token = payload.token
                    state.currentUser = payload
                    state.redirectTo = 'Home'
                } catch (error) {
                    
                }
            })()
        }

        state.currentUser = payload
        state.loading = 'finished'
    })
    .addCase(loginUser.rejected, (state, payload) => {
        const {error} = payload

        state.loading = 'finished'
        if ( error.message ) state.error = error.message
        console.log('Error on user register: ', error.message)
    })
}
});


export const { appLoad } = commonSlice.actions

export default commonSlice.reducer