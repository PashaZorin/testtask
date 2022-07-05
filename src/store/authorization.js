import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk(
  "autorization/getToken",
  async function (action, { rejectWithValue }) {
    try {
      const respons = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );

      const data = await respons.json();

      if (data.success) return data.token;
    } catch (error) {
      rejectWithValue(error.messege);
    }
  }
);

const autorization = createSlice({
  name: "todos",
  initialState: {
    token: "",
    pending: "false",
  },
  reducers: {
    getToken(state, action) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: {
    [getToken.pending]: (state, action) => ({ ...state, pending: true }),
    [getToken.fulfilled]: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    [getToken.rejected]: (state, action) =>
      console.log(action.payload, "rejected"),
  },
});
//export const { getTodos } = todoSlice.actions;
export default autorization.reducer;
