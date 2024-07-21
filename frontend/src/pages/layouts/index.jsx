import { useLocation } from "react-router-dom";
import Header from "../../components/Partials/Header";
import SideBar from "../../components/Partials/SideBar";

function Layout({ children }) {
  const location = useLocation();

  const showHeaderAndSidebar = location.pathname !== "/login";

  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      {showHeaderAndSidebar && <Header />}
      <div className="flex flex-1">
        {showHeaderAndSidebar && <SideBar />}
        <div className={`flex-1 ${showHeaderAndSidebar ? "p-4 mt-14 sm:ml-20 max-lg:!ml-0" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
