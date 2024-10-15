import { useSelector } from "react-redux";
import GetWeather from "../../api/GetWeather";
import { RootState } from "../../redux/store/store";
import { useEffect, useState } from "react";
import conditionStyles from "../../utils/conditionStyles";

function Main() {
  const weather = useSelector((state: RootState) => state.weather);
  const [iconPath, setIconPath] = useState("/assets/svg/default.svg");

  useEffect(() => {
    if (weather && weather.icon) {
      const newIconPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles].icon ||
        "/assets/svg/default.svg";
      setIconPath(newIconPath);
    }
  }, [weather]);

  return (
    <>
      <GetWeather />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">{weather.location}</h1>
        {/* <h3 className="text-xl">Iran</h3> */}
        <img src={iconPath} alt="condition" className="size-20" />
        <h2 className="text-7xl font-semibold">{Math.floor(weather.temp)}°c</h2>
      </div>
    </>
  );
}

export default Main;
