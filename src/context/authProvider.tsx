import { useState, useEffect } from "react";
import { AuthContext, RoleType } from "./authContext";
import Loading from "../components/loading/loading";

const fetchRole = async (): Promise<RoleType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ADMINISTRADOR"); 
    }, 1000); 
  });
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<RoleType | null>(null); 
  useEffect(() => {
    const loadUserRole = async () => {
      const userRole = await fetchRole(); 
      setRole(userRole);
    };
    loadUserRole();
  }, []);

  if (role === null) {
    return <Loading />;
  }

  return <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
};