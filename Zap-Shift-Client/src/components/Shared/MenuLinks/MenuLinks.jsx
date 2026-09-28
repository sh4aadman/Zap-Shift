import { FaFileInvoice } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdDeliveryDining, MdLocationPin, MdOutlineDashboard, MdOutlinePriceChange, MdOutlineStorefront } from "react-icons/md";
import { NavLink } from "react-router";

function MenuLinks() {
  return (
    <>
      <li>
        <NavLink
          to={"/dashboard/overview"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Homepage"
        >
          <MdOutlineDashboard className="text-xl" />
          <span className="is-drawer-close:hidden">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/parcels"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Parcels"
        >
          <GiCardboardBoxClosed className="text-xl" />
          <span className="is-drawer-close:hidden">Parcels</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/deliveries"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Deliveries"
        >
          <MdDeliveryDining className="text-xl" />
          <span className="is-drawer-close:hidden">Deliveries</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/invoices"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Invoices"
        >
          <FaFileInvoice className="text-xl" />
          <span className="is-drawer-close:hidden">Invoices</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/stores"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Stores"
        >
          <MdOutlineStorefront className="text-xl" />
          <span className="is-drawer-close:hidden">Stores</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/pricing-plan"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Pricing Plan"
        >
          <MdOutlinePriceChange className="text-xl" />
          <span className="is-drawer-close:hidden">Pricing Plan</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/coverage-area"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Coverage Area"
        >
          <MdLocationPin className="text-xl" />
          <span className="is-drawer-close:hidden">Coverage Area</span>
        </NavLink>
      </li>
    </>
  );
}

export default MenuLinks;
