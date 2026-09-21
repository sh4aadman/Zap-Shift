import { Link } from "react-router";
import Logo from "../../../components/Shared/Logo/Logo";

function Verification() {
  return (
    <div className="px-14 py-11 bg-white">
      <Logo />
      <section className="h-full px-44 flex flex-col justify-center">
        <h2 className="font-inter font-extrabold text-5xl text-black leading-12 tracking-tight">
          Enter Code
        </h2>
        <p className="mt-1 font-inter text-base text-black leading-7">
          Enter 6 digit code that we sent in your email <br /> address
        </p>
        <form className="mt-5">
          <fieldset className="fieldset">
            <div className="flex items-center gap-5">
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
              <input
                type="text"
                autoComplete="one-time-code"
                inputMode="numeric"
                maxLength="1"
                pattern="[0-9]{6}"
                className="w-9 px-3 py-2 rounded-lg border border-[#CBD5E1] font-inter text-base text-black leading-6 focus:outline-0"
                required
              />
            </div>
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

export default Verification;
