import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const SidebarNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #363a45;
  width: 70px;
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
  padding: 20px 0;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #5a5a5a transparent;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  z-index: 1000;

    &:hover {
      width: 250px;
    }
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3px;
  margin-bottom: 25px;
`;

export const LogoImage = styled.img`
  width: 2rem;
  margin: 15px 18px;
  transition: width 0.8s ease-in-out;
`;

export const LogoText = styled.span`
  display: none;
  margin-left: 5px;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.8s ease-in;

${SidebarNav}:hover & {
  display: inline;
  opacity: 1;
}
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
  padding: 15px 27px;
  justify-content: left;
  gap: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;

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
  width: 20px;
  height: 20px;
  fill: white;
  padding-left: 25px;
  flex-shrink: 0;
  text-align: center;
}

span {
  display: none;
  white-space: nowrap;
  transition: opacity 0.3s ease-in-out;
}

  ${SidebarNav}:hover & span {
    display: inline;
    opacity: 1;
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean; $isExpanded: boolean, $isParentActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ $isParentActive }) => ($isParentActive ? "#5fb8d3" : "white")};
  text-decoration: none;
  padding: 15px 0;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.9rem;
  position: relative;

svg {
  width: 20px;
  height: 20px;
  padding-left: 25px;
  flex-shrink: 0;
  fill: ${({ $isParentActive }) => ($isParentActive ? "#5fb8d3" : "white")};
}

.arrow {
  width: 20px;
  height: 20px;
  padding: 0 20px; 
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
  opacity: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)};
  visibility: ${({ $isExpanded }) => ($isExpanded ? "visible" : "hidden")};
}

span {
  opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};
  flex-grow: 1; 
  text-align: left; 
  margin-left: 18px;
}

&:hover {
  background-color: #4a4f5a;
}
`;

export const Submenu = styled.ul<{ $isOpen: boolean }>`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-bottom: 1px solid #5a5a5a; 
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")}; 
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out; 

li {
  padding: 0px 0;
  list-style: none;
}

li a {
  width: 100%;
  display: flex;
  align-items: center;
  color: #dcdcdc;
  padding: 10px 50px;
  font-size: 0.85rem;
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
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 19px;
  width: 100%;
  
.logout-link {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  color: white;
  text-decoration: none;
  padding: 12px 27px;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0; 
  transition: width 0.3s ease-in-out;
}

span {
  display: none;
  font-size: 0.85rem;
  white-space: nowrap;
  transition: opacity 0.3s ease-in-out;
}
}

${SidebarNav}:hover & span {
  display: inline;
  opacity: 1;
  }
`;

