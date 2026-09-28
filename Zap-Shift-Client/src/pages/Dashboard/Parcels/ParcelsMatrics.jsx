import { FaTruckPickup } from "react-icons/fa";
import { MdOutlineDirectionsTransitFilled } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { VscGitPullRequestDone } from "react-icons/vsc";

function ParcelsMatrics() {
  return (
    <div className="mb-10 grid grid-cols-5 gap-6">
      <div className="p-6 rounded-2xl border border-[#F0F0F0] flex items-start gap-4">
        <figure className="inline-block p-3 rounded-full bg-[#f5f5f5]">
          <RiSecurePaymentLine className="text-2xl text-accent" />
        </figure>
        <div>
          <h3 className="mb-2 font-inter font-medium text-sm text-[#374151] leading-5">
            Unpaid
          </h3>
          <p className="font-inter font-bold text-3xl text-[#1F2937] tracking-tight leading-9">
            129
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-[#F0F0F0] flex items-start gap-4">
        <figure className="inline-block p-3 rounded-full bg-[#f5f5f5]">
          <FaTruckPickup className="text-2xl text-accent" />
        </figure>
        <div>
          <h3 className="mb-2 font-inter font-medium text-sm text-[#374151] leading-5">
            Ready Pick Up
          </h3>
          <p className="font-inter font-bold text-3xl text-[#1F2937] tracking-tight leading-9">
            1325
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-[#F0F0F0] flex items-start gap-4">
        <figure className="inline-block p-3 rounded-full bg-[#f5f5f5]">
          <MdOutlineDirectionsTransitFilled className="text-2xl text-accent" />
        </figure>
        <div>
          <h3 className="mb-2 font-inter font-medium text-sm text-[#374151] leading-5">
            In Transit
          </h3>
          <p className="font-inter font-bold text-3xl text-[#1F2937] tracking-tight leading-9">
            50
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-[#F0F0F0] flex items-start gap-4">
        <figure className="inline-block p-3 rounded-full bg-[#f5f5f5]">
          <TbTruckDelivery className="text-2xl text-accent" />
        </figure>
        <div>
          <h3 className="mb-2 font-inter font-medium text-sm text-[#374151] leading-5">
            Ready to Deliver
          </h3>
          <p className="font-inter font-bold text-3xl text-[#1F2937] tracking-tight leading-9">
            50
          </p>
        </div>
      </div>
      <div className="p-6 rounded-2xl border border-[#F0F0F0] flex items-start gap-4">
        <figure className="inline-block p-3 rounded-full bg-[#f5f5f5]">
          <VscGitPullRequestDone className="text-2xl text-accent" />
        </figure>
        <div>
          <h3 className="mb-2 font-inter font-medium text-sm text-[#374151] leading-5">
            Delivered
          </h3>
          <p className="font-inter font-bold text-3xl text-[#1F2937] tracking-tight leading-9">
            50
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParcelsMatrics;
