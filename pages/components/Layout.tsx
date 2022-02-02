import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>(false);

  //TODO: implement a skip to main button
  return (
    <div className="grid grid-cols-9 h-screen relative overflow-hidden">
      <motion.img
        src={`/decorators/${
          router.pathname == "/" ? "home" : router.pathname
        }.svg`}
        className="absolute -top-10 -left-10 h-40 opacity-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <Sidebar className="col-span-1 border-r-2 border-gray hidden xl:flex" />
      {showNav && <Navbar />}
      <span className="xl:hidden">
        {showNav ? (
          <FiX
            className="absolute top-10 right-10 text-2xl cursor-pointer z-50"
            onClick={() => setShowNav(false)}
          />
        ) : (
          <FiMenu
            className="absolute top-10 right-10 text-2xl cursor-pointer z-50"
            onClick={() => setShowNav(true)}
          />
        )}
      </span>
      <div className="col-span-8 px-16">{children}</div>
    </div>
  );
};

export default Layout;
