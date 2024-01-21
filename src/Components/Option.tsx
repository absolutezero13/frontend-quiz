import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { context } from "../Context/Context";

interface OptionInterface {
  _id: string;
  option: string;
  isCorrect: boolean;
}

interface Props {
  option: OptionInterface;
}

const variants = {
  hover: {
    backgroundColor: "rgba(29, 26, 26, 0.2)",
  },
};

const Option: React.FC<Props> = ({ option }) => {
  const [optionBgColor, setOptionBgColor] = useState("rgb(29, 26, 26)");

  const {
    isDisabled,
    setIsDisabled,
    setIsModalOpen,
    setIsCorrect,
    setPoints,
    pause,
  } = useContext(context);

  const answerQuestion = () => {
    pause();
    setIsDisabled(true);
    setIsCorrect(option.isCorrect);
    if (option.isCorrect) {
      setOptionBgColor("green");
      setPoints((prevPoints: number) => prevPoints + 1);
    } else {
      setOptionBgColor("red");
    }

    setIsModalOpen(true);
  };

  return (
    <motion.button
      variants={variants}
      whileHover="hover"
      onClick={answerQuestion}
      disabled={isDisabled}
      style={{ backgroundColor: optionBgColor }}
      className="questions__question__option"
      key={option._id}
    >
      <p style={{ color: "white" }}> {option.option} </p>
    </motion.button>
  );
};

export default Option;
