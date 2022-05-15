import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: [],
  value: [],
}

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    increment: (state, action) => {
      if(!state.id.includes(action.payload.id)) {
        state.id.push(action.payload.id);
        state.value.push({isFavorited: true, ...action.payload});
      }
    },
    decrement: (state, action) => {
      if(state.id.includes(action.payload.id)) {
        state.value = state.value.filter(item => item.id !== action.payload.id);
        state.id = state.id.filter(item => item !== action.payload.id);
      }
    },
  },
})

export const { increment, decrement } = bookmarkSlice.actions

export default bookmarkSlice.reducer