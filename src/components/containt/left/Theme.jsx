import React, { useContext, useEffect } from "react";
import { Containts } from "./Left";
import { json } from "react-router-dom";

const Theme = () => {
  const { isShowTheme, setIsShowTheme } = useContext(Containts);

  useEffect(() => {
    const fontSize = document.querySelectorAll(".choose_size span");
    const card = document.querySelectorAll(".card");
    let root = document.querySelector(":root");
    const chooseColor = document.querySelectorAll(".choose_color span");
    const chooseBg = document.querySelectorAll(".choose_bg div");

    card.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });

    const changeActiveItem = () => {
      fontSize.forEach((size) => {
        size.classList.remove("active");
      });
    };

    fontSize.forEach((size) => {
      size.addEventListener("click", () => {
        changeActiveItem();
        let fontSize;

        size.classList.toggle("active");

        if (size.classList.contains("font_size-1")) {
          fontSize = "10px";
          root.style.setProperty("--sticky-top-left", "5.4rem");
          root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font_size-2")) {
          fontSize = "13px";
          root.style.setProperty("--sticky-top-left", "5.4rem");
          root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font_size-3")) {
          fontSize = "16px";
          root.style.setProperty("--sticky-top-left", "-2rem");
          root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font_size-4")) {
          fontSize = "19px";
          root.style.setProperty("--sticky-top-left", "-5rem");
          root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font_size-5")) {
          fontSize = "22px";
          root.style.setProperty("--sticky-top-left", "-12rem");
          root.style.setProperty("--sticky-top-right", "-35rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
      });
    });

    const changeActiveColor = () => {
      chooseColor.forEach((color) => {
        color.classList.remove("active");
      });
    };

    chooseColor.forEach((color) => {
      color.addEventListener("click", () => {
        changeActiveColor();
        let primaryHue;
        color.classList.toggle("active");
        if (color.classList.contains("color-1")) {
          primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
          primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
          primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
          primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
          primaryHue = 202;
        }
        root.style.setProperty("--primary-color-hue", primaryHue);
      });
    });

    const changeActiveBg = () => {
      chooseBg.forEach((bg) => {
        bg.classList.remove("active");
      });
    };

    chooseBg.forEach((bg) => {
      bg.addEventListener("click", () => {
        changeActiveBg();
        bg.classList.toggle("active");

        let darkColorLightness;
        let lightColorLightness;
        let whiteColorLightness;

        const changeBG = () => {
          root.style.setProperty("--dark-color-lightness", darkColorLightness);
          root.style.setProperty(
            "--light-color-lightness",
            lightColorLightness
          );
          root.style.setProperty(
            "--white-color-lightness",
            whiteColorLightness
          );
        };

        if (bg.classList.contains("bg-1")) {
          darkColorLightness = "17%";
          lightColorLightness = "95%";
          whiteColorLightness = "100%";
          changeBG();
        } else if (bg.classList.contains("bg-2")) {
          darkColorLightness = "95%";
          lightColorLightness = "20%";
          whiteColorLightness = "15%";
          changeBG();
        } else if (bg.classList.contains("bg-3")) {
          darkColorLightness = "95%";
          lightColorLightness = "10%";
          whiteColorLightness = "0%";
          changeBG();
        }
      });
    });
  }, []);

  return (
    <div
      className="customize_theme"
      onClick={() => setIsShowTheme(!isShowTheme)}
    >
      <div className="card">
        <h2>Customize your view</h2>
        <p className="text_muted">
          Manage your font size, color and background
        </p>

        <div className="font_size">
          <h4>font size</h4>
          <div>
            <h6>Aa</h6>
            <div className="choose_size">
              <span className="font_size-1"></span>
              <span className="font_size-2"></span>
              <span className="font_size-3 active"></span>
              <span className="font_size-4"></span>
              <span className="font_size-5"></span>
            </div>
            <h3>Aa</h3>
          </div>
        </div>

        <div className="color">
          <h4>Color</h4>
          <div className="choose_color">
            <span className="color-1 active"></span>
            <span className="color-2"></span>
            <span className="color-3"></span>
            <span className="color-4"></span>
            <span className="color-5"></span>
          </div>
        </div>

        <div className="background">
          <h4>Background</h4>
          <div className="choose_bg">
            <div className="bg-1 active">
              <span></span>
              <h4>Light</h4>
            </div>
            <div className="bg-2">
              <span></span>
              <h4>Dim</h4>
            </div>
            <div className="bg-3">
              <span></span>
              <h4>Lights Out</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
