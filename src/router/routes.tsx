import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/ui/Loading/loading";
import { dashboardRoutes } from "./dashboardRoutesChild";
import { AppRoute } from "./type";
import { Home, Modals } from "../pages";
import Authentication from "../pages/Authentication";

const Forms = lazy(() => import("../pages/Forms"));
const Table = lazy(() => import("../pages/Table"));

const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading />}>{Component}</Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/home",
    element: withSuspense(<Home />),
    roles: ["ADMINISTRADOR", "GUEST"],
  },

  {
    path: "/authentication",
    element: withSuspense(<Authentication />), 
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