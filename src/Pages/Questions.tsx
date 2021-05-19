import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import AnswerModal from "../Components/AnswerModal";
import Option from "../Components/Option";
import cssIcon from "./../assets/css.png";
import htmlIcon from "./../assets/html.png";
import javascriptIcon from "./../assets/javascript.png";

interface ParamTypes {
  quiz: string;
}

interface Question {
  question: string;
  answers: any[];
  isCorrect: boolean;
}

const variants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100vw",
  },
};

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(false);

  const params = useParams<ParamTypes>();

  const fetchQuestions = async () => {
    try {
      const data = await fetch(
        `http://localhost:3001/quizquestions/${params.quiz}`
      );
      const res = await data.json();

      if (res.length > 0) setQuestions(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="questions"
    >
      <div className="questions__icon">
        <img
          width={128}
          height={128}
          src={
            params.quiz === "html"
              ? htmlIcon
              : params.quiz === "css"
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
              {questionNumber}. {questions[questionNumber].question}
            </p>
          </div>

          <div className="questions__question__options">
            {questions[questionNumber].answers.map((option) => {
              return (
                <Option
                  isDisabled={isDisabled}
                  setIsCorrect={setIsCorrect}
                  setIsDisabled={setIsDisabled}
                  setIsModalOpen={setIsModalOpen}
                  key={option._id}
                  option={option}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <AnswerModal isCorrect={isCorrect} isModalOpen={isModalOpen} />
    </motion.div>
  );
};

export default Questions;
