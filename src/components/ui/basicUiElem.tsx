import { useContext } from "react";
import { AppContext } from "../../context/_AppContext";

export const ToggleSwitch = () => {
  const appContext = useContext(AppContext);
  const isDark = appContext?.isDark
  const setIsDark = appContext?.setIsDark

  return (
    <button onClick={() => setIsDark(!isDark)} className="w-[3.5rem] h-[2rem] rounded-full bg-gray-200 dark:bg-gray-900 border-2 border-misc shadow-md p-0.5">
      <div className="w-full h-full rounded-full">
        <div
          className={`w-[1.5rem] h-full rounded-full ${isDark ? "bg-misc translate-x-full" : "bg-white translate-x-0"} transition-[transform] duration-200`}
        ></div>
      </div>
    </button>
  );
}