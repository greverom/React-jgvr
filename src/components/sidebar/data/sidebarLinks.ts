import { HomeIcon, DashboardIcon, UsersIcon, LogoutIcon } from "../../icons/icons/icons";

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
      path: "/",
      roles: ["ADMINISTRADOR", "GUEST"],
      icon: HomeIcon,
    },
    {
      title: "Dashboard",
      path: "/services",
      icon: DashboardIcon,
      roles: ["ADMINISTRADOR"],
      subMenu: [
        {
          title: "Consulting",
          path: "/services/consulting",
          icon: DashboardIcon,
          roles: ["ADMINISTRADOR"],
        },
        {
          title: "Support",
          path: "/services/support",
          icon: DashboardIcon,
          roles: ["ADMINISTRADOR"],
        },
      ],
    },
    {
      title: "Users",
      path: "/users",
      icon: UsersIcon,
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Salir",
      path: "#", 
      icon: LogoutIcon,
      roles: ["ADMINISTRADOR", "GUEST"],
      isLogout: true, 
    },
  ];