import customerReview from "../../../../assets/customer-top.png";
import ReviewSlider from "./ReviewSlider";

function CustomerReview() {
  return (
    <div className="mb-28">
      <figure className="mb-10 flex justify-center">
        <img src={customerReview} alt="customer-review-section-icon" />
      </figure>
      <h2 className="mb-6 font-extrabold text-5xl text-secondary text-center">
        What our customers are sayings
      </h2>
      <p className="mb-10 font-medium text-base text-accent leading-7 text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <ReviewSlider />
    </div>
  );
}

export default CustomerReview;
