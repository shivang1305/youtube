import React from "react";
import { USER_ICON_IMG } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex mt-2 bg-gray-100 rounded-lg p-2">
      <img className="h-12 w-12" alt="user" src={USER_ICON_IMG} />
      <div className="px-3">
        <p className="font-bold text-lg">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
