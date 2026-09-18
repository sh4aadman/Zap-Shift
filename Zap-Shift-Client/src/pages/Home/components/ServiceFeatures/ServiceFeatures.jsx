import liveTracking from "../../../../assets/live-tracking.png";
import safeDelivery from "../../../../assets/safe-delivery.png";

function ServiceFeatures() {
  return (
    <div className="my-28 px-24 space-y-6">
      <div className="p-8 bg-white rounded-3xl flex items-center gap-12">
        <figure className="shrink-0">
          <img
            className="w-48 h-48 object-contain"
            src={liveTracking}
            alt="live-tracking"
          />
        </figure>
        <hr className="h-24 border-l border-dashed border-info" />
        <div className="flex-1">
          <h4 className="font-extrabold text-2xl text-secondary">
            Live Parcel Tracking
          </h4>
          <p className="mt-4 font-medium text-base text-accent leading-7">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="p-8 bg-white rounded-3xl flex items-center gap-12">
        <figure className="shrink-0">
          <img
            className="w-48 h-48 object-contain"
            src={safeDelivery}
            alt="safe-delivery"
          />
        </figure>
        <hr className="h-24 border-l border-dashed border-info" />
        <div className="flex-1">
          <h4 className="font-extrabold text-2xl text-secondary">
            100% Safe Delivery
          </h4>
          <p className="mt-4 font-medium text-base text-accent leading-7">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="p-8 bg-white rounded-3xl flex items-center gap-12">
        <figure className="shrink-0">
          <img
            className="w-48 h-48 object-contain"
            src={safeDelivery}
            alt="support"
          />
        </figure>
        <hr className="h-24 border-l border-dashed border-info" />
        <div className="flex-1">
          <h4 className="font-extrabold text-2xl text-secondary">
            24/7 Call Center Support
          </h4>
          <p className="mt-4 font-medium text-base text-accent leading-7">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceFeatures;
