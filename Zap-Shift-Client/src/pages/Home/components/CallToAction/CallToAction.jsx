import { Link } from "react-router";
import locationMerchant from "../../../../assets/location-merchant.png";
import bgImg from "../../../../assets/be-a-merchant-bg.png";

function CallToAction() {
  return (
    <div
      className="mx-24 mb-28 p-20 rounded-4xl bg-secondary bg-contain bg-no-repeat bg-position-[center_-30px] flex justify-between items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex-1">
        <h2 className="font-extrabold text-5xl text-white leading-[1.3]">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="mt-4 font-medium text-base text-base-200 leading-7">
          We offer the lowest delivery charge with the highest value along with{" "}
          <br />
          100% safety of your product. Pathao courier delivers your parcels in
          every <br /> corner of Bangladesh right on time.
        </p>
        <div className="mt-12 space-x-4">
          <Link
            className="px-8 py-4 rounded-full border border-primary bg-primary font-bold text-xl text-[#1F1F1F]"
            to={"/become-merchant"}
          >
            Become a Merchant
          </Link>
          <Link
            className="px-8 py-4 rounded-full border border-primary box-border font-bold text-xl text-primary"
            to={"/become-courier"}
          >
            Earn with ZapShift Courier
          </Link>
        </div>
      </div>
      <figure className="shrink-0">
        <img
          className="w-sm h-auto"
          src={locationMerchant}
          alt="location-merchant-icon"
        />
      </figure>
    </div>
  );
}

export default CallToAction;
