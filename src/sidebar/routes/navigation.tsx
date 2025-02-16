import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../data/sidebarLinks"; 
import { appRoutes, AppRoute } from "../data/routes"; 
import { useSidebar } from "../hooks/useSidebar";
import { userData } from "../data/userData";
import logo from "../../assets/react.svg";
import "../styles/navigation.css";


export const Navigation = () => {
  const { pathname } = useLocation();
  
  const {
    isSubMenuOpen,
    dropdownRef,
    toggleSubMenu,
    closeSubMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useSidebar();

  return (
      <div className="main-layout">
        <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="logo-react">
            <img src={logo} alt="react logo" />
            <span className="logo-text">{userData.name}</span>
          </div>

          <ul>
            {sidebarLinks.filter(link => !link.isLogout)
            .map((link: SidebarLink, index: number) => {
              const isParentActive = link.subMenu?.some(subLink => pathname.includes(subLink.path)) || pathname === link.path;
              

              return (
                <li key={index} className={link.subMenu ? "nav-item" : ""} ref={link.subMenu ? dropdownRef : null}>
                  {link.subMenu ? (
                    <>
                      <div className={`nav-link-dropdown ${isParentActive ? "nav-active" : ""}`} onClick={toggleSubMenu}>
                        <i className={link.icon}></i> <span>{link.title}</span>
                        <i className={`fas fa-chevron-down arrow ${isSubMenuOpen ? "rotate" : ""}`}></i>
                      </div>
                      <ul className={`submenu ${isSubMenuOpen ? "open" : ""}`}>
                        {link.subMenu.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subLink.path}
                              className={({ isActive }) => (isActive ? "nav-active" : "")}
                              onClick={closeSubMenu}
                            >
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink 
                      to={link.path} 
                      className={({ isActive }) => (isActive ? "nav-active" : "")}
                    >
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
            {appRoutes.map((route: AppRoute, index: number) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>

  );
};

export default Navigation;