import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/slices/searchSlice";

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // make an API call after every key press
    // if the time difference between 2 API calls is < 200ms
    // decine the API call

    const searchTimer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else getSearchSuggestions();
    }, 200);

    return () => {
      // this clear timeout kills the current timer each time the component rerenders
      clearTimeout(searchTimer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();

    setSuggestions(jsonData[1]);

    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  return (
    <div className="col-span-10 px-10">
      <div className="grid grid-flow-col">
        <input
          type="text"
          className="col-span-9 border-2 border-gray-400 rounded-l-full px-7"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onScroll={() => setShowSuggestions(false)}
        />
        <button className="col-span-3 border-2 border-gray-400 p-2 w-16 rounded-r-full">
          Search
        </button>
      </div>
      {showSuggestions && (
        <div className="absolute z-10 bg-white px-5 py-2 w-[43rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion) => {
              return (
                <li key={suggestion} className="py-2 px-2 hover:bg-gray-200">
                  {suggestion}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
