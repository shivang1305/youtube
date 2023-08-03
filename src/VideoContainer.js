import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();

    // console.log(jsonData.items);

    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
