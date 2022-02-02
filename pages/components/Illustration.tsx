import { motion, Variants } from "framer-motion";

const illustration: Variants = {
  hidden: { scale: 0.5 },
  show: { scale: 1 },
};

const Illustration = () => {
  return (
    <>
      {/* <motion.img
        src="/assets/blob.svg"
        className="h-screen absolute -right-56 -bottom-16"
        alt="me"
        variants={illustration}
        initial="hidden"
        animate="show"
      /> */}
      <motion.img
        src="/assets/potrait.svg"
        className="h-3/4 2xl:h-screen absolute -right-32 bottom-3/2 2xl:-bottom-28  -z-10"
        alt="me"
        variants={illustration}
        initial="hidden"
        animate="show"
      />
    </>
  );
};

export default Illustration;
