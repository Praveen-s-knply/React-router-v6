import { Outlet } from "react-router-dom";

// Components
import HNavBar from "../../components/HNavBar/HNavBar";

export default function HostLayout() {
  return (
    <>
      <div style={{ height: "15%" }}>
        <HNavBar />
      </div>
      <Outlet />
    </>
  );
}
