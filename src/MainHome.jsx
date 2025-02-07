import { Outlet } from "react-router-dom";
import Navber from "./Component/Navber/Navber";

const MainHome = () => {
  return (
    <div className="bg-indigo-950 relative">
      <div className=" sticky top-0 z-10 opacity-95">
        <Navber></Navber>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainHome;
