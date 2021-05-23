import React, { useContext, useEffect } from "react";
import IconAnswer from "./IconAnswer";
import Modal from "react-modal";
import { Button } from "@material-ui/core";
import { context } from "../Context/Context";
import { useHistory } from "react-router";
import { modalStyles } from "../helpers/helpers";

const AnswerModal = () => {
  const {
    isModalOpen,
    setQuestionNumber,
    setIsModalOpen,
    setIsDisabled,
    questions,
    questionNumber,
    setIsTimeOff,
    restart,
    createTimeStamp,
  } = useContext(context);

  const history = useHistory();

  const handleNextQuestion = () => {
    restart(createTimeStamp());
    setIsTimeOff(false);
    setIsModalOpen(false);
    setIsDisabled(false);
    if (questions.length === questionNumber) {
      history.push("/results");
    } else {
      setQuestionNumber((prevNumber: number) => prevNumber + 1);
    }
  };

  return (
    <Modal style={modalStyles} ariaHideApp={false} isOpen={isModalOpen}>
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
          {questions
            ? questions.length === questionNumber
              ? "See The Results"
              : "Next Question"
            : null}
        </Button>
      </div>
    </Modal>
  );
};

export default AnswerModal;
