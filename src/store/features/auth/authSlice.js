import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    actionChangeUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionChangeUserInfo } = authSlice.actions;

export default authSlice.reducer;
