function Accordion() {
  return (
    <div className="mb-10 px-36 space-y-4">
      <div className="collapse collapse-arrow px-6 py-5 bg-white border border-base-200 has-[input:checked]:bg-[#e6f2f3]">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title p-0 m-0 font-bold text-base text-secondary leading-7">
          How does this posture corrector work?
        </div>
        <div className="collapse-content p-0">
          <hr className="my-4 border border-[#d8eaec]" />
          <p className="font-medium text-base text-accent leading-7">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow px-6 py-5 bg-white border border-base-200 has-[input:checked]:bg-[#e6f2f3]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title p-0 m-0 font-bold text-base text-secondary leading-7">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content p-0">
          <hr className="my-4 border border-[#d8eaec]" />
          <p className="font-medium text-base text-accent leading-7">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow px-6 py-5 bg-white border border-base-200 has-[input:checked]:bg-[#e6f2f3]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title p-0 m-0 font-bold text-base text-secondary leading-7">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content p-0">
          <hr className="my-4 border border-[#d8eaec]" />
          <p className="font-medium text-base text-accent leading-7">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
