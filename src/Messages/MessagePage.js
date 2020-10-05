import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

import "./MessagePage.css";

import { messages as theMessages } from "./Messages";

function MessagePage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Zendaya",
      image: "https://myhero.com/images/guest/g290937/hero112533/zendaya.jpg",
      message: "Heyyyy",
    },
    {
      name: "Zendaya",
      image: "https://myhero.com/images/guest/g290937/hero112533/zendaya.jpg",
      message: "What's up",
    },
    {
      message: "What's up?",
    },
  ]);

  function handleSend(e) {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  }

  return (
    <div className="messagePage">
      <p className="messagePage__match">
        YOU MATCHED WITH ZENDAYA ON 10/10/2019
      </p>

      {messages.map((message) =>
        message.name ? (
          <div className="messagePage__messages">
            <Avatar
              className="messagePage_avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="messagePage__text">{message.message}</p>
          </div>
        ) : (
          <div className="messagePage__messages">
            <p className="messagePage__userText">{message.message}</p>
          </div>
        )
      )}

      <form className="messagePage__sendMessage">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="messagePage__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="messagePage__sendButton"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default MessagePage;
