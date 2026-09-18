import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to={"/services"} className="shadow-none">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"} className="shadow-none">
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className="shadow-none">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"} className="shadow-none">
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blog"} className="shadow-none">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="shadow-none">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar p-5 bg-white rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-base text-accent"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-5 font-medium text-base text-accent">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          id="button"
          to={"/auth/login"}
          className="mr-2 px-4 py-2.5 border border-base-200 rounded-2xl font-bold text-lg text-accent"
        >
          Sign In
        </Link>
        <Link
          id="button"
          to={"/auth/register"}
          className="px-4 py-2.5 border border-base-200 rounded-2xl font-bold text-lg text-accent"
        >
          Sign Up
        </Link>
        <BsArrowUpRightCircleFill className="text-5xl rounded-full bg-primary" />
      </div>
    </div>
  );
}

export default Navbar;
