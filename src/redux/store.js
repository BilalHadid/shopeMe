import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import SignUpReducer from "./signupSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: SignUpReducer,
  },
});
