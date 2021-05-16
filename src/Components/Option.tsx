import React, { useState } from "react";

interface Option {
  _id: string;
  option: string;
  isCorrect: boolean;
}

const Option: React.FC<any> = ({ option }) => {
  const [optionBgColor, setOptionBgColor] = useState("black");

  const answerQuestion = () => {
    if (option.isCorrect) {
      setOptionBgColor("green");
    } else {
      setOptionBgColor("red");
    }
  };

  return (
    <button
      onClick={answerQuestion}
      disabled={false} //disable func için
      style={{ backgroundColor: optionBgColor }}
      className="questions__question__option"
      key={option._id}
    >
      <p style={{ color: "white" }}> {option.option} </p>
    </button>
  );
};

export default Option;
