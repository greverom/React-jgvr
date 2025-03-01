import { TableStyles } from "react-data-table-component";
import styled from "styled-components";

export const TableContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: auto;
  margin-top: 1rem;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 5px;
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
    background-color: transparent !important;
    justify-content: center;  
    align-items: center;  
    padding: 10px 0;
  }
`;

export const StyledCheckbox = styled.input`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const customStyles: TableStyles = {
  table: {
    style: {
      minWidth: "90%", 
      maxWidth: "100%",
    },
  },
  head: {
    style: {
      backgroundColor: "black", 
      boxShadow: "none",  
    },
  },
  headCells: {
    style: {
      backgroundColor: "#6c757d",
      color: "#ffffff",
      fontSize: "13px",
      fontWeight: "bold",  
    },
  },
  cells: {
    style: {
      fontSize: "12px",
      padding: "11px", 
    },
  },
};

export const paginationOptions = {
  rowsPerPageText: "Filas por página", 
  rangeSeparatorText: "de", 
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

