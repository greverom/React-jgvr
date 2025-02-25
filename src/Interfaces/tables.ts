import { User } from "./authenticationProps";

export interface UserRowProps {
    user: User;
    activeRole: "admin" | "guest";
    onRoleChange: (id: number, newRole: "admin" | "guest") => void;
}