import { motion } from "framer-motion";
import React from "react";
import Modal from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(29, 26, 26, 0.584)",
  },
  content: {
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
}

const AnswerModal: React.FC<Props> = ({ isModalOpen }) => {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <Modal style={modalStyles} isOpen={isModalOpen}>
        <p> Lol</p>
      </Modal>
    </motion.div>
  );
};

export default AnswerModal;
