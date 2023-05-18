import React from "react";
import { request } from "../../../data";
const Request = () => {
  return (
    <div className="friend_requests">
      <h4>Requests</h4>
      <div className="request">
        {request.map(({ id, img_Profile, name, time_request }) => (
          <div key={id}>
            <div className="info">
              <div className="profile_img">
                <img src={img_Profile} />
              </div>
              <div>
                <h5>{name}</h5>
                <p className="text_muted">{time_request}</p>
              </div>
            </div>
            <div className="action">
              <button className="btn btn_primary">Accept</button>
              <button className="btn">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
