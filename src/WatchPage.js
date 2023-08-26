import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className="flex flex-col">
      <div className="px-5 flex">
        <div className="w-full h-full">
          <iframe
            width={SCREEN_WIDTH * (2 / 3)}
            height={SCREEN_HEIGHT * (2 / 3)}
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoFocus={true}
          ></iframe>
        </div>
        <div className="w-full h-full">
          <LiveChat />
        </div>
      </div>

      <div className="w-2/3">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
