import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const iconAni: Variants = {
  show: { transition: { staggerChildren: 0.1 } },
};

const icons: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const SocialBar = () => {
  return (
    <div className="absolute bottom-20 font-primary font-normal">
      <div className="relative border border-gray rounded-lg py-5 px-32 flex items-center">
        <div className="absolute p-0.5 px-4 border border-gray -top-3 left-2 uppercase tracking-widest rounded bg-white text-xs ">
          Connect
        </div>
        <motion.div
          className="flex items-center space-x-16 text-2xl"
          variants={iconAni}
          initial="hidden"
          animate="show"
        >
          <a
            href="https://github.com/lemokami"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={icons}>
              <FaGithub />
            </motion.div>
          </a>

          <a href="mailto:jesswinw@gmail.com" target="_blank" rel="noreferrer">
            <motion.div variants={icons}>
              <FiMail />
            </motion.div>
          </a>
          <a
            href="https://twitter.com/lemokami"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={icons}>
              <FaTwitter />
            </motion.div>
          </a>
          <a
            href="https://linkedin.com/in/lemokami"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={icons}>
              <FaLinkedin />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialBar;
