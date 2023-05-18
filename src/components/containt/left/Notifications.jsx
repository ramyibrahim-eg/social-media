import React, { useEffect } from "react";
import { notifications_popup } from "../../../data";

const Notifications = () => {
  useEffect(() => {
    const Allmessages = document.querySelectorAll(".notifications_popup");

    Allmessages.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }, []);

  return (
    <div className="notifications_popup">
      {notifications_popup.map(({ id, img, name, disc, times }) => (
        <div key={id}>
          <div className="profile_img">
            <img src={img} alt={name} />
          </div>
          <div className="notifications_body">
            <b>{name}</b>
            {disc}
            <small className="text_muted">{times}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
