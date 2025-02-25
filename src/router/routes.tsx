import { ReactElement, Suspense } from "react";
import Loading from "../components/ui/loading";
import { dashboardRoutes } from "./dashboardRoutesChild";
import { AppRoute } from "./type";
import { Table, Dashboard, Home, Modals } from "../pages";
import Forms from "../pages/Forms";

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
    path: "/forms",
    element: withSuspense(<Forms />),
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