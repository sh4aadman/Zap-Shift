import { Outlet } from "react-router";
import Logo from "../components/Shared/Logo/Logo";
import { GoSidebarExpand } from "react-icons/go";
import MenuLinks from "../components/Shared/MenuLinks/MenuLinks";
import GeneralLinks from "../components/Shared/GeneralLinks/GeneralLinks";
import { IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../hooks/useAuth";

function DashboardLayout() {
  const { user } = useAuth();

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle inline"
      />
      <div className="drawer-content">
        <nav className="navbar w-full px-7 bg-white justify-between">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="drawer-button cursor-pointer"
          >
            <GoSidebarExpand className="text-xl" />
          </label>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F5F5F5] border-base-200 rounded-full">
              <IoMdNotificationsOutline className="text-xl" />
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt="user-image"
              />
              <div>
                <h3 className="font-semibold text-base text-[#1f1f1f] tracking-wide">
                  {user?.displayName}
                </h3>
                <p className="text-sm text-accent tracking-wide">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="bg-base-300">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-white is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow">
            <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:hidden">
              <Logo />
            </li>
            <hr className="my-3 border-t border-t-[#F0F0F0] is-drawer-close:hidden" />
            <li>
              <p className="mb-3 font-medium text-sm text-[#151726] uppercase is-drawer-close:hidden">
                Menu
              </p>
            </li>
            <MenuLinks />
            <li>
              <p className="mb-3 font-medium text-sm text-[#151726] uppercase is-drawer-close:hidden">
                General
              </p>
            </li>
            <GeneralLinks />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
