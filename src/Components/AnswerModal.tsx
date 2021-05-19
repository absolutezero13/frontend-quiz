import { motion } from "framer-motion";
import React from "react";
import Modal from "react-modal";
import Checkmark from "./Checkmark";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(29, 26, 26, 0.584)",
  },
  content: {
    width: "25rem",
    height: "15rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const variants = {
  hidden: { y: "-100vh" },
  visible: { y: 0 },
};

interface Props {
  isModalOpen: boolean;
  isCorrect: boolean | undefined;
}

const AnswerModal: React.FC<Props> = ({ isModalOpen, isCorrect }) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <Modal style={modalStyles} isOpen={isModalOpen}>
        {isCorrect ? (
          <>
            <Checkmark />
            <p> CORRECT ANSWER !</p>{" "}
          </>
        ) : (
          <p>WRONG ANSWER !</p>
        )}
      </Modal>
    </motion.div>
  );
};

export default AnswerModal;
