import userReducer from '@/app/user/userSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user:userReducer
  },
})