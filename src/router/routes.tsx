import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/loading/loading";
import { About, Contact, Home, User } from "../pages";
import { dashboardRoutes } from "./DashboardRoutes";

export interface AppRoute {
  path?: string;
  element: ReactElement;
  roles: ("ADMINISTRADOR" | "GUEST")[];
  children?: AppRoute[];
  index?:boolean;
}

const Dashboard = lazy(() => import("../pages/Dashboard"));

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