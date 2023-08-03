import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;

  return (
    <div className="py-2 m-2 w-72 shadow-md">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="p-2">
        <li className="font-bold">{title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
