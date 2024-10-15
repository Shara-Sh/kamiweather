import { useSelector } from "react-redux";
import { formatUnixTimestamp } from "../../utils/getTime";
import { RootState } from "../../redux/store/store";
import { useEffect, useState } from "react";
import conditionStyles from "../../utils/conditionStyles";

function WeatherInfo() {
  const weather = useSelector((state: RootState) => state.weather);
  const sunriseTime = formatUnixTimestamp(weather.sunrise, false);

  const [sunrisePath, setSunrisePath] = useState("/assets/svg/sunrise.svg");
  const [windPath, setWindPath] = useState("/assets/svg/wind.svg");
  const [tempreturePath, setTempreturePath] = useState(
    "/assets/svg/tempreture.svg",
  );

  useEffect(() => {
    if (weather && weather.icon) {
      const newSunriseIconPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles].sunrise ||
        "/assets/svg/sunrise.svg";
      setSunrisePath(newSunriseIconPath);

      const newWindIconPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles].wind ||
        "/assets/svg/wind.svg";
      setWindPath(newWindIconPath);

      const newTempretureIconPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles]
          .tempreture || "/assets/svg/tempreture.svg";
      setTempreturePath(newTempretureIconPath);
    }
  }, [weather]);

  return (
    <table>
      <tbody>
        <tr className="flex">
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img src={sunrisePath} alt="sunrise" className="size-14" />
            <p className="font-semibold">{sunriseTime}</p>
          </td>
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img src={windPath} alt="wind" className="size-14 p-3" />
            <p className="font-semibold">{weather.wind} mph</p>
          </td>
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img src={tempreturePath} alt="tempreture" className="size-14" />
            <p className="font-semibold">
              {Math.floor(weather.high)}°c / {Math.floor(weather.low)}°c
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherInfo;
