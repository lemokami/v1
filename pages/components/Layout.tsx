import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";
import Sidebar from "./Sidebar";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="grid grid-cols-9 h-screen relative">
      <motion.img
        src={`/decorators/${
          router.pathname == "/" ? "home" : router.pathname
        }.svg`}
        className="absolute -top-10 -left-10 h-40 opacity-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <Sidebar className="col-span-1 border-r-2 border-gray" />
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default Layout;
