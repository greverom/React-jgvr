import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/ui/loading";
import { dashboardRoutes } from "./dashboardRoutes";
import { AppRoute } from "./type";


const Dashboard = lazy(() => import("../pages/Dashboard"));
const Home = lazy(() => import("../pages/Home"));
const User = lazy(() => import("../pages/User"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: withSuspense(<Home />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/dashboard",
    element: withSuspense(<Dashboard />), 
    roles: ["ADMINISTRADOR"],
    children: dashboardRoutes, 
  },

  {
    path: "/users",
    element: withSuspense(<User />),
    roles: ["ADMINISTRADOR"],
  },
  
  {
    path: "/about",
    element: withSuspense(<About />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/contact",
    element: withSuspense(<Contact />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },
];