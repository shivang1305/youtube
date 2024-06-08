import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Shivang Sharma",
    text: "This is a test comment for youtube app.",
    replies: [],
  },
  {
    name: "Shivang Sharma",
    text: "This is a test comment for youtube app.",
    replies: [
      {
        name: "Shivang Sharma",
        text: "This is a test comment for youtube app.",
        replies: [],
      },
      {
        name: "Shivang Sharma",
        text: "This is a test comment for youtube app.",
        replies: [
          {
            name: "Shivang Sharma",
            text: "This is a test comment for youtube app.",
            replies: [
              {
                name: "Shivang Sharma",
                text: "This is a test comment for youtube app.",
                replies: [],
              },
              {
                name: "Shivang Sharma",
                text: "This is a test comment for youtube app.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shivang Sharma",
    text: "This is a test comment for youtube app.",
    replies: [],
  },
  {
    name: "Shivang Sharma",
    text: "This is a test comment for youtube app.",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
