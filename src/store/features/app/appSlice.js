import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetingId: "bcxo-sapw-utk0",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    actionChangeMeetingId: (state, action) => {
      state.meetingId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionChangeMeetingId } = appSlice.actions;

export default appSlice.reducer;
