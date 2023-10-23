import {
  BiHeart,
  BiHomeAlt2,
  BiLeftArrowAlt,
  BiSearch,
  BiX,
} from "react-icons/bi";
import { BsCaretRightFill } from "react-icons/bs";
import { TbLogout, TbPremiumRights } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { SidebarProps } from "../../../@types";
import { ToggleSwitch } from "../../ui/basicUiElem";

export const BottomNav = () => {
  return (
    <div
      className="w-full py-3 fixed bottom-0 left-0 flex justify-between px-6 bg-gray-50 text-gray-400 dark:bg-gray-900 shadow-sm shadow-gray-300 dark:shadow-gray-300"
      role="navigation"
    >
      <NavLink to="/" className="text-2xl flex flex-col items-center">
        <BiHomeAlt2 />
        <span className="text-sm">Home</span>
      </NavLink>
      <NavLink to="/search" className="text-2xl flex flex-col items-center">
        <BiSearch />
        <span className="text-sm">Search</span>
      </NavLink>
      <NavLink
        to="/songs/favorite"
        className="text-2xl flex flex-col items-center"
      >
        <BiHeart />
        <span className="text-sm">Favorite</span>
      </NavLink>
      <NavLink
        to="/purchase/premium"
        className="text-2xl flex flex-col items-center"
      >
        <TbPremiumRights />
        <span className="text-sm">Premium</span>
      </NavLink>
    </div>
  );
};

export const Sidebar = ({ onClick, barState }: SidebarProps) => {
  return (
    <div
      className={`${
        barState ? "w-full" : "w-0"
      } h-screen overflow-hidden fixed z-[9999999] top-0 left-0 bg-misc dark:bg-gray-800 dark:text-gray-400 transition-[width] duration-300`}
    >
      <div className="w-full flex justify-end pt-5 pb-3">
        <button onClick={onClick} className="text-4xl mr-6">
          <BiX />
        </button>
      </div>
      <div className="w-full flex flex-col items-center py-8">
        <Link onClick={onClick} to="/auth/login" className="text-xl mb-6">
          Login
        </Link>
        <Link
          onClick={onClick}
          to="/auth/register"
          className="text-lg text-misc bg-primary px-4 py-1.5 mb-8 rounded-md"
        >
          Get started
        </Link>

        <p className="absolute bottom-5 text-sm">
          &copy;Copyright{" "}
          <span className="text-primary font-medium">Seele.</span> 2023. All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export const Settingsbar = ({ onClick, barState }: SidebarProps) => {
  return (
    <div
      className={`${
        barState ? "w-full right-0" : "w-0 -right-8"
      } h-screen overflow-hidden fixed z-[9999999] top-0 bg-[#f1f1f1] dark:bg-gray-900 px-3 transition-[width] duration-150`}
    >
      <div className="w-full flex pt-5 pb-3">
        <button
          onClick={onClick}
          className="text-4xl text-gray-600 dark:text-gray-500"
        >
          <BiLeftArrowAlt />
        </button>
      </div>

      <div className="w-full flex flex-col gap-y-4 py-8">
        <div className="w-full px-4 py-3 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400 rounded-md flex items-center justify-between">
          <span>Dark mode</span>
          <ToggleSwitch />
        </div>

        <div className="w-full px-4 py-3 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400 rounded-md flex items-center justify-between">
          <span>Account settings</span>
          <span className="text-lg">
            <BsCaretRightFill />
          </span>
        </div>

        <button className={`w-1/2 absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-3 bg-red-500 text-misc dark:text-gray-800 rounded-md shadow-md flex items-center justify-center`}>
          <span className="w-fit flex items-center gap-x-2 text-2xl">
            <TbLogout />
            <span className="text-base font-medium">Logout</span>
          </span>
        </button>
      </div>
    </div>
  );
};
