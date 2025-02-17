import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/loading/loading";
import "../styles/dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
      
    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("consulting", { replace: true });
        }
    }, [location.pathname, navigate]);

  return (
    <div>
        <h1>Dashboard</h1>
        <div className="dashboard-nav">
            <NavLink to="consulting" className="dashboard-btn">Consulting</NavLink>  
            <NavLink to="support" className="dashboard-btn">Support</NavLink>  
        </div>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Dashboard;