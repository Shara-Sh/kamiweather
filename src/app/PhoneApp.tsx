// import DailyForcast from "./components/DailyForcast";
import Header from "./components/Header";
// import HourlyForcast from "./components/HourlyForcast";
import Main from "./components/Main";
import WeatherInfo from "./components/WeatherInfo";

function PhoneApp() {
  return (
    <div className="vh-screen mx-auto flex w-11/12 flex-col justify-between p-5">
      <Header />
      <Main />
      <WeatherInfo />
      {/* <HourlyForcast /> */}
      {/* <DailyForcast /> */}
    </div>
  );
}

export default PhoneApp;
