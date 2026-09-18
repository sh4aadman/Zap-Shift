import { NavLink } from "react-router";

function NavLinks({ secondary }) {
  return (
    <>
      <li>
        <NavLink
          to={"/services"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/coverage"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about-us"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pricing"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blog"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={`shadow-none ${secondary ? "text-base-200" : ""}`}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
}

export default NavLinks;
