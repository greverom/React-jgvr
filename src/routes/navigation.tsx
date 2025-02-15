import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import logo from '../assets/react.svg'
import '../styles/navigation.css'
import { useSidebar } from "../hooks/useSidebar";

  export const Navigation = () => {
    const {
      isSubMenuOpen,
      dropdownRef,
      toggleSubMenu,
      closeSubMenu,
      handleMouseEnter,
      handleMouseLeave,
    } = useSidebar();

  return (
    
  <BrowserRouter>
      <div className="main-layout">
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="logo-react">
          <span className="logo-text">React</span>
          <img src={logo} alt="react logo" />
        </div>

          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>
                <i className="fas fa-home"></i> <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item" ref={dropdownRef}>
              <div className="nav-link-dropdown" onClick={toggleSubMenu}>
                <i className="fas fa-info-circle"></i> <span>About</span>
                <i className={`fas fa-chevron-down arrow ${isSubMenuOpen ? "rotate" : ""}`}></i>
              </div>

              <ul className={`submenu ${isSubMenuOpen ? "open" : ""}`}>
                <li>
                  <NavLink to="/about/history" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={closeSubMenu}>
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about/team" className={({ isActive }) => (isActive ? "nav-active" : "")} onClick={closeSubMenu}>
                    Team
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? "nav-active" : ""}>
                <i className="fas fa-user"></i> <span>Users</span>
              </NavLink>
            </li>
          </ul>
      </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/about/history" element={<h1>History Page</h1>} />
            <Route path="/about/team" element={<h1>Team Page</h1>} />
            <Route path="/users" element={<h1>Users Page</h1>} />
          </Routes>
        </div>

      </div>
  </BrowserRouter>

  )
}

export default Navigation;