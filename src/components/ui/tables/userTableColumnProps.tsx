import {  UserTable, UserTableColumnsProps } from "../../../Interfaces/tables";
import { StyledCheckbox } from "../../../styles/Tables/tables.style";
import { TableColumn } from "react-data-table-component";

export const userTableColumns = ({ activeUserId, handleRoleChange }: UserTableColumnsProps): TableColumn<UserTable>[] => [
  {
    name: "#", 
    selector: (row) => row.id, 
    sortable: true, 
  },
  {
    name: "Nombre",
    selector: (row) => row.username,
    sortable: true,
  },
  {
    name: "Correo",
    selector: (row) => row.email,
  },
  {
    name: "Rol",
    selector: (row) => row.role,
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