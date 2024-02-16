import { ReactNode } from "react";
import { useSelector } from "react-redux";

import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Notify from "../UI/Notify/Notify";
import { RootState } from "../../store";
import Cart from "../Cart/Cart";
import SignUp from "../SignIn/SignIn";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isNotified = useSelector((state: RootState) => state.notify.isNotified);
  const ui = useSelector((state: RootState) => state.ui);

  const { isShownCartModal, isShownLoginModal } = ui;

  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
      {isNotified && <Notify />}
      {isShownCartModal && <Cart />}
      {isShownLoginModal && <SignUp />}
    </div>
  );
};

export default Layout;
