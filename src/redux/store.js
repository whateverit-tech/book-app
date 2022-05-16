import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/Pokemon'

import counterReducer from './counterSlice';
import bookmarkReducer from './bookmarkSlice';
import bookReducer from '../slice/book';
import pokemonReducer from '../slice/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bookmark: bookmarkReducer,
    book: bookReducer,
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch);