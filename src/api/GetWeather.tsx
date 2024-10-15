import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import {
  addTemp,
  addCondition,
  addIcon,
  addSunrise,
  addWind,
  addHigh,
  addLow,
} from "../redux/slices/weatherSlice";

interface weatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    main: string;
    icon: string;
    description: string;
  }>;
  sys: {
    sunrise: number;
  };
  wind: {
    speed: number;
  };
}

function GetWeather() {
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState<weatherData | null>(null);
  // const [city, setCity] = useState(weather.location);
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API;

  useEffect(() => {
    const city = weather.location;
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        )
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [weather.location]);

  useEffect(() => {
    if (weatherData && weatherData.main) {
      console.log(weatherData);
      dispatch(addTemp(weatherData.main.temp));
      dispatch(addCondition(weatherData.weather[0].main));
      dispatch(addIcon(weatherData.weather[0].icon));
      dispatch(addSunrise(weatherData.sys.sunrise));
      dispatch(addWind(weatherData.wind.speed));
      dispatch(addHigh(weatherData.main.temp_max));
      dispatch(addLow(weatherData.main.temp_min));
      // console.log(weatherData);
    }
  }, [weatherData, dispatch]);
  return null;
}

export default GetWeather;
