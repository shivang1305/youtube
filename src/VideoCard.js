import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;

  return (
    <div className="w-80 mx-6 my-6 bg-white text-black rounded-lg overflow-hidden hover:cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="p-2">
        <li className="font-bold">{title}</li>
        <li className="font-semibold">{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
