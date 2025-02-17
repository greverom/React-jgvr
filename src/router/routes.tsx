import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/loading/loading";
import { About, Contact, Home, User } from "../pages";

export interface AppRoute {
  path?: string;
  element: ReactElement;
  roles: ("ADMINISTRADOR" | "GUEST")[];
  children?: AppRoute[];
  index?:boolean;
}

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Consulting = lazy(() => import("../pages/Consulting"));
const Support = lazy(() => import("../pages/Support"));


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
    children: [  

      {
        index: true, 
        element: withSuspense(<Consulting />),
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

    ],
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