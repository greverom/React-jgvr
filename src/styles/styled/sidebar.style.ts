import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Contenedor principal del layout
export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #363a45;
  width: 70px;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  padding: 20px 0;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #5a5a5a transparent;
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 250px;
  }
`;

// Logo y usuario
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

  ${SidebarContainer}:hover & {
    display: inline;
    opacity: 1;
  }
`;

// Lista de enlaces del sidebar
export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 3px 0;
  width: 100%;
`;

// Enlaces principales
export const NavLinkStyled = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 12px 27px;
  justify-content: left;
  gap: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.9rem;

  &:hover {
    background-color: #4a4f5a;
  }
`;

// Iconos de los enlaces
export const NavIcon = styled.div`
  width: 20px;
  height: 20px;
  fill: white;
  flex-shrink: 0;
  text-align: center;
`;

// Submenús
export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgb(40, 44, 52);
  width: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  &.open {
    display: block;
  }
`;

export const SubMenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const SubMenuLink = styled(NavLinkStyled)`
  display: block;
  color: #dcdcdc;
  padding: 13px 0px 13px 55px;
  font-size: 0.85rem;
  text-align: left;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #4a4f5a;
  }
`;

// Contenedor del logout
export const LogoutContainer = styled.li`
  margin-top: auto;
  padding-top: 40px;
  padding-bottom: 19px;
  width: 100%;
  text-align: center;
`;