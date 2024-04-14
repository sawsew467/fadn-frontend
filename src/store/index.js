import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import appSlice from "./features/app/appSlice";
import roomSlice from "./features/room/roomSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      app: appSlice,
      room: roomSlice,
    },
  });
};
