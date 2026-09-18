import { useEffect, useState } from "react";
import icon from "../../../../assets/service.png";
import ServiceCard from "./ServiceCard";

function OurServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="p-28 rounded-4xl bg-secondary text-center">
      <section>
        <h2 className="font-extrabold text-5xl text-white">Our Services</h2>
        <p className="mt-4 mb-8 font-medium text-base text-base-200 leading-7">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </section>
      <section className="grid grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} icon={icon} />
        ))}
      </section>
    </div>
  );
}

export default OurServices;
