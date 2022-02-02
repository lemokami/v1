import { motion, Variants } from "framer-motion";
import React, { FC } from "react";

type InputProps = {
  type: "email" | "text";
  labelText: string;
  inputStyles?: string;
  labelStyles?: string;
  variants?: Variants;
};

const Input: FC<InputProps> = ({
  type,
  labelText,
  labelStyles,
  inputStyles,
  variants,
}) => {
  return (
    <motion.div variants={variants}>
      <label
        htmlFor="name"
        className={`form-label ${labelStyles ? labelStyles : ""}`}
      >
        {labelText}
      </label>
      <br />
      <input
        type={type}
        className={`form-input ${inputStyles ? inputStyles : ""}`}
      />
    </motion.div>
  );
};

export default Input;
