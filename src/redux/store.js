import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/Pokemon'

import counterReducer from '../slice/counter';
import bookmarkReducer from '../slice/bookmark';
import bookReducer from '../slice/book';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bookmark: bookmarkReducer,
    book: bookReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch);