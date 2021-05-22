import React, { useContext } from "react";
import IconAnswer from "./IconAnswer";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Button } from "@material-ui/core";
import { context } from "../Context/Context";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(29, 26, 26, 0.784)",
  },
  content: {
    width: "35rem",
    height: "20rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(29, 26, 26, 0.584)",
  },
};

const AnswerModal = () => {
  const {
    isModalOpen,
    isCorrect,
    setQuestionNumber,
    setIsModalOpen,
    setIsDisabled,
  } = useContext(context);

  const handleNextQuestion = () => {
    setIsDisabled(false);
    setIsModalOpen(false);
    setQuestionNumber((prevNumber: number) => prevNumber + 1);
  };

  return (
    <Modal style={modalStyles} isOpen={isModalOpen}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {<IconAnswer />}
        <Button
          variant="outlined"
          onClick={handleNextQuestion}
          className="icon-button"
          style={{
            backgroundColor: "white",
            fontFamily: "inherit",
            fontSize: "1.6rem",
            marginTop: "1rem",
          }}
        >
          Next Question
        </Button>
      </div>
    </Modal>
  );
};

export default AnswerModal;
