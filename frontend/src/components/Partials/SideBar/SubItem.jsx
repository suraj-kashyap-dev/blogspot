import React from "react";

const SubItem = ({
  menuItem,
  isMenuActive,
  hoveringMenu,
  activeSubMenu,
  handleNavigation,
}) => {
  return (
    <div
      className={`absolute left-[280px] top-0 hidden w-auto w-max-[350px] flex-col bg-gray-100  ${
        isMenuActive && hoveringMenu === menuItem.key ? "!flex" : "hidden"
      }`}
    >
      <div
        style={{ top: "4.5rem" }}
        className="sidebar-rounded fixed z-[1000] h-full w-auto w-max-[350px] border  dark:border-gray-600 bg-white pt-4 dark:bg-gray-900 max-lg:hidden"
      >
        <div className="journal-scroll h-[calc(100vh-80px)] overflow-auto ">
          <nav className="grid w-full gap-2">
            {menuItem.children.map((subMenuItem) => (
              <div
                key={subMenuItem.key}
                className={`px-4 group/item  ${
                  activeSubMenu === subMenuItem.key ? "active" : "inactive"
                }`}
              >
                <div
                  onClick={() => handleNavigation(subMenuItem.url)}
                  className={`flex gap-2.5 p-1 items-center cursor-pointer hover:rounded-lg  ${
                    activeSubMenu === subMenuItem.key
                      ? "bg-blue-600 rounded-lg"
                      : "hover:bg-gray-100 hover:dark:bg-gray-950"
                  } peer`}
                >
                  <p
                    className={`text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap  ${
                      activeSubMenu === subMenuItem.key ? "text-white" : ""
                    }`}
                  >
                    {subMenuItem.name}
                  </p>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubItem;
