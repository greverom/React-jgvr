import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../sidebar/sidebarLinks";
import { useSidebar } from "../../../hooks/Sidebar/useSidebar";
import { useAuth } from "../../../hooks/Auth/useLogin"; 
import { ArrowIcon } from "../../../assets/icons/icons";
import   logo from "../../../assets/react.svg";
import { useState } from "react";
import   Modal from "../modal/modal";

import { SidebarContainer, SidebarNav, LogoContainer, LogoImage, 
         LogoText, SidebarMenu, SidebarItem, SidebarLinkStyle, DropdownMenu,
         Submenu, LogoutContainer,
         BurgerButton} from "../../../styles/Sidebar/sidebar.style";

export const Sidebar = () => {
  const { openDropdown, toggleSubMenu, closeSubMenu, sidebarRef,
          isSidebarOpen, setIsSidebarOpen, dropdownRefs }   = useSidebar();
  const [ showLogoutModal, setShowLogoutModal] = useState(false);
  const { pathname } = useLocation();
  const { role } = useAuth(); 

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <BurgerButton onClick={handleToggleSidebar} $isOpen={isSidebarOpen}>
      {isSidebarOpen ? "✕" : "☰"}
      </BurgerButton>
    
      <SidebarContainer ref={sidebarRef} $isOpen={isSidebarOpen}>
        <SidebarNav >
          <LogoContainer>
            <LogoImage src={logo} alt="react logo" />
            <LogoText>{role}</LogoText>
          </LogoContainer>

          <SidebarMenu>
            {role &&
              sidebarLinks
              .filter(link => link.roles.includes(role) && !link.isLogout)
              .map((link: SidebarLink, index: number) => {

                const isOpen = openDropdown === link.path;
                const Icon = link.icon;
                const isParentActive = link.subMenu?.some((subLink: SidebarLink) => pathname.includes(subLink.path));
                return (
                  <SidebarItem
                    key={index}
                    ref={(el) => {
                      if (link.subMenu) dropdownRefs.current[link.path] = el;
                    }}
                  >
                  {link.subMenu ? (
                    <>
                      <DropdownMenu $isOpen={isOpen}  $isExpanded={isSidebarOpen} $isParentActive={!!isParentActive} onClick={() => toggleSubMenu(link.path)}>
                        <Icon /><span>{link.title}</span><ArrowIcon className="arrow" />
                      </DropdownMenu>
                
                      <Submenu $isOpen={isOpen}>
                        {role &&
                          link.subMenu
                            .filter((subLink) => subLink.roles.includes(role))
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
                    <SidebarLinkStyle to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>
                      <Icon />
                      <span>{link.title}</span>
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
        </SidebarNav>
      </SidebarContainer>
        <Modal
          isOpen={showLogoutModal}
          onClose={handleLogout}
          onConfirm={handleLogout}
          type="question"
          title="¿Deseas cerrar sesión?"
        />
    </>
  );
};

export default Sidebar;