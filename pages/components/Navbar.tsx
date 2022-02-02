import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import SocialBar from "./SocialBar";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const navLinkContainerAni: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const navLinkAni: Variants = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.div
      className="absolute inset-0 bg-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex flex-col items-start justify-center space-y-16 h-full px-10"
        variants={navLinkContainerAni}
        initial="hidden"
        animate="show"
      >
        {menuItems.map((item, index) => (
          <Link href={item.path} key={item.name + index}>
            <motion.a
              className={`navbar-link ${
                item.path === router.pathname
                  ? "text-secondary hover:text-secondary"
                  : ""
              }`}
              variants={navLinkAni}
            >
              {item.name}
            </motion.a>
          </Link>
        ))}
      </motion.div>
      <SocialBar />
    </motion.div>
  );
};

export default Navbar;
