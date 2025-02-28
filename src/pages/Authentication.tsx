import { Suspense } from "react";
import { useAuthenticationRedirect } from "../hooks/Auth/authenticationPage";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loading/loading";
import Button from "../components/ui/buttons/button"; 
import { DashboardContainer, DashboardContent, 
        DashboardNav, DashboardTitle 
       } from "../styles/Authentication/authenticationPage.style";

const Dashboard = () => {
  useAuthenticationRedirect();
  
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginActive = location.pathname.includes("/authentication/login"); 
  const isRegisterActive = location.pathname.includes("/authentication/register");

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

      <DashboardContent>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </DashboardContent>

    </DashboardContainer>
  );
};

export default Dashboard;