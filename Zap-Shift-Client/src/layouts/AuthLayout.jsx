import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <Outlet />
      <figure className="bg-[#FAFDF0] flex justify-center items-center">
        <img src={authImage} alt="auth-image" />
      </figure>
    </div>
  );
}

export default AuthLayout;
