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
    name: "Administrador",
    cell: (row) => (
      <StyledCheckbox
        type="checkbox"
        checked={row.id === activeUserId && row.role === "ADMINISTRADOR"}
        onChange={() => handleRoleChange(row.id, "ADMINISTRADOR")}
      />
    ),
    style: { textAlign: "center" },
  },
  {
    name: "Invitado",
    cell: (row) => (
      <StyledCheckbox
        type="checkbox"
        checked={row.id === activeUserId && row.role === "GUEST"}
        onChange={() => handleRoleChange(row.id, "GUEST")}
      />
    ),
    style: { textAlign: "center" },
  },
];