import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.svg";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 sticky top-0 shadow-xl z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
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
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center btn btn-ghost md:h-[55px] h-[40px]"
          >
            <img src={logo} className="md:w-12 w-10 md:h-12 h-10" alt="logo" />
            <p className="md:text-lg text-sm">
              <span className="block text-left text-[#267188] font-bold md:text-lg">
                JR
              </span>{" "}
              RESIDENCE
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-bold">
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
