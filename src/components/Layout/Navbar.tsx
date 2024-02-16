import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import "./Navbar.scss";
import bbLogo from "../../assets/logo/bb-logo.png";

import { RootState } from "../../store";
import { getLogout } from "../../store/user-slice";
import {
  setIsShownCartModal,
  setIsShownLoginModal,
} from "../../store/ui-slice";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = !!anchorEl;

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShowModal = () => {
    dispatch(setIsShownLoginModal(true));
    handleCloseMenu();
  };

  const handleClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(getLogout({ hasLoggedIn: false, token: "" }));
    handleCloseMenu();
  };

  const handleNavigateFavs = () => {
    navigate("favs");
    handleCloseMenu();
  };

  const handleClickCart = () => {
    dispatch(setIsShownCartModal(true));
  };

  const menuContent = user.hasLoggedIn ? (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem sx={{ fontSize: "1.5rem" }} onClick={handleNavigateFavs}>
        <FavoriteIcon sx={{ mr: 1 }} /> My Favs
      </MenuItem>
      <MenuItem sx={{ fontSize: "1.5rem" }} onClick={handleLogout}>
        <LogoutIcon sx={{ mr: 1 }} /> Logout
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem sx={{ fontSize: "1.5rem" }} onClick={handleShowModal}>
        <LoginIcon sx={{ mr: 1 }} /> Login
      </MenuItem>
    </Menu>
  );

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
          <span onClick={handleClickAvatar}>
            <PermIdentityIcon />
          </span>
          <span onClick={handleClickCart}>
            <TbShoppingCart />
          </span>

          <span className="menu-icon">
            <HiMenu />
          </span>
        </ul>
        {menuContent}
      </nav>
    </header>
  );
};

export default Navbar;
