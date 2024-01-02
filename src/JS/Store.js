import { configureStore } from '@reduxjs/toolkit'
import  Taskslice from './TaskSlice'

export const store = configureStore({
  reducer: {task:Taskslice},
})