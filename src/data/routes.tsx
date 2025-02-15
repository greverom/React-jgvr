import { ReactElement } from "react";

export interface AppRoute {
  path: string;
  element: ReactElement; 
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <div>Contenido de Home</div>, 
  },
  {
    path: "/services/consulting",
    element: <div>Contenido de Consulting</div>, 
  },
  {
    path: "/services/support",
    element: <div>Contenido de Support</div>, 
  },
  {
    path: "/users",
    element: <div>Contenido de Users</div>, 
  },
];