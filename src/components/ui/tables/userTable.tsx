import { useContext, useState } from "react";
import { AuthContext } from "../../../Store/Auth/authContext";
import { UserTable } from "../../../Interfaces/tables";
import { userTableColumns } from "../tables/userTableColumnProps"; 
import   DataTable from "react-data-table-component";
import { initialUsers } from "./UserTableData";
import { customStyles, paginationOptions, TableContainer} from "../../../styles/Tables/tables.style";

const UserTables = () => {
  const [users] = useState<UserTable[]>(initialUsers);
  const { setRole } = useContext(AuthContext)!;
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const handleRoleChange = (id: number, newRole: "ADMINISTRADOR" | "GUEST") => {
    setActiveUserId(id); 
    setRole(newRole); 
  };

  return (
    <TableContainer>
      <DataTable
        columns={userTableColumns({ activeUserId, handleRoleChange })}
        data={users}
        highlightOnHover
        responsive
        striped
        customStyles={customStyles}
        pagination 
        paginationPerPage={5} 
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        paginationComponentOptions={paginationOptions}
      />
    </TableContainer>
  );
};

export default UserTables;