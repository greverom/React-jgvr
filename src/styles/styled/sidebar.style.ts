import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #346bdb;
    color: white;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
`;

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
  align-items: center;
  padding: 3px 0;
  width: 100%;
`;

export const SidebarLinkStyle = styled(NavLink)`
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

  svg {
    width: 20px;
    height: 20px;
    fill: white;
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

export const DropdownMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 12px 27px;
  justify-content: left;
  gap: 22px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  .arrow {
    margin-left: auto;
  }

  span {
    font-size: 0.9rem;
    margin-left: -5px;
  }

  .rotate {
    transform: rotate(180deg);
  }

  span,
  .arrow {
    display: none;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    background-color: #4a4f5a;
  }

  ${({ theme }) => theme.sidebarHover} &:hover span,
  ${({ theme }) => theme.sidebarHover} &:hover .arrow {
    display: inline;
    opacity: 1;
  }

  &.nav-active {
    color: #5fb8d3;
  }

  &.is-open {
    background-color: #4a4f5a;
  }

  &.parent-active {
    color: #5fb8d3;
  }
`;

export const Submenu = styled.ul`
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

  li {
    margin: 0;
    padding: 0;
  }

  li a {
    display: block;
    color: #dcdcdc;
    padding: 13px 0px 13px 55px;
    font-size: 0.85rem;
    text-decoration: none;
    text-align: left;
    position: relative;
    transition: background-color 0.3s ease-in-out;
  }

  li a.nav-active::before {
    content: "•";
    position: absolute;
    top: 10px;
    left: 30px;
    color: white;
    font-size: 1.1rem;
    transition: opacity 0.3s ease-in-out;
  }

  li a:hover {
    background-color: #4a4f5a;
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

