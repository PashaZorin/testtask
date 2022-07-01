import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataGet = createAsyncThunk(
  "todos/fetchDataGet",
  async function (action, { rejectWithValue }) {
    try {
      const respons = await fetch(`${action}`);
      const data = await respons.json();
      if (!data.ok) return data;
    } catch (error) {
      rejectWithValue(error.messege);
    }
  }
);
export const fetchDataPost = createAsyncThunk(
  "todos/fetchDataPost",
  async function (action, { getState }) {
    console.log(action, "todos/fetchDataPost");
    console.log(getState());
    const respons = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        headers: {
          //'Authorization': "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action),
      }
    );
    const data = await respons.json();
    console.log(data, "data,todos/fetchDataPost");
    return data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    cards: [],
    pending: false,
    _URL: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`,
    disabledBtn: false,
  },
  reducers: {
    getTodos(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: {
    [fetchDataGet.pending]: (state, action) => ({ ...state, pending: true }),
    [fetchDataGet.fulfilled]: (state, action) => {
      return {
        ...state,
        pending: false,
        cards: [...state.cards, ...action.payload.users],
        _URL: action.payload.links.next_url,
        disabledBtn: action.payload.total_pages === action.payload.page && true,
      };
    },
    [fetchDataGet.rejected]: (state, action) =>
      console.log(action.payload, "rejected"),
    [fetchDataPost.rejected]: (state, action) =>
      console.log(action.payload, "rejected"),

    [fetchDataPost.pending]: (state, action) =>
      console.log(action.payload, "action/pending"),
    [fetchDataPost.fulfilled]: (state, action) => {
      console.log(action.payload, "fulfilled");
    },
  },
});
export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
