import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";
import { defineAnimation } from "react-native-reanimated";

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: {
    username: "",
    userEmail: "",
    phone: "",
    Password: "",
    psConform: "",
  },
  reducers: {
    username: (state, action) => {
      state.username = action.payload;
    },
    userEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    phone: (state, action) => {
      state.phone = action.payload;
    },
    Password: (state, action) => {
      state.Password = action.payload;
    },
    psConform: (state, action) => {
      state.psConform = action.payload;
    },
  },
});

export const { username, userEmail, phone, Password, psConform } =
  SignUpSlice.actions;
export default SignUpSlice.reducer;
