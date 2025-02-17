import { useState, useEffect } from "react";
import { AuthContext, RoleType } from "./authContext";

const fetchRole = async (): Promise<RoleType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ADMINISTRADOR");
      //resolve("GUEST") 
    }, 500); 
  });
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<RoleType | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const loadUserRole = async () => {
      const userRole = await fetchRole();
      setRole(userRole);
      setIsLoading(false); 
    };
    loadUserRole();
  }, []);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {isLoading ? null : children} 
    </AuthContext.Provider>
  );
};