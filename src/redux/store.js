import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import bookmarkReducer from './bookmarkSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bookmark: bookmarkReducer,
  },
})