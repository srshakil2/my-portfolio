import { Outlet } from "react-router-dom";
import Navber from "./Component/Navber/Navber";

const MainHome = () => {
  return (
    <div className="bg-indigo-950">
      <div className="">
        <Navber></Navber>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainHome;
