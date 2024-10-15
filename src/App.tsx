import { useEffect, useState } from "react";
import PhoneApp from "./app/PhoneApp";
import WebsiteApp from "./website/WebsiteApp";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import conditionStyles from "../src/utils/conditionStyles";

function App() {
  const [screenWidth, setScreenWidth] = useState(Number);
  const weather = useSelector((state: RootState) => state.weather);
  const [bgColorPath, setBgColorPath] = useState("");
  const [textColorPath, setTextColorPath] = useState("");

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (weather && weather.icon) {
      const newBgColorPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles].bgColor ||
        "#ffffff";
      const newTextColorPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles]
          .textColor || "#ffffff";

      setBgColorPath(newBgColorPath);
      setTextColorPath(newTextColorPath);
    }
  }, [weather]);

  useEffect(() => {
    if (bgColorPath) {
      document.body.style.backgroundColor = bgColorPath;
    }

    if (textColorPath) {
      document.body.style.color = textColorPath;
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [bgColorPath, textColorPath]);

  return <>{screenWidth < 712 ? <PhoneApp /> : <WebsiteApp />}</>;
}

export default App;
