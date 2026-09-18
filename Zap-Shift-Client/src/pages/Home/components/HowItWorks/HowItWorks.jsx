import howItWorksDetails from "./HowItWorkDetails";

function HowItWorks() {
  return (
    <div className="my-28 px-28">
      <h2 className="mb-8 font-extrabold text-3xl text-secondary">
        How It Works
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {howItWorksDetails.map((work) => (
          <div key={work.id} className="p-8 bg-white rounded-3xl">
            <img src={work.icon} alt="icon" />
            <h3 className="mt-6 font-bold text-xl text-secondary">
              {work.title}
            </h3>
            <p className="mt-4 font-medium text-base text-accent leading-7">
              {work.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
