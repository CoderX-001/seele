import { Link } from "react-router-dom";
import { CgMusic } from "react-icons/cg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LuSettings2 } from "react-icons/lu";
import { BottomNav, Settingsbar, Sidebar } from "./components";

import "./style.css";
import { useState } from "react";

export const Navbar = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const [settingsbarState, setSettingsbarState] = useState(false);

  return (
    <>
      <nav className="w-full h-16 fixed z-[999999] top-0 left-0 flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 shadow-sm shadow-gray-300 dark:shadow-gray-800">
        <button onClick={() => setSidebarState(true)} className="text-2xl text-primary dark:text-misc mr-auto">
          <HiOutlineMenuAlt1 />
        </button>
        <Link to="/" className="flex items-center gap-x-1.5 font-semibold text-2xl text-primary dark:text-misc">
          <span><CgMusic /></span>
          Seele.
        </Link>
        <button onClick={() => setSettingsbarState(true)} className="text-2xl text-gray-400 hover:text-gray-600 ml-auto">
          <LuSettings2 />
        </button>
      </nav>

      <Sidebar barState={sidebarState} onClick={() => setSidebarState(false)} />
      <Settingsbar barState={settingsbarState} onClick={() => setSettingsbarState(false)} />
      <BottomNav />
    </>
  );
};
