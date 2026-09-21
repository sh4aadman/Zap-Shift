import { Link } from "react-router";
import Logo from "../../../components/Shared/Logo/Logo";

function ForgetPassword() {
  return (
    <div className="px-14 py-11 bg-white">
      <Logo />
      <section className="h-full px-44 flex flex-col justify-center">
        <h2 className="font-inter font-extrabold text-5xl text-black leading-12 tracking-tight">
          Forgot Password
        </h2>
        <p className="mt-1 font-inter text-base text-black leading-7">
          Enter your email address and we’ll send you a <br /> reset link.
        </p>
        <form className="mt-5">
          <fieldset className="fieldset">
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Email"
            />
            <button className="btn btn-primary mt-3 font-inter font-medium text-sm text-black leading-6">
              Send
            </button>
          </fieldset>
        </form>
        <p className="mt-3 font-inter text-base text-warning">
          Remember your password?{" "}
          <Link to={"/auth/login"} className="text-warning-content">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}

export default ForgetPassword;
