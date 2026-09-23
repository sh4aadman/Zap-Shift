import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../../components/Shared/Logo/Logo";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Social from "../../../components/Ui/Social/Social";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signinUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const formSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signinUser(email, password)
      .then((creds) => {
        console.log(creds.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <form onSubmit={handleSubmit(formSubmit)} className="mt-5">
          <fieldset className="fieldset">
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="font-inter font-medium text-xs text-red-500">
                Email is required
              </p>
            )}
            <label className="label mt-3 font-inter font-medium text-sm text-neutral leading-5">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="font-inter font-medium text-xs text-red-500">
                Password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="font-inter font-medium text-xs text-red-500">
                Password must be at least six(6) characters or longer
              </p>
            )}
            <div className="mt-3">
              <Link
                to={"/auth/forget-password"}
                className="link font-inter text-base text-warning leading-6"
              >
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
          <Link
            state={location?.state}
            to={"/auth/register"}
            className="text-warning-content"
          >
            Register
          </Link>
        </p>
        <p className="my-3 font-inter text-base text-warning text-center leading-6">
          Or
        </p>
        <Social />
      </section>
    </div>
  );
}

export default Login;
