import { useSelector } from "react-redux";
import { formatUnixTimestamp } from "../../utils/getTime";
import { RootState } from "../../redux/store/store";

function WeatherInfo() {
  const weather = useSelector((state: RootState) => state.weather);
  const sunriseTime = formatUnixTimestamp(weather.sunrise, false);

  return (
    <table>
      <tbody>
        <tr className="flex">
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img
              src="/assets/svg/sunrise.svg"
              alt="sunrise"
              className="size-14"
            />
            <p className="font-semibold">{sunriseTime}</p>
          </td>
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img
              src="/assets/svg/wind.svg"
              alt="wind"
              className="size-14 p-3"
            />
            <p className="font-semibold">{weather.wind} mph</p>
          </td>
          <td className="flex w-1/3 flex-col items-center justify-center">
            <img
              src="/assets/svg/tempreture.svg"
              alt="tempreture"
              className="size-14"
            />
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
