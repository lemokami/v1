import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type SidebarProps = {
  className?: string;
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const sidebar: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sidebarlink: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-start p-10 ${className ? className : ""}`}
    >
      <Link href="/">
        <a className="brand">W</a>
      </Link>
      <motion.div
        className="flex flex-col justify-center space-y-16 flex-1"
        variants={sidebar}
        initial="hidden"
        animate="show"
      >
        {menuItems.map((item, index) => (
          <Link href={item.path} key={item.name + index}>
            <motion.a
              className={`sidebar-link ${
                item.path === router.pathname
                  ? "text-secondary hover:text-secondary"
                  : ""
              }`}
              variants={sidebarlink}
            >
              {item.name}
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Sidebar;
