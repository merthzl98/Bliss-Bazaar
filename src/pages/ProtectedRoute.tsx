import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../store";

type ProtectedRouteProps = {
  children: ReactNode;
  isAdminPage?: boolean;
};

const ProtectedRoute = ({
  isAdminPage = false,
  children,
}: ProtectedRouteProps) => {
  const user = useSelector((state: RootState) => state.user);

  const { hasLoggedIn, userLevel } = user;

  if (isAdminPage) {
    if (userLevel === "admin" && hasLoggedIn) {
      return children;
    } else {
      return <Navigate to="/login" replace />;
    }
  } else {
    if (!hasLoggedIn) {
      return <Navigate to="/login" replace />;
    } else {
      return children;
    }
  }
};
export default ProtectedRoute;
