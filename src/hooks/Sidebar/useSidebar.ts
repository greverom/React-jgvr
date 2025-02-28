import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const sidebarRef = useRef<HTMLDivElement | null>(null); 

  const toggleSubMenu = (menuKey: string) => {
    setOpenDropdown((prev) => (prev === menuKey ? null : menuKey));
  };

  const closeSubMenu = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen && 
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false); 
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return {
    isSidebarOpen,
    setIsSidebarOpen, 
    openDropdown,
    toggleSubMenu,
    closeSubMenu,
    sidebarRef,
    dropdownRefs,
  };
};