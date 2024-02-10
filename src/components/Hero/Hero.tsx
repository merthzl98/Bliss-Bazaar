import { useState } from "react";
import { Link } from "react-router-dom";

import furnitureBanner from "../../assets/banners/furniture-banner.jpg";
import skincareBanner from "../../assets/banners/skincare-banner.jpg";
import kitchenyBanner from "../../assets/banners/kitchen-banner.jpg";
import "./Hero.scss";

const Hero = () => {
  const [isShownTitle, setIsShownTitle] = useState<boolean>(true);

  const handleHoverHero = () => {
    setIsShownTitle((prevState) => !prevState);
  };

  return (
    <section
      className="hero-container"
      onMouseEnter={handleHoverHero}
      onMouseLeave={handleHoverHero}
    >
      <h2 className={isShownTitle ? "hero-title" : "hide-title"}>
        Trending Categories
      </h2>
      <div className="grid-container">
        <div className="featured grid-one">
          <Link
            to={{
              pathname: "products",
              search: "category=kitchen",
            }}
          >
            <div className="overlay" />
            <img src={kitchenyBanner} alt="Kitchen" />
            <p className="main-description">Kitchen</p>
          </Link>
        </div>
        <div className="featured grid-two">
          <Link
            to={{
              pathname: "products",
              search: "category=facial",
            }}
          >
            <div className="overlay" />
            <img src={skincareBanner} alt="Facial" />
            <p className="main-description">Facial</p>
          </Link>
        </div>
        <div className="featured grid-three">
          <Link
            to={{
              pathname: "products",
              search: "category=furnitures",
            }}
          >
            <div className="overlay" />
            <img src={furnitureBanner} alt="Furnitures" />
            <p className="main-description">Furnitures</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
