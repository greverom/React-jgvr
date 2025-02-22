import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth/useAuth";
import { AppRoute } from "./type";


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