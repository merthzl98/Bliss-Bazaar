import { ReactNode } from "react";
import { useSelector } from "react-redux";

import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "../UI/Error/Error";
import { RootState } from "../../store";
import Cart from "../Cart/Cart";
import SignUp from "../SignUp/SignUp";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const hasError = useSelector((state: RootState) => state.error.hasError);
  const ui = useSelector((state: RootState) => state.ui);

  const { isShownCartModal, isShownLoginModal } = ui;

  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
      {hasError && <Error />}
      {isShownCartModal && <Cart />}
      {isShownLoginModal && <SignUp />}
    </div>
  );
};

export default Layout;
