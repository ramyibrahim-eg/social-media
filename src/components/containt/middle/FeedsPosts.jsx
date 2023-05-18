import React, { useEffect } from "react";
import { feeds_post } from "../../../data";

const FeedsPosts = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {feeds_post.map(
        ({
          id,
          img_Profile,
          name,
          minute,
          icon_1,
          img_post,
          interaction_buttons_1,
          interaction_buttons_2,
          interaction_buttons_3,
          bookmark,
          liked_by_1,
          liked_by_2,
          liked_by_3,
          p_liked_by,
          caption,
          comments,
        }) => (
          <div className="feeds_posts" key={id}>
            <div className="feeds_post hidden">
              <div className="head">
                <div className="user">
                  <div className="profile_img">
                    <img src={img_Profile} alt={name} />
                  </div>
                  <div className="info">
                    <h3>{name}</h3>
                    <small>{minute}</small>
                  </div>
                </div>
                <span className="edit">{icon_1}</span>
              </div>

              <div className="images">
                <img src={img_post} alt={name} />
              </div>

              <div className="actione_buttons">
                <div className="interaction_buttons">
                  <span>{interaction_buttons_1}</span>
                  <span>{interaction_buttons_2}</span>
                  <span>{interaction_buttons_3}</span>
                </div>
                <div className="bookmark">
                  <span>{bookmark}</span>
                </div>
              </div>

              <div className="liked_by">
                <span>
                  <img src={liked_by_1} alt={name} />
                </span>
                <span>
                  <img src={liked_by_2} alt={name} />
                </span>
                <span>
                  <img src={liked_by_3} alt={name} />
                </span>
                <p>{p_liked_by}</p>
              </div>

              <div className="caption">
                <p>{caption}</p>
              </div>

              <div className="comments text_muted">{comments}</div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default FeedsPosts;
