import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../SharedPages/Navbar";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="bg-slate-100 drop-shadow-lg">
        <Navbar></Navbar>
      </div>
      {isAdmin && (
        <NavLink
          to="/dashboard/manageUser"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
          }
        >
          Manage User
        </NavLink>
      )}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
