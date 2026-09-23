import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

function NavLinks({ secondary }) {
  const { user } = useAuth();

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
          to={"/be-rider"}
          className={`shadow-none ${secondary ? "text-base-200" : ""} ${user && "text-[#5B6A2E]"}`}
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
}

export default NavLinks;
