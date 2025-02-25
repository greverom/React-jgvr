import { useContext, useState } from "react";
import { AuthContext } from "../../../Store/Auth/authContext";
import { User } from "../../../Interfaces/authenticationProps";
import { userTableColumns } from "../tables/userTableColumnProps"; 
import DataTable from "react-data-table-component";
import { initialUsers } from "./UserTableData";
import { TableContainer} from "../../../styles/styled/tables.style";

const UserTable = () => {
  const [users] = useState<User[]>(initialUsers);
  const { setRole } = useContext(AuthContext)!;
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const handleRoleChange = (id: number, newRole: "ADMINISTRADOR" | "GUEST") => {
    setActiveUserId(id); 
    setRole(newRole); 
  };

  return (
    <TableContainer>
      <DataTable
        title="Gestión de Roles"
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