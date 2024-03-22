import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
const Navbar = () => {
  const {user,UserLogout} = useAuth();
  const hendlelogout = () => {
    UserLogout()
        .then(() => { })
        .catch((error) => {
            console.log(error)
        })
}
  const navs = (
    <>
      <NavLink to="/">
        <li className="text-lg font-semibold text-black">
          <a>Home</a>
        </li>
      </NavLink>

      <NavLink to="/daseboard/home">
        <li className="text-lg font-semibold text-black">
          <a>Daseboard</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navs}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DNS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navs}</ul>
        </div>
        <div className="navbar-end">
       {
        user?
        <a onClick={hendlelogout} className="bg-white px-4 py-2 font-bold rounded-md">Logout</a>:<Link to="/login">
            <a className="bg-white px-4 py-2 font-bold rounded-md">Login</a>
          </Link>
       }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
