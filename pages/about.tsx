import { motion, Variant, Variants } from "framer-motion";
import { useState } from "react";
import Illustration from "./components/Illustration";
import Layout from "./components/Layout";
import SocialBar from "./components/SocialBar";

type Props = {};
const descriptions = [
  "A Freelance Web Developer",
  "A final year student at the College of Engineering Chengannur who is passionate about web development and is also a freelance web developer.",
  "A person who is passionate about web development and is also a freelance web developer.I'm also a final year student at College of Engineering Chengannur in search of a challenging and rewarding career.",
  "A Javascript developer who works on the front-end side of the web especially with React(always). I'm also a final year student at College of Engineering Chengannur. You can call me lemokami if you want. I'm also a freelance web developer with an experience of over 2 years.",
];

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const descriptionAni = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function About({}: Props) {
  const [rangeValue, setRangeValue] = useState(1);

  return (
    <Layout>
      <div className="h-full flex flex-col justify-center font-primary">
        <motion.div
          variants={parent}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-between h-1/2 w-1/2"
        >
          <span className="font-primary font-bold">
            <motion.div variants={descriptionAni}>
              <h3 className="text-xl">Hi There, I'm</h3>
              <h1 className="text-6xl">
                jesswin <span className="text-secondary">W</span> varghese
              </h1>
            </motion.div>

            {descriptions.map((desc, index) => {
              if (index === rangeValue)
                return (
                  <motion.p
                    className="font-secondary font-normal text-lg mt-4 z-50"
                    variants={descriptionAni}
                  >
                    {desc}
                  </motion.p>
                );
            })}
          </span>
          <div className="mr-32 py-8 relative font-secondary">
            <input
              type="range"
              name="decription"
              min="0"
              max="3"
              value={rangeValue}
              onChange={(e) => setRangeValue(+e.target.value)}
              className="rounded-full appearance-none bg-[#f1f1f1] h-2 w-full"
            />
            {/* dots in the range bar */}
            <div className="flex items-center justify-between absolute w-full top-9 -z-10">
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
              <div className="h-5 w-5 -z-10 bg-[#f1f1f1] rounded-full"></div>
            </div>
            <span className="absolute -left-4 top-0">shortest</span>
            <span className="absolute -right-4 top-0">longest</span>
          </div>
        </motion.div>
        <Illustration />
      </div>
      <SocialBar />
    </Layout>
  );
}
