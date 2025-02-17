
export interface SidebarLink {
    title: string;
    path: string;
    icon: string;
    roles: ("ADMINISTRADOR" | "GUEST")[];
    subMenu?: SidebarLink[]; 
    isLogout?: boolean;
  }
  
  export const sidebarLinks: SidebarLink[] = [
    {
      title: "Home",
      path: "/",
      roles: ["ADMINISTRADOR", "GUEST"],
      icon: "fas fa-home",
    },
    {
      title: "Services",
      path: "/services",
      icon: "fas fa-concierge-bell",
      roles: ["ADMINISTRADOR"],
      subMenu: [
        {
          title: "Consulting",
          path: "/services/consulting",
          icon: "fas fa-user-tie",
          roles: ["ADMINISTRADOR"],
        },
        {
          title: "Support",
          path: "/services/support",
          icon: "fas fa-headset",
          roles: ["ADMINISTRADOR"],
        },
      ],
    },
    {
      title: "Users",
      path: "/users",
      icon: "fas fa-user",
      roles: ["ADMINISTRADOR"],
    },
    {
      title: "Salir",
      path: "#", 
      icon: "fas fa-sign-out-alt",
      roles: ["ADMINISTRADOR", "GUEST"],
      isLogout: true, 
    },
  ];