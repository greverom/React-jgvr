import { ReactElement } from "react";

export interface AppRoute {
  path: string;
  element: ReactElement;
  roles: ("ADMINISTRADOR" | "GUEST")[]; 
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <div>Contenido de Home</div>,
    roles: ["ADMINISTRADOR", "GUEST"], 
  },
  {
    path: "/services/consulting",
    element: <div>Contenido de Consulting</div>,
    roles: ["ADMINISTRADOR"], 
  },
  {
    path: "/services/support",
    element: <div>Contenido de Support</div>,
    roles: ["ADMINISTRADOR"], 
  },
  {
    path: "/users",
    element: <div>Contenido de Users</div>,
    roles: ["ADMINISTRADOR"], 
  },
];