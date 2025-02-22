import { lazy } from "react";
import { AppRoute } from "./type";
 

const Register = lazy(() => import("../pages/Auth/register"));
const Login = lazy(() => import("../pages/Auth/login"));

export const dashboardRoutes: AppRoute[] = [
  {
    index: true, 
    element: <Register />, 
    roles: ["ADMINISTRADOR"],
  },
  {
    path: "register",
    element: <Register />,
    roles: ["ADMINISTRADOR"],
  },
  {
    path: "login",
    element: <Login />,
    roles: ["ADMINISTRADOR"],
  },
];