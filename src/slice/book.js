import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  favoriteId: [],
  favoriteList: [],
  status: null,
};

export const getBooks = createAsyncThunk(
  "books/retrieve",
  async (dispatch, getState) => {
    return await fetch("https://www.googleapis.com/books/v1/volumes?q=''").then(
      (res) => res.json()
    );
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if(!state.favoriteId.includes(action.payload.id)) {
        state.favoriteId.push(action.payload.id);
        state.favoriteList.push({
          ...action.payload,
          isFavorited: true
        });
        state.value.items = state.value.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavorited: true
            }
          }
          return {...item}
        });
      }
    },
    removeFavorite: (state, action) => {
      if(state.favoriteId.includes(action.payload.id)) {
        state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload.id);
        state.favoriteId = state.favoriteId.filter(item => item !== action.payload.id);
        
        state.value.items = state.value.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isFavorited: false
            }
          }
          return {...item}
        });
      }
    }
  },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = "success";
      state.value = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export const { addFavorite, removeFavorite } = bookSlice.actions

export default bookSlice.reducer;