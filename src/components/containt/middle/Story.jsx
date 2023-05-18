import React from "react";
import { stories } from "../../../data";
import profile_img from "../../../images/profile_img.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Story = () => {
  const handleButton = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
      >
        {stories.map(({ id, img, name }) => (
          <SwiperSlide key={id}>
            <img src={img} alt={name} />
            <p>{name}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <form className="create_post">
        <div className="profile_img">
          <img src={profile_img} alt="profile img" />
        </div>
        <input type="text" placeholder="What do you think, Ramy?" />
        <button onClick={handleButton} className="btn btn_primary">
          Post
        </button>
      </form>
    </>
  );
};

export default Story;
