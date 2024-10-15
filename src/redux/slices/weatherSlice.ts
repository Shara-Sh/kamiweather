import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "Tehran",
  // location: "Yerevan",
  temp: 0,
  condition: "",
  dayornight: "",
  icon: "",
  sunrise: "",
  wind: "",
  high: 0,
  low: 0,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addTemp: (state, action) => {
      state.temp = action.payload;
    },
    addCondition: (state, action) => {
      state.condition = action.payload;
    },
    addDayOrNight: (state, action) => {
      state.dayornight = action.payload;
    },
    addIcon: (state, action) => {
      state.icon = action.payload;
    },
    addSunrise: (state, action) => {
      state.sunrise = action.payload;
    },
    addWind: (state, action) => {
      state.wind = action.payload;
    },
    addHigh: (state, action) => {
      state.high = action.payload;
    },
    addLow: (state, action) => {
      state.low = action.payload;
    },
  },
});

export const {
  addLocation,
  addTemp,
  addCondition,
  addDayOrNight,
  addIcon,
  addSunrise,
  addWind,
  addHigh,
  addLow,
} = weatherSlice.actions;

export default weatherSlice.reducer;
