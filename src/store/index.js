import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authorizationReducer from "./authorization";

export default configureStore({
  reducer: {
    todos: todoReducer,
    authorization: authorizationReducer,
  },
});
