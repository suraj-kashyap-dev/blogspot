import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({
  menuItem,
  isMenuActive,
  activeMenu,
  setHoveringMenu,
  setIsMenuActive,
  hoveringMenu,
}) => {
  return (
    <div
      key={menuItem.key}
      className={`px-4 group/item ${
        activeMenu === menuItem.key ? "active" : "inactive"
      }`}
    >
      <NavLink
        className={`flex gap-2 p-1.5 items-center cursor-pointer hover:rounded-lg ${
          activeMenu === menuItem.key
            ? "bg-blue-600 rounded-lg"
            : "hover:bg-gray-100 hover:dark:bg-gray-950"
        } peer`}
        to={menuItem.children.length ? "javascript:void(0)" : menuItem.url}
        onMouseLeave={() => !isMenuActive && setHoveringMenu("")}
        onMouseOver={() => setHoveringMenu(menuItem.key)}
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <div
          className={`font-normal group-hover/item:visible text-gray-600 dark:text-white ${
            activeMenu === menuItem.key ? "text-white dark:text-gray-50" : ""
          }`}
        >
          <i className={`${menuItem.icon} pl-1`}></i>
        </div>
        <div
          className={`flex-1 transition-all duration-80 flex justify-between items-center text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap group-[.sidebar-collapsed]/container:hidden ${
            activeMenu === menuItem.key ? "text-white" : ""
          } group`}
        >
          <p>{menuItem.name}</p>
          {menuItem.children.length > 0 && (
            <i
              style={{ fontSize: "15px" }}
              className={`fa-solid fa-list invisible font-normal group-hover/item:visible ${
                activeMenu === menuItem.key ? "text-white" : ""
              }`}
            ></i>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default Item;
