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

  async function (action, { rejectWithValue }) {
    console.log(action, "actions================================");
    try {
      const respons = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          headers: {
            Token: `${action.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fails: action.userInfo }),
        }
      );
      const data = await respons.json();
      return data;
    } catch (error) {
      rejectWithValue(error.messege);
    }
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
      console.log(action, "rejected"),

    [fetchDataPost.pending]: (state, action) =>
      console.log(action.payload, "action/pending"),
    [fetchDataPost.fulfilled]: (state, action) => {
      console.log(action.payload, "fulfilled");
      console.log(action, "ok-----------------------------------");
    },
  },
});
export const { getTodos } = todoSlice.actions;
export default todoSlice.reducer;
