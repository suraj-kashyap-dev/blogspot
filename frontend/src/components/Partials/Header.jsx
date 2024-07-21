import { useEffect, useState } from "react";
import { setCookie, getCookie } from "../../utils/cookies";
import Logo from "../../assets/logo.png";
import UserLogo from "../../assets/user.jpg";

const storedTheme = getCookie("theme") || "light";

document.documentElement.classList.add(storedTheme);

const Header = () => {
  const [theme, setTheme] = useState(storedTheme);

  /**
   * Handle the theme.
   */
  const handleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      setCookie("theme", newTheme, 365);

      return newTheme;
    });
  };

  /**
   * Change theme based on theme changed.
   */
  useEffect(() => {
    const currentTheme = theme === "dark" ? "dark" : "light";
    const oppositeTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(oppositeTheme);
    document.documentElement.classList.add(currentTheme);
  }, [theme]);

  /**
   * Setting up the theme and store into cookie.
   */
  useEffect(() => {
    const storedTheme = getCookie("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>

              <a href="#" className="flex ms-2 md:me-24">
                <img
                  className="h-12 w-12 rounded-full"
                  src={Logo}
                  alt="user"
                />
                <span className="pl-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Blogspot
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {theme == "dark" ? (
                  <span
                    onClick={handleTheme}
                    className="cursor-pointer rounded-md p-1.5 transition-all hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    <i
                      className="fa-solid fa-circle-half-stroke dark:text-gray-100 text-2xl pb-1 h-6 w-6"
                    ></i>
                  </span>
                ) : (
                  <span
                    onClick={handleTheme}
                    className="cursor-pointer rounded-md p-1.5 transition-all hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    <i
                      className="fa-solid fa-moon dark:text-gray-100 text-2xl pb-1 pl-1 h-6 w-6"
                    ></i>
                  </span>
                )}
              </div>
              <div className="flex items-center ms-3">
                <div>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src={UserLogo}
                    alt="user photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
