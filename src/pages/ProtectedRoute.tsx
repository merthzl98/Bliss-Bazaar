import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../store";
type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const hasLoggedIn = useSelector((state: RootState) => state.user.hasLoggedIn);

  if (!hasLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
