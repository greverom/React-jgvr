import { useContext, useState } from "react";
import DataTable from "react-data-table-component";
import { User } from "../../../Interfaces/authenticationProps";
import { TableContainer } from "../../../styles/styled/tables.style";
import { userTableColumns } from "../tables/userTableColumnProps"; 
import { initialUsers } from "./UserTableData";
import { AuthContext } from "../../../Store/Auth/authContext";

const UserTable = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const { setRole } = useContext(AuthContext)!;
  const [activeUserId, setActiveUserId] = useState<number | null>(1);

  const handleRoleChange = (id: number, newRole: "ADMINISTRADOR" | "GUEST") => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        role: user.id === id ? newRole : user.role,
      }))
    );
    setActiveUserId(id);
    setRole(newRole);
  };

  return (
    <TableContainer>
      <DataTable
        title="Gestión de Usuarios"
        columns={userTableColumns({ activeUserId, handleRoleChange })} 
        data={users}
        highlightOnHover
        responsive
        striped
      />
    </TableContainer>
  );
};

export default UserTable;