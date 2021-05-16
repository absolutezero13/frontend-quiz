import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

interface ParamTypes {
  quiz: string;
}

interface Question {
  question: string;
  answers: any[];
  isCorrect: boolean;
}

const Questions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const history = useHistory();
  const params = useParams<ParamTypes>();

  const fetchQuestions = async () => {
    const data = await fetch(
      `http://localhost:3001/quizquestions/${params.quiz}`
    );
    const res = await data.json();

    setQuestions(res);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="questions">
      <h1> {params.quiz.toUpperCase()} Quiz </h1>
      <h2> {questionNumber} </h2>

      {questions && (
        <div>
          <div>
            <p> {questions[questionNumber].question} </p>
          </div>
          {questions[questionNumber].answers.map((option) => {
            return (
              <div key={option._id}>
                <p> {option.option} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Questions;
