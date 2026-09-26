function SendParcel() {
  return (
    <div className="mt-14 mb-16 px-28 py-20 rounded-4xl bg-white">
      <h2 className="mb-12 font-extrabold text-5xl text-secondary">
        Send A Parcel
      </h2>
      <p className="mb-8 font-extrabold text-2xl text-secondary">
        Enter your parcel details
      </p>
      <hr className="my-8 border-t border-black/10" />
      <form>
        {/* Parcel Details */}
        <fieldset className="fieldset">
          <div className="mb-8">
            <input
              type="radio"
              name="document-type"
              value={"document"}
              className="radio text-white bg-base-200 border-base-200 checked:border-[#0AB010] checked:bg-[#0AB010]"
              defaultChecked
            />
            <label className="ml-2.5 font-semibold text-base text-secondary">
              Document
            </label>
            <input
              type="radio"
              name="document-type"
              value={"non-document"}
              className="radio ml-12 text-white bg-base-200 border-base-200 checked:border-[#0AB010] checked:bg-[#0AB010]"
            />
            <label className="ml-2.5 font-semibold text-base text-secondary">
              Non-Document
            </label>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1.5">
              <label className="label font-inter font-medium text-sm text-neutral leading-5">
                Parcel Name
              </label>
              <input
                type="text"
                className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
                placeholder="Parcel Name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="label font-inter font-medium text-sm text-neutral leading-5">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
                placeholder="Parcel Weight (KG)"
              />
            </div>
          </div>
        </fieldset>
        <hr className="my-7 border-t border-black/10" />
        <div className="grid grid-cols-2 gap-8">
          {/* Sender Details */}
          <fieldset className="fieldset">
            <h3 className="mb-8 font-extrabold text-lg text-secondary">
              Sender Details
            </h3>
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Sender Name
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Sender Name"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Region
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select your region"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender District
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select your district"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Address
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Address"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Phone No
            </label>
            <input
              type="tel"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Sender Phone No"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Pickup Instruction
            </label>
            <textarea
              className="input h-20 w-full py-2 bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Pickup Instruction"
            />
          </fieldset>
          {/* Receiver Details */}
          <fieldset className="fieldset">
            <h3 className="mb-8 font-extrabold text-lg text-secondary">
              Receiver Details
            </h3>
            <label className="label font-inter font-medium text-sm text-neutral leading-5">
              Receiver Name
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Receiver Name"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Region
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select receiver region"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver District
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Select receiver district"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Address
            </label>
            <input
              type="text"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Address"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Phone No
            </label>
            <input
              type="tel"
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              placeholder="Receiver Phone No"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Delivery Instruction
            </label>
            <textarea
              className="input h-20 w-full py-2 bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content"
              rows={10}
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
      </form>
      <p className="my-12 font-inter text-base text-black leading-6">
        * PickUp Time 4pm-7pm Approx.
      </p>
      <button className="px-16 py-2.5 bg-primary rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer">
        Proceed to Confirm Booking
      </button>
    </div>
  );
}

export default SendParcel;
