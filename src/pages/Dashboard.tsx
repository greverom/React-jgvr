import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/ui/loading";
import Button from "../components/ui/buttons/button"; 
import "../styles/dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
      
    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("register", { replace: true });
        }
    }, [location.pathname, navigate]);

    const isLoginActive = location.pathname.includes("/dashboard/login"); 
    const isRegisterActive = location.pathname.includes("/dashboard/register");

  return (
    <div className="dashboard-container">
        <h1>Authentication</h1>
        <div className="dashboard-nav">
            <Button onClick={() => navigate("login")} variant="primary" isActive={isLoginActive} >
                Login
            </Button>  

            <Button onClick={() => navigate("register")} variant="success" isActive={isRegisterActive} >
                Register
            </Button>  
        </div>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Dashboard;