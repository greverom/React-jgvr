import { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/ui/loading";
import Button from "../components/ui/buttons/button"; 
import { DashboardContainer, DashboardNav, DashboardTitle } from "../styles/Dashboard/dashboard.style";

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
    <DashboardContainer>
      <DashboardTitle>Autenticación</DashboardTitle>
      <DashboardNav>
        <Button onClick={() => navigate("login")} variant="primary" isActive={isLoginActive} >
            Login
        </Button>  

        <Button onClick={() => navigate("register")} variant="success" isActive={isRegisterActive} >
            Register
        </Button>  
      </DashboardNav>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </DashboardContainer>
  );
};

export default Dashboard;