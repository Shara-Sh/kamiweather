import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../redux/slices/weatherSlice";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store/store";
import conditionStyles from "../../utils/conditionStyles";

function Header() {
  const weather = useSelector((state: RootState) => state.weather);
  const [iconPath, setIconPath] = useState("/assets/svg/menu.svg");
  const dispatch = useDispatch();

  function dev() {
    dispatch(addLocation("Yerevan"));
  }

  useEffect(() => {
    if (weather && weather.icon) {
      const newIconPath =
        conditionStyles[weather.icon as keyof typeof conditionStyles].menu ||
        "/assets/svg/menu.svg";
      setIconPath(newIconPath);
    }
  }, [weather]);

  return (
    <div className="text-end">
      <button className="w-10" onClick={dev}>
        <img src={iconPath} alt="menu" />
      </button>
    </div>
  );
}

export default Header;
