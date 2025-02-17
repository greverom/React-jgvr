import { createContext } from "react";

export type RoleType = "ADMINISTRADOR" | "GUEST";

interface AuthContextType {
  role: RoleType | null;  // 🔹 Permitir que sea null temporalmente
  setRole: (role: RoleType) => void;
}

export const AuthContext = createContext<AuthContextType>({
  role: null,  // 🔹 Valor inicial como null
  setRole: () => {}, 
});