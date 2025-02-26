
export interface UserTable {
   id: number;
   username: string;
   email: string;
   role: 'ADMINISTRADOR' | 'GUEST'; 
}

export interface UserRowProps {
   user: UserTable;
   activeRole: "admin" | "guest";
   onRoleChange: (id: number, newRole: "admin" | "guest") => void;
}

export interface UserTableColumnsProps {
   activeUserId: number | null;
   handleRoleChange: (id: number, newRole: "ADMINISTRADOR" | "GUEST") => void;
}
