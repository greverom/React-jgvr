import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AppRoute } from "./routes";

export const ProtectedRoute: React.FC<{ route: AppRoute }> = ({ route }) => {
  const { role } = useAuth();

  if (!role) {
    return <Navigate to="/" replace />; 
  }

  if (!route.roles.includes(role)) {
    return <Navigate to="/" replace />; 
  }

  return <Outlet context={{ element: route.element }} />;
};