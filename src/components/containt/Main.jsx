import React from "react";
import Left from "./left/Left";
import Story from "./middle/Story";
import FeedsPosts from "./middle/FeedsPosts";
import { BiEdit } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import Message from "./right/Message";
import Request from "./right/Request";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="left">
          <Left />
        </div>

        <div className="middle">
          <Story />
          <FeedsPosts />
        </div>

        <div className="right">
          <div className="messages">
            <div className="heading">
              <h4>Messages</h4>
              <BiEdit />
            </div>

            <div className="search_bar">
              <HiOutlineSearch />
              <input type="search" placeholder="Search messages" />
            </div>

            <div className="category">
              <h6 className="active">primary</h6>
              <h6>General</h6>
              <h6 className="message_Requests">
                Requests<span>(7)</span>
              </h6>
            </div>
            <Message />
          </div>
          <Request />
        </div>
      </div>
    </main>
  );
};

export default Main;
