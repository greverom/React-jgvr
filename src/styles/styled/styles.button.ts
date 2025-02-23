import styled from "styled-components";

export const StyledButton = styled.button<{ $variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "info" | "cancel"; $isActive?: boolean }>`
  background: ${({ $variant, $isActive }) => {
    if ($isActive) {
      return (
        $variant === "primary" ? "#0056b3" :
        $variant === "secondary" ? "#a71d2a" :
        $variant === "tertiary" ? "#5a6268" :
        $variant === "success" ? "#218838" :
        $variant === "warning" ? "#f4a836" :
        $variant === "info" ? "#117a8b" :
        $variant === "cancel" ? "#dc3545" :
        "#ccc"
      ); 
    }
    return (
      $variant === "primary" ? "#007bff" :
      $variant === "secondary" ? "#dc3545" :
      $variant === "tertiary" ? "#6c757d" :
      $variant === "success" ? "#28a745" :
      $variant === "warning" ? "#f4a836" :
      $variant === "info" ? "#17a2b8" :
      $variant === "cancel" ? "#dc3545" : 
      "#ccc"
    );
  }};
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  padding: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${({ $isActive }) => ($isActive ? "0.8" : "1")}; 
  transition: background 0.3s ease, transform 0.2s ease;

   &:hover { 
    background: ${({ $variant }) => (
      $variant === "primary" ? "#0056b3" :
      $variant === "secondary" ? "#a71d2a" :
      $variant === "tertiary" ? "#545b62" :
      $variant === "success" ? "#1e7e34" :
      $variant === "warning" ? "#e0992f" :
      $variant === "info" ? "#0f6674" :
      $variant === "cancel" ? "#a71d2a" : 
      "#bbb"
    )};
  }
`; 