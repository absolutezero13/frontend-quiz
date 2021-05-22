import { createContext, useState } from "react";

export const context = createContext<any>({});

interface Question {
  question: string;
  answers: any[];
  isCorrect: boolean;
}
export const ContextProvider = ({ children }: any) => {
  const [questions, setQuestions] = useState<Question[]>();
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();

  return (
    <context.Provider
      value={{
        points,
        setPoints,
        questionNumber,
        setQuestionNumber,
        isModalOpen,
        setIsModalOpen,
        isDisabled,
        questions,
        setQuestions,
        setIsDisabled,
        isCorrect,
        setIsCorrect,
      }}
    >
      {children}
    </context.Provider>
  );
};
