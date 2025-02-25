import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 8px;
  overflow: hidden;
   align-items: center;

  .rdt_Pagination {
    width: auto;
    position: relative;
    z-index: 0;
    background: white;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
`;

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #007bff;
`;

