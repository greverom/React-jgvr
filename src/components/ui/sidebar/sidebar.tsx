import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../sidebar/sidebarLinks";
import { useSidebar } from "../../../hooks/useSidebar";
import { useAuth } from "../../../hooks/Auth/useAuth"; 
import { ArrowIcon } from "../../../assets/icons/icons";
import logo from "../../../assets/react.svg";
import { useState } from "react";
import Modal from "../modal/modal";

import { SidebarContainer, SidebarNav, LogoContainer, LogoImage, 
         LogoText, SidebarMenu, SidebarItem, SidebarLinkStyle, DropdownMenu,
         Submenu, LogoutContainer} from "../../../styles/Sidebar/sidebar.style";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { role } = useAuth(); 
  const { openDropdown, dropdownRefs, toggleSubMenu, closeSubMenu, handleMouseEnter, handleMouseLeave } = useSidebar();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <SidebarContainer>
      <SidebarNav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <LogoContainer>
          <LogoImage src={logo} alt="react logo" />
          <LogoText>{role}</LogoText>
        </LogoContainer>

        <SidebarMenu>
          {role &&
            sidebarLinks
            .filter(link => link.roles.includes(role) && !link.isLogout)
            .map((link: SidebarLink, index: number) => {
              const isParentActive = link.subMenu?.some(subLink => pathname.includes(subLink.path)) || pathname === link.path;
              const isOpen = openDropdown === link.path;
              const Icon = link.icon;

              return (
                <SidebarItem key={index} ref={(el) => { if (link.subMenu) dropdownRefs.current[link.path] = el;}}>
                  {link.subMenu ? (
                    <>
                      <DropdownMenu className={`${isParentActive ? "nav-active" : ""}`} onClick={() => toggleSubMenu(link.path)}>
                        <Icon /> <span>{link.title}</span>
                        <ArrowIcon className={`arrow ${isOpen ? "rotate" : ""}`} />
                      </DropdownMenu>

                      <Submenu className={`${isOpen ? "open" : ""}`}>
                        {role &&
                          link.subMenu
                            .filter(subLink => subLink.roles.includes(role))
                            .map((subLink, subIndex) => (
                              <li key={subIndex}>
                                <NavLink
                                  to={subLink.path}
                                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                                  onClick={() => closeSubMenu()}
                                >
                                  {subLink.title}
                                </NavLink>
                              </li>
                        ))}
                      </Submenu>
                      
                    </>
                  ) : (
                    <SidebarLinkStyle to={link.path} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                      <Icon /> <span>{link.title}</span>
                    </SidebarLinkStyle>
                  )}
                </SidebarItem>
              );
          })}
        </SidebarMenu>

        {role && (
          <LogoutContainer>
            {sidebarLinks
              .filter(link => link.isLogout) 
              .map((link, index) => {
                const Icon = link.icon; 
                return (
                  <a key={index} className="logout-link" onClick={() => setShowLogoutModal(true)}>
                    <Icon /> <span>{link.title}</span>
                  </a>
                );
              })}
          </LogoutContainer>
        )}

         <Modal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
          type="question"
          title="¿Deseas cerrar sesión?"
        />
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;