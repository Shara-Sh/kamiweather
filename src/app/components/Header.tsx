import { useDispatch } from "react-redux";
import { addLocation } from "../../redux/slices/weatherSlice";

function Header() {
  const dispatch = useDispatch();

  function dev() {
    dispatch(addLocation("Yerevan"));
  }

  return (
    <div className="text-end">
      <button className="w-10" onClick={dev}>
        <img src="/assets/svg/menu.svg" alt="menu" />
      </button>
    </div>
  );
}

export default Header;
