import { createContext, useState } from "react";
import { useTimer } from "react-timer-hook";

export const context = createContext<any>({});

interface Question {
  question: string;
  answers: any[];
  isCorrect: boolean;
}
export const ContextProvider = ({ children }: any) => {
  const onTimeExpire = () => {
    setIsModalOpen(true);
    setIsTimeOff(true);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);
  const { seconds, start, pause, restart } = useTimer({
    expiryTimestamp: +time,
    onExpire: () => onTimeExpire(),
  });

  const [questions, setQuestions] = useState<Question[]>();
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>();
  const [isTimeOff, setIsTimeOff] = useState(false);

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
        seconds,
        start,
        pause,
        restart,
        isTimeOff,
        setIsTimeOff,
        time,
      }}
    >
      {children}
    </context.Provider>
  );
};
