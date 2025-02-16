export interface SidebarLink {
    title: string;
    path: string;
    icon: string;
    subMenu?: SidebarLink[]; 
    isLogout?: boolean;
  }
  
  export const sidebarLinks: SidebarLink[] = [
    {
      title: "Home",
      path: "/",
      icon: "fas fa-home",
    },
    {
      title: "Services",
      path: "/services",
      icon: "fas fa-concierge-bell",
      subMenu: [
        {
          title: "Consulting",
          path: "/services/consulting",
          icon: "fas fa-user-tie",
        },
        {
          title: "Support",
          path: "/services/support",
          icon: "fas fa-headset",
        },
      ],
    },
    {
      title: "Users",
      path: "/users",
      icon: "fas fa-user",
    },
    {
      title: "Salir",
      path: "#", 
      icon: "fas fa-sign-out-alt",
      isLogout: true, 
    },
  ];