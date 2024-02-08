import { ReactNode } from "react";

import "./Layout.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
