import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: "",
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    actionChangeRoomId: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionChangeRoomId } = roomSlice.actions;

export default roomSlice.reducer;
