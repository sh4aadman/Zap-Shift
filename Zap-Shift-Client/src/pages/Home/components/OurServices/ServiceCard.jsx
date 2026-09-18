function ServiceCard({ service, icon }) {
  const { title, description } = service;

  return (
    <section className="group px-6 py-8 bg-white rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:bg-primary">
      <img
        className="p-6 rounded-full bg-base-300 group-hover:bg-[#e2eccb]"
        src={icon}
        alt="service-icon"
      />
      <h3 className="font-bold text-2xl text-secondary">{title}</h3>
      <p className="font-medium text-base text-accent leading-7">
        {description}
      </p>
    </section>
  );
}

export default ServiceCard;
