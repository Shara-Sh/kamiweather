import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherSlice from "../slices/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
