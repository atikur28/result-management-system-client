import { NavLink, Outlet } from "react-router-dom";
// import NavbarSecond from "../SharedPages/NavbarSecond";
import useAdmin from "../../hooks/useAdmin";
import useManager from "../../hooks/useManager";
// import Navbar from "../SharedPages/Navbar";
import { TiThMenuOutline } from "react-icons/ti";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();

  return (
    <div className="lg:flex">
      <div className="drawer lg:drawer-open w-max">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center pt-3 pl-3">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><TiThMenuOutline className="text-3xl"></TiThMenuOutline></label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-3/4 md:w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manageUser"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline"
                        : ""
                    }
                  >
                    Manage User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageResult"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline"
                        : ""
                    }
                  >
                    Manage Result
                  </NavLink>
                </li>
              </>
            )}
            {isManager && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/firstManager"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline"
                        : ""
                    }
                  >
                    First Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/secondManager"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline"
                        : ""
                    }
                  >
                    Second Manager
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="px-2 lg:flex-1 lg:pl-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
