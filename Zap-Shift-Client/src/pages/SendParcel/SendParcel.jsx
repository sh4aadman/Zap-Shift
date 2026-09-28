import { useCallback, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import { toast, Toaster } from "sonner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function SendParcel() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, control, setValue } = useForm();
  const [senderRegion, receiverRegion] = useWatch({
    control,
    name: ["sender-region", "receiver-region"],
  });

  const locations = useLoaderData();

  const regions = useMemo(() => {
    const regionsTotal = locations.map((l) => l.region);
    return [...new Set(regionsTotal)];
  }, [locations]);

  const districtsByRegion = useCallback(
    (region) => {
      const districtsInRegion = locations.filter((l) => l.region === region);
      const districts = districtsInRegion.map((d) => d.district);
      return districts;
    },
    [locations],
  );

  useEffect(() => {
    setValue("sender-name", user?.displayName || "");
  }, [setValue, user?.displayName]);

  useEffect(() => {
    setValue("sender-region", regions[0] || "");
    setValue("receiver-region", regions[0] || "");
  }, [regions, setValue]);

  useEffect(() => {
    const disrticts = districtsByRegion(senderRegion);
    setValue("sender-district", disrticts[0] || "", { shouldValidate: true });
  }, [senderRegion, districtsByRegion, setValue]);

  useEffect(() => {
    const disrticts = districtsByRegion(receiverRegion);
    setValue("receiver-district", disrticts[0] || "", { shouldValidate: true });
  }, [receiverRegion, districtsByRegion, setValue]);

  const handleParcelSubmit = (data) => {
    const email = user?.email;
    const isDocument = data["document-type"] === "document";
    const isSameDistrict =
      data["sender-district"] === data["receiver-district"];
    const parcelWeight = parseFloat(data["parcel-weight"]);

    let cost;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : 40 + extraWeight * 40;
        cost = minCharge + extraCharge;
      }
    }
    toast(`Total cost is ${cost} Taka. Are you swant to proceed?`, {
      action: {
        label: "Proceed",
        onClick: () => {
          axiosSecure
            .post("/parcels", { ...data, "sender-email": email, cost })
            .then((res) => {
              console.log("after posting", res.data);
            });
        },
      },
    });
  };

  return (
    <div className="mt-14 mb-16 px-28 py-20 rounded-4xl bg-white">
      <h2 className="mb-12 font-extrabold text-5xl text-secondary">
        Send A Parcel
      </h2>
      <p className="mb-8 font-extrabold text-2xl text-secondary">
        Enter your parcel details
      </p>
      <hr className="my-8 border-t border-black/10" />
      <form onSubmit={handleSubmit(handleParcelSubmit)}>
        {/* Parcel Details */}
        <fieldset className="fieldset">
          <div className="mb-8">
            <input
              type="radio"
              {...register("document-type")}
              value={"document"}
              className="radio text-white bg-base-200 border-base-200 checked:border-[#0AB010] checked:bg-[#0AB010]"
              defaultChecked
            />
            <label className="ml-2.5 font-semibold text-base text-secondary">
              Document
            </label>
            <input
              type="radio"
              {...register("document-type")}
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
                {...register("parcel-name")}
                className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
                placeholder="Parcel Name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="label font-inter font-medium text-sm text-neutral leading-5">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcel-weight")}
                className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
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
              {...register("sender-name")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              defaultValue={user?.displayName}
              readOnly
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Region
            </label>
            <select
              defaultValue="Pick a region"
              {...register("sender-region", { required: true })}
              className="select w-full bg-white font-inter text-base leading-5 outline-0 "
            >
              {regions.map((region, index) => (
                <option
                  key={index}
                  value={region}
                  className="active:bg-white active:text-neutral active:shadow-none"
                >
                  {region}
                </option>
              ))}
            </select>
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender District
            </label>
            <select
              defaultValue="Pick a district"
              {...register("sender-district")}
              className="select w-full bg-white font-inter text-base leading-5 outline-0"
            >
              {districtsByRegion(senderRegion).map((district, index) => (
                <option
                  key={index}
                  value={district}
                  className="active:bg-white active:text-neutral active:shadow-none"
                >
                  {district}
                </option>
              ))}
            </select>
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Address
            </label>
            <input
              type="text"
              {...register("sender-address")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Address"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Sender Phone No
            </label>
            <input
              type="tel"
              {...register("sender-phone")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Sender Phone No"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Pickup Instruction
            </label>
            <textarea
              {...register("pickup-instruction")}
              className="input h-20 w-full py-2 bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
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
              {...register("receiver-name")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Receiver Name"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Region
            </label>
            <select
              defaultValue="Pick a region"
              {...register("receiver-region")}
              className="select w-full bg-white font-inter text-base leading-5 outline-0 "
            >
              {regions.map((region, index) => (
                <option
                  key={index}
                  value={region}
                  className="active:bg-white active:text-neutral active:shadow-none"
                >
                  {region}
                </option>
              ))}
            </select>
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver District
            </label>
            <select
              defaultValue="Pick a district"
              {...register("receiver-district")}
              className="select w-full bg-white font-inter text-base leading-5 outline-0"
            >
              {districtsByRegion(receiverRegion).map((district, index) => (
                <option
                  key={index}
                  value={district}
                  className="active:bg-white active:text-neutral active:shadow-none"
                >
                  {district}
                </option>
              ))}
            </select>
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Address
            </label>
            <input
              type="text"
              {...register("receiver-address")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Address"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Receiver Phone No
            </label>
            <input
              type="tel"
              {...register("receiver-phone")}
              className="input w-full bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Receiver Phone No"
            />
            <label className="label mt-5 font-inter font-medium text-sm text-neutral leading-5">
              Delivery Instruction
            </label>
            <textarea
              {...register("delivery-instruction")}
              className="input h-20 w-full py-2 bg-transparent font-inter text-base leading-5 placeholder:text-neutral-content focus:outline-0"
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
        <p className="my-12 font-inter text-base text-black leading-6">
          * PickUp Time 4pm-7pm Approx.
        </p>
        <button
          type="submit"
          className="px-16 py-2.5 bg-primary rounded-lg font-inter font-medium text-sm text-black leading-6 cursor-pointer"
        >
          Proceed to Confirm Booking
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default SendParcel;
