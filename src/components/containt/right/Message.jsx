import React from "react";
import { message } from "../../../data";

const Message = () => {
  return (
    <>
      {message.map(({ id, img_Profile, message, new_messages, active }) => (
        <div className="message" key={id}>
          <div className="profile_img">
            <img src={img_Profile} />
            {active}
          </div>
          <div className="message_body">
            <h5>{message}</h5>
            <p className="text_bold">{new_messages}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;
