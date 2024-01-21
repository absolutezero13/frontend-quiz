import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import AnswerModal from "../Components/AnswerModal";
import Option from "../Components/Option";
import Loading from "../Components/Loading";
import { context } from "../Context/Context";
import cssIcon from "./../assets/css.png";
import htmlIcon from "./../assets/html.png";
import javascriptIcon from "./../assets/javascript.png";
import { Timer } from "@mui/icons-material";
import { questionVariants } from "../helpers/helpers";

type ParamTypes = {
  quizType: string;
};

const Questions: React.FC = () => {
  const {
    questions,
    setQuestions,
    questionNumber,
    setPoints,
    setQuestionNumber,
    setIsDisabled,
    setIsModalOpen,
    seconds,
    start,
    setIsTimeOff,
    restart,
    createTimeStamp,
    apiBase,
  } = useContext(context);

  const { quizType } = useParams<ParamTypes>();

  const fetchQuestions = async () => {
    try {
      const data = await fetch(`${apiBase}/quizquestions/${quizType}`);
      const res = await data.json();
      start();
      if (res.length > 0) setQuestions(res);
    } catch (err) {
      console.log(err);
    }
  };

  const exitTestOnUnmount = () => {
    setQuestionNumber(1);
    setIsDisabled(false);
    setIsModalOpen(false);
    setIsTimeOff(false);
    restart(createTimeStamp(), false);
    setQuestions(undefined);
  };

  useEffect(() => {
    setPoints(0);
  }, []);

  useEffect(() => {
    return () => exitTestOnUnmount();
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <motion.div
      variants={questionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="questions"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Timer
          style={{ height: 40, width: 40 }}
          color={seconds < 5 ? "secondary" : "primary"}
        />
        <h1 style={{ marginLeft: 10, color: seconds > 5 ? "white" : "red" }}>
          {seconds}
        </h1>
      </div>
      <div className="questions__icon">
        <img
          width={128}
          height={128}
          src={
            quizType === "html"
              ? htmlIcon
              : quizType === "css"
              ? cssIcon
              : javascriptIcon
          }
          alt=""
        />
      </div>
      {questions ? (
        <div className="questions__question">
          <div className="questions__question__question-text">
            <p>
              {questionNumber}. {questions[questionNumber - 1].question}
            </p>
          </div>

          <div className="questions__question__options">
            {questions[questionNumber - 1].answers.map((option: any) => {
              return <Option key={option._id} option={option} />;
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <AnswerModal />
    </motion.div>
  );
};

export default Questions;
