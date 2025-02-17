import { createContext } from "react";

export type RoleType = "ADMINISTRADOR" | "GUEST";

interface AuthContextType {
  role: RoleType | null;  
  setRole: (role: RoleType) => void;
}

export const AuthContext = createContext<AuthContextType>({
  role: null,  
  setRole: () => {}, 
});