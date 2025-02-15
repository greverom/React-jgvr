import { BrowserRouter, NavLink, Route, Routes} from "react-router-dom"
import logo from '../assets/react.svg'

export const Navigation = () => {
  return (
    
  <BrowserRouter>
      <div className="main-layout">
      <nav>
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
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>
                <i className="fas fa-info-circle"></i> <span>About</span>
              </NavLink>
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
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/users" element={<h1>Users Page</h1>} />
          </Routes>
        </div>

      </div>
  </BrowserRouter>

  )
}

  export default Navigation;
