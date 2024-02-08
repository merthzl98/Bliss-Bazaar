import { Link } from "react-router-dom";

import furnitureBanner from "../../assets/banners/furniture-banner.jpg";
import skincareBanner from "../../assets/banners/skincare-banner.jpg";
import kitchenyBanner from "../../assets/banners/kitchen-banner.jpg";
import electronicsBanner from "../../assets/banners/electronic-banner.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="grid-container">
      <div className="featured grid-one">
        <Link to="products?category=furnitures">
          <div className="overlay" />
          <img src={furnitureBanner} alt="Furnitures" />
          <p className="main-description">Furnitures</p>
        </Link>
      </div>
      <div className="featured grid-two">
        <Link to="products?catgory=skincare">
          <div className="overlay" />
          <img src={skincareBanner} alt="Skincare" />
          <p className="main-description">Skincare</p>
        </Link>
      </div>
      <div className="featured grid-four">
        <Link to="products?category=kitchen">
          <div className="overlay" />
          <img src={kitchenyBanner} alt="Kitchen" />
          <p className="main-description">Kitchen</p>
        </Link>
      </div>
      <div className="featured grid-four-low">
        <Link to="products?category=electronics">
          <div className="overlay" />
          <img src={electronicsBanner} alt="Electronics" />
          <p className="main-description">Electronics</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
