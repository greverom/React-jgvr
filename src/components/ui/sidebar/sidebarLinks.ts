import { HomeIcon, DashboardIcon, UsersIcon, LogoutIcon, AboutIcon, ContactIcon } from "../../../assets/icons/icons";

export interface SidebarLink {
    title: string;
    path: string;
    icon: React.FC;
    roles: ("ADMINISTRADOR" | "GUEST")[];
    subMenu?: SidebarLink[]; 
    isLogout?: boolean;
  }
  
  export const sidebarLinks: SidebarLink[] = [
    {
      title: "Home",
      path: "/home",
      roles: ["ADMINISTRADOR", "GUEST"],
      icon: HomeIcon,
    },
    {
      title: "Authentication",
      path: "/dashboard",
      icon: DashboardIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Formulario",
      path: "/users",
      icon: UsersIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Modales",
      path: "/modals",
      icon: AboutIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
    },
    {
      title: "Tablas",
      path: "/table",
      icon: ContactIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
    },
    
    {
      title: "Salir",
      path: "#", 
      icon: LogoutIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
      isLogout: true, 
    },
  ];