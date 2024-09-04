import { Outlet } from "react-router-dom";

// Styles
import appStyle from "../AppContainer.module.css";

// Components
import VNav from "../components/VNav/VNav";

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
};

export default function Layout() {
  return (
    <div className={appStyle.container}>
      <div className={appStyle.containerLeft}>
        <div className={appStyle.header}>
          <h4 className={appStyle.logoTxt}>
            React Router <br /> v6
          </h4>
        </div>

        <VNav />
        <div className={appStyle.logout}>
          <div className={appStyle.btnLogout} onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </div>
        </div>
      </div>
      <div className={appStyle.containerRight}>
        <Outlet />
      </div>
    </div>
  );
}
