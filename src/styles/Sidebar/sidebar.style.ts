import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-300px")};
  top: 0;
  bottom: 0;
  width: 275px;
  background-color: rgba(54, 58, 69, 0.95);
  backdrop-filter: blur(10px);
  transition: left 0.3s ease-in-out;
  z-index: 1001;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto; 
  overflow-x: hidden; 
  scrollbar-width: thin; 
  scrollbar-color: #5a5a5a transparent;

  &::-webkit-scrollbar {
    width: 6px; 
  }
`;

const moveButton = keyframes`
  0% { left: 15px; }
  100% { left: 234px; }
`;

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 32px;
  left: ${({ $isOpen }) => ($isOpen ? "250px" : "15px")};
  border: none;
  border-radius: ${({ $isOpen }) => ($isOpen ? "50px" : "0px")};
  width: 45px;
  height: 45px;
  font-size: ${({ $isOpen }) => ($isOpen ? "18px" : "38px")}; 
  background-color: ${({ $isOpen }) => ($isOpen ? "rgba(54, 58, 69)" : "transparent")}; 
  color: ${({ $isOpen }) => ($isOpen ? "white" : "rgba(54, 58, 69)")};
  cursor: pointer;
  z-index: 1100;
  animation: ${({ $isOpen }) => ($isOpen ? moveButton : "none")} 0.3s ease-in-out;
  transition: transform 0.5s ease-in-out;
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 5px 30px;
  padding: 10px;
`;

export const LogoImage = styled.img`
  width: 2rem;
  margin: 10px 10px;
  transition: width 0.8s ease-in-out;
`;

export const LogoText = styled.span`
  display: block;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  margin-left: 5px;
  transition: opacity 0.8s ease-in;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const SidebarItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLinkStyle = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 12px 0;
  justify-content: left;
  gap: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: .9rem;

    &:hover {
      background-color: #4a4f5a;
    }

    &.active {
      color: #5fb8d3;
    }
    &.active svg {
      fill: #5fb8d3 !important;
    }

svg {
  width: 21px;
  height: 21px;
  fill: white;
  padding-left: 30px;
  flex-shrink: 0;
  text-align: center;
}

`;

export const DropdownMenu = styled.div<{ $isOpen: boolean; $isExpanded: boolean, $isParentActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ $isParentActive }) => ($isParentActive ? "#5fb8d3" : "white")};
  text-decoration: none;
  padding: 12px 0;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.4s;

svg {
  width: 20px;
  height: 20px;
  margin-left: 30px;
  flex-shrink: 0;
  fill: ${({ $isParentActive }) => ($isParentActive ? "#5fb8d3" : "white")};
}

.arrow {
  width: 21px;
  height: 21px;
  margin-right: 30px; 
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
}

span {
  flex-grow: 1; 
  text-align: left; 
  margin-left: 19.5px;
}

&:hover {
  background-color: #4a4f5a;
}
`;

export const Submenu = styled.ul<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  padding-left: 0;
  border-bottom: 1px solid #5a5a5a; 
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")}; 
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: max-height 0.3s, opacity 0.3s, transform 0.3s; 

li {
  width: 100%;
  list-style: none;
}

li a {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #dcdcdc;
  padding: 15px 40px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #4a4f5a;
    }
}

li a.nav-active::before {
  content: "•";
  margin-right: 8px;
  color: white;
  font-size: .9rem;
}
`;

export const LogoutContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 20px;
  
.logout-link {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  padding: 15px 30px;
  gap: 18px;
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
  }

  span {
    display: flex;
    font-size: 0.85rem;
  }
}
`;

