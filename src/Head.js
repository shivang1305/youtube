import { useDispatch } from "react-redux";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG,
  YOUTUBE_LOGO_URL,
} from "./utils/constants";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          src={HAMBURGER_LOGO_URL}
          alt="hamburger-logo"
          className="h-8"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img alt="youtube-logo" src={YOUTUBE_LOGO_URL} className="h-8 mx-4" />
        </a>
      </div>
      <div className="grid grid-flow-col col-span-10">
        <input
          type="text"
          className="col-span-9 border-2 border-gray-400 rounded-l-full"
        />
        <button className="col-span-3 border-2 border-gray-400 p-2 w-16 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON_IMG} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
