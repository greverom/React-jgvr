import { NavLink, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../data/sidebarLinks";
import { appRoutes, AppRoute } from "../../../routes/routes";
import { useSidebar } from "../../../hooks/useSidebar";
import { useAuth } from "../../../hooks/useAuth"; 
//import { userData } from "../data/userData";
import logo from "../../../assets/react.svg";
import "../../../styles/sidebar.css";

export const Navigation = () => {
  const { pathname } = useLocation();
  const { role } = useAuth(); 
  const { openDropdown, dropdownRefs, toggleSubMenu, closeSubMenu, handleMouseEnter, handleMouseLeave } = useSidebar();

  return (
    <div className="main-layout">
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="logo-react">
          <img src={logo} alt="react logo" />
          <span className="logo-text">{role}</span> 
        </div>

        <ul>
          {sidebarLinks
            .filter(link => link.roles.includes(role) && !link.isLogout)
            .map((link: SidebarLink, index: number) => {
              const isParentActive = link.subMenu?.some(subLink => pathname.includes(subLink.path)) || pathname === link.path;
              const isOpen = openDropdown === link.path;

              return (
                <li key={index} className={`nav-item ${isOpen ? "open" : ""}`} ref={(el) => { if (link.subMenu) dropdownRefs.current[link.path] = el;}}>
                  {link.subMenu ? (
                    <>
                      <div className={`nav-link-dropdown ${isParentActive ? "nav-active" : ""}`} onClick={() => toggleSubMenu(link.path)}>
                        <i className={link.icon}></i> <span>{link.title}</span>
                        <i className={`fas fa-chevron-down arrow ${isOpen ? "rotate" : ""}`}></i>
                      </div>
                      <ul className={`submenu ${isOpen ? "open" : ""}`}>
                        {link.subMenu
                          .filter(subLink => subLink.roles.includes(role)) 
                          .map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <NavLink to={subLink.path} className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={() => closeSubMenu()}>
                                {subLink.title}
                              </NavLink>
                            </li>
                          ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink to={link.path} className={({ isActive }) => (isActive ? "nav-active" : "")}>
                      <i className={link.icon}></i> <span>{link.title}</span>
                    </NavLink>
                  )}
                </li>
              );
            })}
        </ul>

        <div className="logout-container">
          {sidebarLinks
            .filter(link => link.isLogout)
            .map((link, index) => (
              <li key={index}>
                <a className="logout-link" onClick={() => console.log("Logout clicked")}>
                  <i className={link.icon}></i> <span>{link.title}</span>
                </a>
              </li>
            ))}
        </div>
      </nav>

      <div className="content">
        <Routes>
          {appRoutes
            .filter(route => route.roles.includes(role)) 
            .map((route: AppRoute, index: number) => (
              <Route key={index} path={route.path} element={route.element} />
            ))
          }
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navigation;