import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../sidebar/sidebarLinks";
import { useSidebar } from "../../../hooks/useSidebar";
import { useAuth } from "../../../hooks/Auth/useAuth"; 
import { ArrowIcon } from "../../../assets/icons/icons";
import logo from "../../../assets/react.svg";
import "../../../styles/sidebar.css";
import { useState } from "react";
import Modal from "../modal/modal";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { role } = useAuth(); 
  const { openDropdown, dropdownRefs, toggleSubMenu, closeSubMenu, handleMouseEnter, handleMouseLeave } = useSidebar();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="main-layout">
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="logo-react">
          <img src={logo} alt="react logo" />
          <span className="logo-text">{role}</span> 
        </div>

        <ul>
          {role &&
            sidebarLinks
            .filter(link => link.roles.includes(role) && !link.isLogout)
            .map((link: SidebarLink, index: number) => {
              const isParentActive = link.subMenu?.some(subLink => pathname.includes(subLink.path)) || pathname === link.path;
              const isOpen = openDropdown === link.path;
              const Icon = link.icon;

              return (
                <li key={index} className={`nav-item ${isOpen ? "open" : ""}`} ref={(el) => { if (link.subMenu) dropdownRefs.current[link.path] = el;}}>
                  {link.subMenu ? (
                    <>
                      <div className={`nav-link-dropdown ${isParentActive ? "nav-active" : ""}`} onClick={() => toggleSubMenu(link.path)}>
                        <Icon /> <span>{link.title}</span>
                        <ArrowIcon className={`arrow ${isOpen ? "rotate" : ""}`} />
                      </div>

                      <ul className={`submenu ${isOpen ? "open" : ""}`}>
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
                      </ul>
                      
                    </>
                  ) : (
                    <NavLink to={link.path} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                      <Icon /> <span>{link.title}</span>
                    </NavLink>
                  )}
                </li>
              );
          })}
        </ul>
        {role && (
          <li className="logout-container">
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
          </li>
          
        )}
         <Modal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
          type="question"
          title="¿Deseas cerrar sesión?"
          message="Si sales de la cuenta, deberás iniciar sesión nuevamente."
        />
      </nav>
    </div>
  );
};

export default Sidebar;