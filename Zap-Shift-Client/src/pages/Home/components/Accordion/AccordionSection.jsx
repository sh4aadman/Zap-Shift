import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Accordion from "./Accordion";

function AccordionSection() {
  return (
    <div>
      <h3 className="mb-6 font-extrabold text-5xl text-secondary leading-10 text-center">
        Frequently Asked Question (FAQ)
      </h3>
      <p className="mb-10 font-medium text-base text-accent leading-7 text-center">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>
      <Accordion />
      <div className="mb-28 flex justify-center items-center">
        <button className="px-8 py-4 rounded-xl bg-primary font-bold text-xl text-[#1f1f1f]">
          See More FAQ's
        </button>
        <BsArrowUpRightCircleFill className="text-6xl rounded-full bg-primary" />
      </div>
    </div>
  );
}

export default AccordionSection;
