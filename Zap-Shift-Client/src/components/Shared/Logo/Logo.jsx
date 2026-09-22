import { Link } from "react-router";
import logo from "../../../assets/logo.png";

function Logo({ secondary }) {
  return (
    <Link to={"/"} className="flex items-end">
      <img src={logo} alt="brand-logo-zapshift" />
      <h1
        className={`font-extrabold text-3xl ${secondary ? "text-white" : "text-base-100"} -ms-3`}
      >
        ZapShift
      </h1>
    </Link>
  );
}

export default Logo;
