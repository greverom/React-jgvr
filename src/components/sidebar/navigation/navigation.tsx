import { NavLink, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { sidebarLinks, SidebarLink } from "../data/sidebarLinks";
import { appRoutes, AppRoute } from "../../../router/routes";
import { useSidebar } from "../../../hooks/useSidebar";
import { ArrowIcon } from "../../icons/icons/icons";
import { useAuth } from "../../../hooks/useAuth"; 
import logo from "../../../assets/react.svg";
import Loading from "../../loading/loading";
import "../../../styles/sidebar.css";
import { Suspense } from "react";

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

        <div className="logout-container">
          {sidebarLinks
            .filter(link => link.isLogout)
            .map((link, index) => {
              const Icon = link.icon; 
              return (
                <li key={index}>
                  <a className="logout-link" onClick={() => console.log("Logout clicked")}>
                    <Icon /> <span>{link.title}</span> 
                  </a>
                </li>
              );
            })}
        </div>
      </nav>

      <div className="content">
        <Suspense fallback={<Loading />}>
          <Routes>
            {role &&
              appRoutes.map((route: AppRoute, index: number) => (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children?.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      index={childRoute.index} 
                      element={childRoute.element}
                    />
                  ))}
                </Route>
              ))
            }
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Navigation;