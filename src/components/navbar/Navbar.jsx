import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import profile_img from "../../images/profile_img.webp";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">Social Media</h2>

        <div className="search_bar">
          <HiOutlineSearch />
          <input type="search" placeholder="search" />
        </div>

        <div className="content_right">
          <button className="btn btn_primary">Create</button>
          <div className="profile_img">
            <img src={profile_img} alt="profile img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
