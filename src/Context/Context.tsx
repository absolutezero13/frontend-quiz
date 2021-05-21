import { createContext, useState } from "react";

const context = createContext({});

const ContextProvider = ({ children }: any) => {
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <context.Provider value={{ points }}>{children}</context.Provider>;
};
