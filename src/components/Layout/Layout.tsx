import { ReactNode } from "react";
import { useSelector } from "react-redux";

import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "../UI/Error/Error";
import { RootState } from "../../store";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const hasError = useSelector((state: RootState) => state.ui.hasError);
  const { children } = props;

  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
      {hasError && <Error />}
    </div>
  );
};

export default Layout;
