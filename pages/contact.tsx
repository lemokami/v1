import Layout from "./components/Layout";
import SocialBar from "./components/SocialBar";
import Input from "./components/Input";
import Illustration from "./components/Illustration";
import { motion, Variants } from "framer-motion";

type Props = {};

const formAni: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const formChildrenAni: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Contact({}: Props) {
  return (
    <Layout>
      <div className="h-full flex flex-col justify-center font-primary">
        <motion.div className="w-1/2">
          <motion.form
            className="flex flex-col space-y-2 pb-10"
            variants={formAni}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-6xl font-bold mb-4"
              variants={formChildrenAni}
            >
              Send a <span className="text-secondary">Message!</span>
            </motion.h1>
            <Input
              type="text"
              labelText="Name:"
              inputStyles="font-secondary w-3/4"
              variants={formChildrenAni}
            />
            <Input
              type="email"
              labelText="Email:"
              inputStyles="font-secondary w-3/4"
              variants={formChildrenAni}
            />
            <motion.div className="" variants={formChildrenAni}>
              <label htmlFor="name" className={`form-label`}>
                Message:
              </label>
              <br />
              <textarea
                cols={30}
                rows={8}
                className="form-input w-3/4"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="form-button"
              variants={formChildrenAni}
            >
              Send a message
            </motion.button>
          </motion.form>
        </motion.div>
        <Illustration />
      </div>
      <SocialBar />
    </Layout>
  );
}
