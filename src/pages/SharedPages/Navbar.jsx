import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useManager from "../../hooks/useManager";

const Navbar = () => {
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
            isPending ? "pending" : isActive ? "text-sky-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {user && isAdmin && (
          <NavLink
            to="/dashboard/manageUser"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700" : ""
            }
          >
            Dashboard
          </NavLink>
        )}
        {user && isManager && (
          <NavLink
            to="/dashboard/firstManager"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700" : ""
            }
          >
            Dashboard
          </NavLink>
        )}
        {!isAdmin && !isManager && (
          <NavLink
            to="/dashboard/user"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700" : ""
            }
          >
            Dashboard
          </NavLink>
        )}
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-500" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-500" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          RP System
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 mr-5 font-medium">{navLinks}</ul>
        </div>
        <div className="dropdown dropdown-end">
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
    </div>
  );
};

export default Navbar;
