import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slices/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveChatMessage, setLiveChatMessage] = useState("");

  useEffect(() => {
    const liveChatInterval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(liveChatInterval);
    };
  }, [dispatch]);

  const handleSendChat = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Shivang Sharma",
        message: liveChatMessage,
      })
    );
    setLiveChatMessage("");
  };

  return (
    <>
      <div
        className={`w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse`}
      >
        {chatMessages.map((chatMsg, i) => {
          return (
            <ChatMessage
              key={i}
              name={chatMsg.name}
              message={chatMsg.message}
            />
          );
        })}
      </div>
      <form
        className="w-full ml-2 p-2 m-1 border border-black rounded-lg"
        onSubmit={handleSendChat}
      >
        <input
          className="ml-2 p-2 m-1 w-2/3 border border-black"
          type="text"
          value={liveChatMessage}
          onChange={(e) => setLiveChatMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
