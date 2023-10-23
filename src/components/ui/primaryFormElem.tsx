import { useEffect, useState } from "react";
import { FormProps } from "../../@types";

export const PrimaryInput = ({type, id, label, name, onChange, value}: FormProps) => {
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    value === "" ? setInputFocused(false) : setInputFocused(true);
  }, [value])

  return (
    <div className="w-full relative flex flex-col">
      <label
        htmlFor="email"
        className={`absolute ${
          inputFocused
            ? "-top-2.5 translate-y-0 left-4 px-1.5"
            : "top-1/2 -translate-y-1/2 left-4 px-0"
        } bg-[#f1f1f1] text-primary text-[0.9rem] transition-all duration-150`}
      >
        {label}
      </label>
      <input
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        type={type}
        name={name}
        id={id}
        className="py-2 px-4 rounded-md bg-[#f1f1f1] border-2 border-primary border-opacity-30 focus:border-opacity-80 outline-none"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const PrimaryButton = ({value}: FormProps) => {
  return (
    <button className="w-full py-3 rounded-md font-semibold bg-primary text-misc shadow-xl active:bg-misc active:text-primary active:shadow-sm">{value}</button>
  )
}
