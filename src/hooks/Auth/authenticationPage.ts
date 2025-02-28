import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuthenticationRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/authentication") {
      navigate("register", { replace: true });
    }
  }, [location.pathname, navigate]);
};