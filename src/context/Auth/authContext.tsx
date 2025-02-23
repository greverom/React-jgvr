import { createContext } from "react";

export type RoleType = "ADMINISTRADOR" | "GUEST";

interface AuthContextType {
  login: (email: string, password: string) => void;
  role: RoleType | null;
  setRole: (role: RoleType) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);