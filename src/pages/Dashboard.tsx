import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/ui/loading";
import "../styles/dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
      
    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("register", { replace: true });
        }
    }, [location.pathname, navigate]);

  return (
    <div className="dashboard-container">
        <h1>Authentication</h1>
        <div className="dashboard-nav">
            <NavLink to="login" className="dashboard-btn">Login</NavLink>  
            <NavLink to="register" className="dashboard-btn">Register</NavLink>  
        </div>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Dashboard;