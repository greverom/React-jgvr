import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.div`
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;