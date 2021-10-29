import React from "react";
import Chat from "./Chat";
import "./Chats.css";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="kristen"
        message="Hey ❤️"
        timestamp="40 sec ago"
        profilePic="https://img.cinemablend.com/filter:scale/quill/a/6/4/8/7/0/a6487042aa1ad0a86ee78ed50bfb3ab185c08cba.jpg?mw=600"
      />
      <Chat
        name="Katrina"
        message="Hey ❤️"
        timestamp="40 sec ago"
        profilePic="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/04/pjimage-1-1556514034.jpg"
      />
      <Chat
        name="Hande erçel"
        message="Hey ❤️"
        timestamp="40 sec ago"
        profilePic="https://wallpapercave.com/wp/wp4914144.jpg"
      />
    </div>
  );
}

export default Chats;
