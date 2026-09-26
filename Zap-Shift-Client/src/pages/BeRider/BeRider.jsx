import riderAgent from "../../assets/agent-pending.png";

function BeRider() {
  return (
    <div className="mt-14 mb-16 px-28 py-20 rounded-4xl bg-white">
      <h2 className="mb-4 font-extrabold text-6xl text-secondary">
        Be a Rider
      </h2>
      <p className="mb-12 text-base text-accent leading-7">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>
      <form>
        <h3 className="mb-5 font-extrabold text-2xl text-secondary">
          Tell us about yourself
        </h3>
        <div className="grid grid-cols-2 gap-8">
          <fieldset className="fieldset">
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Your Name
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Your Name"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Driving License Number
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Driving License Number"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Your Email
            </label>
            <input
              type="email"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Your Email"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Your Region
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select your region"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Your District
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select your district"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              NID No
            </label>
            <input
              type="number"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="NID"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Phone Number
            </label>
            <input
              type="tel"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Phone Number"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Bike Brand, Model and Year
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Bike Brand, Model and Year"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Bike Registration Number
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Bike Registration Number"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Tell Us About Yourself
            </label>
            <textarea
              className="input h-20 w-full py-2 bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Tell Us About Yourself"
            />
            <button className="mt-5 px-16 py-2.5 bg-primary rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer">
              Submit
            </button>
          </fieldset>
          <figure className="justify-items-end">
            <img src={riderAgent} alt="rider-agent-pending-icon" />
          </figure>
        </div>
      </form>
    </div>
  );
}

export default BeRider;
