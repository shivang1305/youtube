import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg col-span-2">
      <ul className="ml-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="ml-5">
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="ml-5">
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default Sidebar;
