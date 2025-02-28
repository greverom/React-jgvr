import { TableStyles } from "react-data-table-component";
import styled from "styled-components";

export const TableContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: auto;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;

   @media (max-width: 600px) { 
    padding: 5px;
  }

  .rdt_Table {
    min-width: 650px; 
  }

  .rdt_Pagination {
    display: flex;  
    justify-content: center;  
    align-items: center;  
    padding: 10px 0;
  }
`;

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const customStyles: TableStyles = {
  table: {
    style: {
      minWidth: "10%", 
      maxWidth: "100%",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#6c757d",
      color: "#ffffff",
      fontSize: "13px",
      fontWeight: "bold",
      textAlign: "center" as const,  
      minWidth: "70px",  
      maxWidth: "90px",
      whiteSpace: "nowrap", 
    },
  },
  cells: {
    style: {
      fontSize: "12px",
      padding: "8px",
      whiteSpace: "nowrap",
      textAlign: "center" as const,  
    },
  },
};

export const paginationOptions = {
  rowsPerPageText: "Filas por página", 
  rangeSeparatorText: "de", 
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

