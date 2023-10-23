type ContextType = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

import { PropsWithChildren, createContext, useEffect, useState } from "react";
export const AppContext = createContext<ContextType>({
  isDark: false,
  setIsDark: () => {},
});

const AppContextProvider = ({ children }: PropsWithChildren<NonNullable<unknown>>) => {
  const [isDark, setIsDark] = useState<ContextType['isDark']>(false);
  useEffect(() => {
    const changeTheme = () => {
      isDark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    };
    changeTheme();
  }, [isDark])

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
