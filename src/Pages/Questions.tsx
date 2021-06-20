import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import AnswerModal from "../Components/AnswerModal";
import Option from "../Components/Option";
import Loading from "../Components/Loading";
import { context } from "../Context/Context";
import cssIcon from "./../assets/css.png";
import htmlIcon from "./../assets/html.png";
import javascriptIcon from "./../assets/javascript.png";
import TimerIcon from "@material-ui/icons/Timer";
import { questionVariants } from "../helpers/helpers";

interface ParamTypes {
  quiz: string;
}

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

  const { quiz } = useParams<ParamTypes>();
  const fetchQuestions = async () => {
    try {
      const data = await fetch(`${apiBase}/quizquestions/${quiz}`);
      const res = await data.json();

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
  };

  useEffect(() => {
    setPoints(0);
    start();
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
        <TimerIcon
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
            quiz === "html"
              ? htmlIcon
              : quiz === "css"
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
