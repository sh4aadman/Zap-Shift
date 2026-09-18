import logo from "../../../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-end">
      <img src={logo} alt="brand-logo-zapshift" />
      <h1 className="font-extrabold text-3xl text-base-100 -ms-3">ZapShift</h1>
    </div>
  );
}

export default Logo;
