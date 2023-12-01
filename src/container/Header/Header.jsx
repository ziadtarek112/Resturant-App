import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="#header">
    <div className="app__wrapper_info">
      <SubHeading title="Choose  the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptates molestias adipisci perferendis facilis quisquam rem,
        blanditiis pariatur error unde tempore excepturi maiores commodi
        necessitatibus, voluptatum maxime, deleniti quasi illo.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
