import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: null,
};

export const getPokemons = createAsyncThunk(
  "pokemons/retrieve",
  async (dispatch, getState) => {
    return await fetch("https://pokeapi.co/api/v2/pokemon/").then(
      (res) => res.json()
    );
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getPokemons.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPokemons.fulfilled]: (state, action) => {
      state.status = "success";
      state.value = action.payload;
    },
    [getPokemons.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default pokemonSlice.reducer;