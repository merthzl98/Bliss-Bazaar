import { useNavigate } from "react-router";

import houseBanner from "../../assets/banners/house-banner.jpg";
import Button from "../UI/Button/Button";
import "./Banner.scss";
import { scrollToTop } from "../../utils";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ pathname: "products", search: "category=all" });
    scrollToTop();
  };

  return (
    <section>
      <h2 className="summary-title">Shop Now</h2>
      <div className="summary">
        <img src={houseBanner} alt="house" />
        <div className="description">
          <h2>Where Style Meets Convenience</h2>
          <p>
            At Bliss Bazaar, discover a world of convenience and style. Our
            curated collection allows you to indulge in luxury while keeping
            your lifestyle effortlessly chic.
          </p>
          <Button
            onClick={handleClick}
            text="Shop Now"
            fontSize="1.7rem"
            fontWeight="600"
            padding="1.5rem 2.25rem"
            width="15rem"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
