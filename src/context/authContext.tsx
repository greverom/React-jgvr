import { createContext } from "react";

export type RoleType = "ADMINISTRADOR" | "GUEST";

export type AuthContextType = {
  role: RoleType;
  setRole: (role: RoleType) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);