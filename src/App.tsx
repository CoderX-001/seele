import "./assets/main.min.css";

import { useEffect } from "react";
import { Home, Login } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layout";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-light-bg text-light-text dark:bg-gray-900 dark:text-[#f1f1f1]">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="auth/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
