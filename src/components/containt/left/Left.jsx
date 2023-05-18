import React, { createContext, useEffect, useState } from "react";
import profile_img from "../../../images/profile_img.webp";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaAffiliatetheme } from "react-icons/fa";
import Notifications from "./Notifications";
import Theme from "./Theme";
import MessageRight from "./MessageRight";

export const Containts = createContext();

const Left = () => {
  const [isShowNotifications, setIsShowNotifications] = useState(false);
  const [isShowMessages, setIsShowMessages] = useState(false);
  const [isShowTheme, setIsShowTheme] = useState(false);

  useEffect(() => {
    const menuItem = document.querySelectorAll(".menu_item");
    const messages = document.querySelector(".messages");
    const message = document.querySelector(".message");
    const numberMessages = document.querySelector(".message_Requests span");
    const search = document.querySelector(
      ".messages .search_bar input[type='search']"
    );

    const changeActiveItem = () => {
      menuItem.forEach((item) => {
        item.classList.remove("active");
        messages.style.boxShadow = "none";
      });
    };
    menuItem.forEach((item) => {
      item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        setIsShowNotifications(false);
        setIsShowTheme(false);
        setIsShowMessages(false);
      });
    });

    message.addEventListener("click", () => {
      messages.style.boxShadow = "0 0 1rem var(--color-primary)";
      search.focus();
      numberMessages.innerHTML = "(0)";
    });
  }, []);

  return (
    <Containts.Provider value={{ isShowTheme, setIsShowTheme }}>
      <a className="profile">
        <div className="profile_img">
          <img src={profile_img} alt="profile img" />
        </div>
        <div className="handel">
          <h4>ramy Ibrahim</h4>
          <p className="text_muted">@ramy</p>
        </div>
      </a>

      <div className="sidebar">
        <ul>
          <li className="menu_item active">
            <span>
              <AiOutlineHome />
            </span>
            <h3>Home</h3>
          </li>
          <li className="menu_item">
            <span>
              <MdOutlineTravelExplore />
            </span>
            <h3>Explore</h3>
          </li>
          <li
            className="menu_item"
            onClick={() => setIsShowNotifications(!isShowNotifications)}
          >
            <span>
              <IoMdNotificationsOutline />
              <small className="notification_count">9+</small>
            </span>
            <h3>Notifications</h3>
            {isShowNotifications ? <Notifications /> : <></>}
          </li>
          <li
            className="menu_item message"
            onClick={() => setIsShowMessages(!isShowMessages)}
          >
            <span>
              <FiMessageSquare />
              <small className="notification_count">6</small>
            </span>
            <h3>Messages</h3>
            {isShowMessages ? <MessageRight /> : <></>}
          </li>
          <li className="menu_item">
            <span>
              <BsFillBookmarkStarFill />
            </span>
            <h3>Bookmarks</h3>
          </li>
          <li className="menu_item">
            <span>
              <TbDeviceDesktopAnalytics />
            </span>
            <h3>Analytics</h3>
          </li>
          <li
            className="menu_item"
            onClick={() => setIsShowTheme(!isShowTheme)}
          >
            <span>
              <FaAffiliatetheme />
            </span>
            <h3>Theme</h3>
          </li>
          <li className="menu_item">
            <span>
              <FiSettings />
            </span>
            <h3>Settings</h3>
          </li>
        </ul>
      </div>

      <button className="btn btn_primary">Create Post</button>

      {isShowTheme ? <Theme /> : <></>}
    </Containts.Provider>
  );
};

export default Left;
