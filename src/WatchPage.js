import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="col-span-11">
      <iframe
        className="p-2 ml-2"
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
