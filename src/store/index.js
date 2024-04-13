import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./features/auth/tokenSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      token: tokenSlice,
    },
  });
};
