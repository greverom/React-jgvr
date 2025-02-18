import { ReactElement } from "react";

export interface AppRoute {
  path?: string;
  element: ReactElement;
  roles: ("ADMINISTRADOR" | "GUEST")[];
  children?: AppRoute[];
  index?:boolean;
}