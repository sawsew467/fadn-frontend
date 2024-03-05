import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import appSlice from "./features/app/appSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      app: appSlice,
    },
  });
};
