import { NavLink, Outlet } from "react-router-dom";
// import NavbarSecond from "../SharedPages/NavbarSecond";
import useAdmin from "../../hooks/useAdmin";
import useManager from "../../hooks/useManager";
// import Navbar from "../SharedPages/Navbar";
import { TiThMenuOutline } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isManager] = useManager();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-cyan-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-cyan-400" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-cyan-400" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:flex">
      <div className="flex justify-between items-center">
        <div className="drawer lg:drawer-open w-max">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center pl-3">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="drawer-button hover:cursor-pointer lg:hidden"
            >
              <TiThMenuOutline className="text-3xl"></TiThMenuOutline>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-3/4 md:w-80 min-h-full bg-slate-800 text-white md:text-lg font-medium">
              {/* Sidebar content here */}
              <h4 className="text-center text-lg md:text-xl xl:text-2xl font-normal text-stone-300 mb-7">
                Result Processing System
              </h4>
              {isAdmin && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/manageUser"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-cyan-400" : ""
                      }
                    >
                      Manage User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageResult"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-cyan-400" : ""
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
                      to="/dashboard/addResult"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-cyan-400" : ""
                      }
                    >
                      Add Result
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/secondManager"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-cyan-400" : ""
                      }
                    >
                      Second Manager
                    </NavLink>
                  </li>
                </>
              )}
              <p className="w-11/12 mx-auto border border-white my-5"></p>
              {navLinks}
            </ul>
          </div>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl lg:hidden">
          RP System
        </NavLink>
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/whSBfc4/user.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-sky-500" : ""
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/setting"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-sky-500" : ""
                }
              >
                Setting
              </NavLink>
            </li>
            <li>
              {user ? (
                <p onClick={handleLogOut}>Logout</p>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-500" : ""
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
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
