import React, { useContext } from "react";
import IconAnswer from "./IconAnswer";
import Modal from "react-modal";
import { context } from "../Context/Context";
import { useParams } from "react-router";
import { modalStyles } from "../helpers/helpers";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Params {
  quiz: string;
}
const AnswerModal: React.FC = () => {
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

  const params = useParams<Params>();
  const navigate = useNavigate();

  console.log("params", params);

  const handleNextQuestion = () => {
    restart(createTimeStamp());
    setIsTimeOff(false);
    setIsModalOpen(false);
    setIsDisabled(false);
    if (questions.length === questionNumber) {
      navigate(`/results/${params.quiz}`, { state: params.quiz });
    } else {
      setQuestionNumber((prevNumber: number) => prevNumber + 1);
    }
  };

  return (
    <Modal style={modalStyles} ariaHideApp={false} isOpen={isModalOpen}>
      <div className="modal-content">
        {<IconAnswer />}
        <Button
          variant="outlined"
          onClick={handleNextQuestion}
          style={{
            backgroundColor: "white",
            fontFamily: "inherit",
            fontSize: "1.6rem",
            marginTop: "2.5rem",
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
