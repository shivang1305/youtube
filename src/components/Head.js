import { useDispatch } from "react-redux";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG,
  YOUTUBE_LOGO_URL,
} from "../utils/constants";
import { toggleMenu } from "../redux/slices/appSlice";
import SignInButton from "./SignInButton";
import SearchContainer from "./SearchContainer";

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
      <SearchContainer />
      <div className="col-span-1">
        <img alt="user-icon" src={USER_ICON_IMG} className="h-8" />
      </div>
      <SignInButton />
    </div>
  );
};

export default Head;
