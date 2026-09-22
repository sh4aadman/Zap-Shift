import { Link } from "react-router";
import Logo from "../../../components/Shared/Logo/Logo";
import imgUploadIcon from "../../../assets/image-upload-icon.png";
import { useForm } from "react-hook-form";
import Social from "../../../components/Ui/Social/Social";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
  };

  return (
    <div className="px-14 py-11 bg-white">
      <Logo />
      <section className="h-full px-44 flex flex-col justify-center">
        <h2 className="font-inter font-extrabold text-5xl text-black leading-12 tracking-tight">
          Create an Account
        </h2>
        <p className="mt-1 font-inter text-base text-black leading-7">
          Register with ZapShift
        </p>
        <form onSubmit={handleSubmit(formSubmit)} className="mt-5">
          <fieldset className="fieldset">
            <label>
              <img
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                src={imgUploadIcon}
                alt="image-upload-icon"
              />
            </label>
            <input type="file" className="file-input hidden" />
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
                pattern: /^[\p{L}]+(?:[\s'-][\p{L}]+)*$/u,
              })}
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Name"
            />
            {errors.name?.type === "required" && (
              <p className="font-inter font-medium text-xs text-red-500">
                Name is required
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p className="font-inter font-medium text-xs text-red-500">
                Please use a valid name
              </p>
            )}
            <label className="label mt-3 font-inter font-medium text-sm text-neutral leading-5">
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
            <button className="btn btn-primary mt-3 font-inter font-medium text-sm text-black leading-6">
              Register
            </button>
          </fieldset>
        </form>
        <p className="mt-3 font-inter text-base text-warning">
          Already have any account?{" "}
          <Link to={"/auth/login"} className="text-warning-content">
            Login
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

export default Register;
