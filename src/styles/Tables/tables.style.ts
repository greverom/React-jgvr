import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 8px;
  overflow: hidden;
   align-items: center;

    @media (max-width: 768px) {
    overflow-x: auto;  
    max-width: 88%;
    padding: 0px;
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

export const customStyles = {
  table: {
    style: {
      minWidth: "100%", 
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
};

export const paginationOptions = {
  rowsPerPageText: "Filas por página", 
  rangeSeparatorText: "de", 
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

