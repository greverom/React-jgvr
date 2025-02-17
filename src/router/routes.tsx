import { lazy, ReactElement, Suspense } from "react";
import Loading from "../components/loading/loading";

export interface AppRoute {
  path: string;
  element: ReactElement;
  roles: ("ADMINISTRADOR" | "GUEST")[]; 
}

const Home = lazy(() => import("../pages/Home"));
const Consulting = lazy(() => import("../pages/Consulting"));
const Support = lazy(() => import("../pages/Support"));
const User = lazy(() => import("../pages/User"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const withSuspense = (Component: ReactElement) => (
  <Suspense fallback={<Loading/>}>
    {Component}
  </Suspense>
);

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: withSuspense ( <Home/> ),
    roles: ["ADMINISTRADOR", "GUEST"], 
  },
  {
    path: "/services/consulting",
    element:withSuspense (<Consulting/>),
    roles: ["ADMINISTRADOR"], 
  },
  {
    path: "/services/support",
    element:withSuspense (<Support/>),
    roles: ["ADMINISTRADOR"], 
  },
  {
    path: "/users",
    element:withSuspense (<User/>),
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