import { lazy } from "react";
import { AppRoute } from "./routes"; 

const Consulting = lazy(() => import("../pages/Consulting"));
const Support = lazy(() => import("../pages/Support"));

export const dashboardRoutes: AppRoute[] = [
  {
    index: true, 
    element: <Consulting />, 
    roles: ["ADMINISTRADOR"],
  },
  {
    path: "consulting",
    element: <Consulting />,
    roles: ["ADMINISTRADOR"],
  },
  {
    path: "support",
    element: <Support />,
    roles: ["ADMINISTRADOR"],
  },
];