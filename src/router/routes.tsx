import { ReactElement, Suspense } from "react";
import Loading from "../components/ui/loading";
import { dashboardRoutes } from "./dashboardRoutes";
import { AppRoute } from "./type";
import { Table, Dashboard, Home, User, Modals } from "../pages";

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
    path: "/modals",
    element: withSuspense(<Modals />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/table",
    element: withSuspense(<Table />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },
];