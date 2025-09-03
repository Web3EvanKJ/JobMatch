import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
  role?: "applicant" | "recruiter" | "all";
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role && role !== "all")
    return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default PrivateRoute;
