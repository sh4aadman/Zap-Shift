import { IoLogOut } from "react-icons/io5";
import {
  MdHelpCenter,
  MdOutlineSettingsApplications,
  MdPassword,
} from "react-icons/md";
import { NavLink } from "react-router";

function GeneralLinks() {
  return (
    <>
      <li>
        <NavLink
          to={"/dashboard/settings"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Settings"
        >
          <MdOutlineSettingsApplications className="text-xl" />
          <span className="is-drawer-close:hidden">Settings</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/change-password"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Change Password"
        >
          <MdPassword className="text-xl" />
          <span className="is-drawer-close:hidden">Change Password</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/help"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Help"
        >
          <MdHelpCenter className="text-xl" />
          <span className="is-drawer-close:hidden">Help</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/logout"}
          className={({ isActive }) =>
            `is-drawer-close:tooltip is-drawer-close:tooltip-right mb-4 rounded-xl text-sm hover:bg-primary hover:font-bold hover:text-[#1F1F1F] shadow-none ${isActive ? "bg-primary font-bold text-[#1f1f1f]" : "bg-transparent font-medium text-accent"}`
          }
          data-tip="Logout"
        >
          <IoLogOut className="text-xl" />
          <span className="is-drawer-close:hidden">Logout</span>
        </NavLink>
      </li>
    </>
  );
}

export default GeneralLinks;
