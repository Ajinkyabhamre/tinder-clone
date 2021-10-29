import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Kristen",
      image:
        "https://img.cinemablend.com/filter:scale/quill/a/6/4/8/7/0/a6487042aa1ad0a86ee78ed50bfb3ab185c08cba.jpg?mw=600",
      message: "Wassup ?",
    },

    {
      message: "hiii ",
    },
  ]);
  const handlesend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with Erçel on 10/10/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__inputcontainer">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__field"
          type="text "
          placeholder="Type a message..."
        />
        <button onClick={handlesend} className="chatScreen__inputbutton">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
