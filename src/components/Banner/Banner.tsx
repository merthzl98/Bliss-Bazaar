import { useNavigate } from "react-router";

import houseBanner from "../../assets/banners/house-banner.jpg";
import Button from "../UI/Button/Button";
import "./Banner.scss";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("products?category=all");
  };

  return (
    <section className="summary">
      <div className="description">
        <h2>Where Style Meets Convenience</h2>
        <p>
          At Bliss Bazaar, discover a world of convenience and style. Our
          curated collection allows you to indulge in luxury while keeping your
          lifestyle effortlessly chic.
        </p>
        <Button onClick={handleClick} text="Shop now" />
      </div>
      <img src={houseBanner} alt="house" />
    </section>
  );
};

export default Banner;
