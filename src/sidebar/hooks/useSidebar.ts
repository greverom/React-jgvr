import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); 
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const toggleSubMenu = (menuKey: string) => {
    setOpenDropdown(prev => (prev === menuKey ? null : menuKey)); 
  };

  const closeSubMenu = () => {
    setOpenDropdown(null); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickInside = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
  
      if (!isClickInside) {
        setOpenDropdown(null);
      }
    };
  
    if (isSidebarExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setOpenDropdown(null);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarExpanded]); 

  const handleMouseEnter = () => setIsSidebarExpanded(true);
  const handleMouseLeave = () => setIsSidebarExpanded(false);

  return {
    openDropdown,
    toggleSubMenu,
    closeSubMenu,
    handleMouseEnter,
    handleMouseLeave,
    isSidebarExpanded,
    dropdownRefs,
  };
};