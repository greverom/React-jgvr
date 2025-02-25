import { TableColumn } from "react-data-table-component";
import { User } from "../../../Interfaces/authenticationProps";
import { StyledCheckbox } from "../../../styles/styled/tables.style";

interface UserTableColumnsProps {
  activeUserId: number | null;
  handleRoleChange: (id: number, newRole: "ADMINISTRADOR" | "GUEST") => void;
}

export const userTableColumns = ({ activeUserId, handleRoleChange }: UserTableColumnsProps): TableColumn<User>[] => [
  {
    name: "Nombre",
    selector: (row) => row.username,
    sortable: true,
  },
  {
    name: "Correo",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Rol",
    selector: (row) => row.role,
    sortable: true,
  },
  {
    name: "Seleccionar",
    cell: (row) => (
      <StyledCheckbox
        type="checkbox"
        checked={row.id === activeUserId} 
        onChange={() => handleRoleChange(row.id, row.role)}
      />
    ),
    style: { textAlign: "center" },
  },
];