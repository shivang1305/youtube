import { useDispatch } from "react-redux";
import { hamburgerLogoURL, userIcon, youtubeLogoURL } from "./utils/constants";
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
          src={hamburgerLogoURL}
          alt="hamburger-logo"
          className="h-8"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img alt="youtube-logo" src={youtubeLogoURL} className="h-8 mx-4" />
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
        <img alt="user-icon" src={userIcon} className="h-8" />
      </div>
    </div>
  );
};

export default Head;
