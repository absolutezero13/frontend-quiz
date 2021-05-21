import { truncateSync } from "fs";
import React, { useState } from "react";

interface Option {
  _id: string;
  option: string;
  isCorrect: boolean;
}

interface Props {
  option: Option;
  isDisabled: boolean;
  setPoints: (arg: any) => any;
  setIsDisabled: (arg: boolean) => void;
  setIsModalOpen: (arg: boolean) => void;
  setIsCorrect: (arg: boolean) => void;
}

const Option: React.FC<Props> = ({
  option,
  isDisabled,
  setIsDisabled,
  setIsModalOpen,
  setIsCorrect,
  setPoints,
}) => {
  const [optionBgColor, setOptionBgColor] = useState("black");

  const answerQuestion = () => {
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
