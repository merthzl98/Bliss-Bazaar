import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";

import "./Navbar.scss";
import bbLogo from "../../assets/logo/bb-logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <figure onClick={handleClickLogo} className="logo">
          <img src={bbLogo} />
          <figcaption>Bliss Bazaar</figcaption>
        </figure>

        <ul className="link-list">
          <li>
            <Link
              to={{
                pathname: "products",
                search: "category=all",
              }}
            >
              Products
            </Link>
          </li>
          <TbShoppingCart />
          <span className="menu-icon">
            <HiMenu />
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
