import { useEffect, useRef, useState } from "react";

export const useSidebar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };

    if (isSubMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    if (!isSidebarExpanded) {
      setIsSubMenuOpen(false);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubMenuOpen, isSidebarExpanded]);

  const handleMouseEnter = () => setIsSidebarExpanded(true);
  const handleMouseLeave = () => setIsSidebarExpanded(false);

  return {
    isSubMenuOpen,
    dropdownRef,
    toggleSubMenu,
    closeSubMenu,
    handleMouseEnter,
    handleMouseLeave,
  };
};