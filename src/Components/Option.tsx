import React, { useContext, useState } from "react";
import { context } from "../Context/Context";

interface Option {
  _id: string;
  option: string;
  isCorrect: boolean;
}

interface Props {
  option: Option;
}

const Option: React.FC<Props> = ({ option }) => {
  const [optionBgColor, setOptionBgColor] = useState("black");

  const {
    isDisabled,
    setIsDisabled,
    setIsModalOpen,
    setIsCorrect,
    setPoints,
  } = useContext(context);

  const answerQuestion = () => {
    console.log("answerr!");
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
    <button
      onClick={answerQuestion}
      disabled={isDisabled} //disable func için
      style={{ backgroundColor: optionBgColor }}
      className="questions__question__option"
      key={option._id}
    >
      <p style={{ color: "white" }}> {option.option} </p>
    </button>
  );
};

export default Option;
