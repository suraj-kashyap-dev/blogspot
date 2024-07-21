import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import menus from "../../../utils/menu.jsx";
import SubItem from "./SubItem";
import Item from "./Item";

const Sidebar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [hoveringMenu, setHoveringMenu] = useState("");
  const sidebarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  useEffect(() => {
    /**
     * Handle the focusout.
     * 
     * @param {Event} event
     * @returns {void} 
     */
    const handleFocusOut = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuActive(false);

        const parentElement = sidebarRef.current.parentElement;

        if (parentElement.classList.contains("sidebar-not-collapsed")) {
          parentElement.classList.remove("sidebar-not-collapsed");
          parentElement.classList.add("sidebar-collapsed");
        }
      }
    };

    window.addEventListener("click", handleFocusOut);

    return () => {
      window.removeEventListener("click", handleFocusOut);
    };
  }, []);

  useEffect(() => {
    /**
     * Handle the active menu and submenu.
     */
    menus.forEach((menuItem) => {
      if (menuItem.url === location.pathname) {
        setActiveMenu(menuItem.key);
      } else {
        menuItem.children.forEach((subMenuItem) => {
          if (subMenuItem.url === location.pathname) {
            setActiveMenu(menuItem.key);
            setActiveSubMenu(subMenuItem.key);
          }
        });
      }
    });
  }, [location.pathname]);

  /**
   * Handle the navigation menu for submenuItem.
   * 
   * @param {String} path 
   */
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuActive(false);
  };

  /**
   * Handle the mouse over.
   * 
   * @param {Event} event 
   * @returns {void}
   */
  const handleMouseOver = (event) => {
    if (isMenuActive) {
      return;
    }

    const parentElement = event.currentTarget.parentElement;

    if (parentElement.classList.contains("sidebar-collapsed")) {
      parentElement.classList.remove("sidebar-collapsed");
      parentElement.classList.add("sidebar-not-collapsed");
    }
  };

  /**
   * Handle the mouse leave.
   * 
   * @param {Event} event 
   * @returns {void}
   */
  const handleMouseLeave = (event) => {
    if (isMenuActive) {
      return;
    }

    const parentElement = event.currentTarget.parentElement;

    if (parentElement.classList.contains("sidebar-not-collapsed")) {
      parentElement.classList.remove("sidebar-not-collapsed");
      parentElement.classList.add("sidebar-collapsed");
    }
  };

  return (
    <div className="group/container sidebar-collapsed flex gap-4">
      <div
        ref={sidebarRef}
        style={{ top: "4.5rem" }}
        className="duration-80 fixed pt-2 z-[10] h-full w-[280px] transition-all bg-white shadow group-[.sidebar-collapsed]/container:w-[70px] dark:bg-gray-900 max-lg:hidden"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div className="journal-scroll transition-all duration-80 h-[calc(100vh-80px)] overflow-hidden group-[.sidebar-collapsed]/container:overflow-visible">
          <nav className="sidebar-rounded grid w-full gap-2">
            {menus.map((menuItem) => (
              <React.Fragment key={menuItem.key}>
                <Item
                  menuItem={menuItem}
                  isMenuActive={isMenuActive}
                  activeMenu={activeMenu}
                  setHoveringMenu={setHoveringMenu}
                  setIsMenuActive={setIsMenuActive}
                />
                {menuItem.children.length > 0 && (
                  <SubItem
                    isMenuActive={isMenuActive}
                    hoveringMenu={hoveringMenu}
                    menuItem={menuItem}
                    activeSubMenu={activeSubMenu}
                    handleNavigation={handleNavigation}
                  />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
