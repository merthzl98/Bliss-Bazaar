import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3>All rights reserved © 2024 Bliss Bazaar </h3>
      <div className="icon-section">
        <FaSquareXTwitter />
        <FaSquareInstagram />
        <FaSquareFacebook />
      </div>
    </footer>
  );
};

export default Footer;
