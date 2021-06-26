import React, { useContext } from "react";
import IconAnswer from "./IconAnswer";
import Modal from "react-modal";
import { Button } from "@material-ui/core";
import { context } from "../Context/Context";
import { useHistory, useParams } from "react-router";
import { modalStyles } from "../helpers/helpers";

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

  const history = useHistory();
  const params = useParams<Params>();

  const handleNextQuestion = () => {
    restart(createTimeStamp());
    setIsTimeOff(false);
    setIsModalOpen(false);
    setIsDisabled(false);
    if (questions.length === questionNumber) {
      history.push({
        pathname: "/results",
        state: params.quiz,
      });
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
