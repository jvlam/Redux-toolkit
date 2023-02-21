import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counterSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },

})  