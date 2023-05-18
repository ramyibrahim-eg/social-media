import { BiEdit } from "react-icons/bi";
import Message from "../right/Message";
import { useEffect } from "react";

const MessageRight = () => {
  useEffect(() => {
    const Allmessages = document.querySelectorAll(".messages_right");

    Allmessages.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }, []);

  return (
    <div className="messages_right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <BiEdit />
        </div>

        <div className="search_bar">
          <input type="search" placeholder="Search messages" />
        </div>
        <Message />
      </div>
    </div>
  );
};

export default MessageRight;
