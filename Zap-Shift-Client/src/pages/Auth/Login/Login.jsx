import { Link } from "react-router";
import Logo from "../../../components/Shared/Logo/Logo";

function Login() {
  return (
    <div className="px-14 py-11 bg-white">
      <Logo />
      <section className="h-full px-44 flex flex-col justify-center">
        <h2 className="font-inter font-extrabold text-5xl text-black leading-12 tracking-tight">
          Welcome Back
        </h2>
        <p className="mt-1 font-inter text-base text-black leading-7">
          Login with ZapShift
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
            <label className="label mt-3 font-inter font-medium text-sm text-neutral leading-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Password"
            />
            <div className="mt-3">
              <Link to={"/auth/forget-password"} className="link font-inter text-base text-warning leading-6">
                Forgot password?
              </Link>
            </div>
            <button className="btn btn-primary mt-3 font-inter font-medium text-sm text-black leading-6">
              Login
            </button>
          </fieldset>
        </form>
        <p className="mt-3 font-inter text-base text-warning">
          Don’t have any account?{" "}
          <Link to={"/auth/register"} className="text-warning-content">
            Register
          </Link>
        </p>
        <p className="my-3 font-inter text-base text-warning text-center leading-6">
          Or
        </p>
        <button className="btn bg-[#E9ECF1] border-[#E9ECF1] font-medium text-sm text-black leading-6">
          <svg
            aria-label="Google logo"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#E9ECF1"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign In with Google
        </button>
      </section>
    </div>
  );
}

export default Login;
