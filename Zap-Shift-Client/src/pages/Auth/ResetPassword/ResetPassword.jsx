import Logo from "../../../components/Shared/Logo/Logo";

function ResetPassword() {
  return (
    <div className="px-14 py-11 bg-white">
      <Logo />
      <section className="h-full px-44 flex flex-col justify-center">
        <h2 className="font-inter font-extrabold text-5xl text-black leading-12 tracking-tight">
          Reset Password
        </h2>
        <p className="mt-1 font-inter text-base text-black leading-7">
          Reset your paassword
        </p>
        <form className="mt-5">
          <fieldset className="fieldset">
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              New Password
            </label>
            <input
              type="password"
              name="new-password"
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="New Password"
            />
            <label className="label mt-3 font-inter font-medium text-sm text-neutral leading-5">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              className="input w-full bg-transparent font-inter text-base text-black leading-6 placeholder:text-neutral-content focus:outline-0"
              placeholder="Confirm Password"
            />
            <button className="btn btn-primary mt-3 font-inter font-medium text-sm text-black leading-6">
              Reset Password
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default ResetPassword;
