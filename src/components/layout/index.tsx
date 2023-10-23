import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Header = () => {
  return (
    <div>
      <Navbar />

      <main className="relative w-full mt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
