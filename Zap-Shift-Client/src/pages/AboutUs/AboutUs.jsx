import { NavLink, Outlet } from "react-router";

function AboutUs() {
  return (
    <div className="mt-14 mb-16 px-28 py-20 rounded-4xl bg-white">
      <h2 className="font-extrabold text-5xl text-secondary">About Us</h2>
      <p className="mt-4 mb-12 text-base text-accent leading-7">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal <br /> packages to business shipments — we deliver
        on time, every time.
      </p>
      <div className="flex items-center gap-12">
        <NavLink
          to={"/about-us/story"}
          className={({ isActive }) =>
            `text-2xl ${isActive ? "font-extrabold text-[#5B6A2E]" : "text-accent"}`
          }
        >
          Story
        </NavLink>
        <NavLink
          to={"/about-us/mission"}
          className={({ isActive }) =>
            `text-2xl ${isActive ? "font-extrabold text-[#5B6A2E]" : "text-accent"}`
          }
        >
          Mission
        </NavLink>
        <NavLink
          to={"/about-us/success"}
          className={({ isActive }) =>
            `text-2xl ${isActive ? "font-extrabold text-[#5B6A2E]" : "text-accent"}`
          }
        >
          Success
        </NavLink>
        <NavLink
          to={"/about-us/team-and-others"}
          className={({ isActive }) =>
            `text-2xl ${isActive ? "font-extrabold text-[#5B6A2E]" : "text-accent"}`
          }
        >
          Team & Others
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AboutUs;
