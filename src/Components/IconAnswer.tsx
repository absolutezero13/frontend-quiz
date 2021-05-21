import React from "react";
import { motion } from "framer-motion";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const variants = {
  initial: { rotate: -180 },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

interface Props {
  isCorrect: boolean | undefined;
}

const IconAnswer: React.FC<Props> = ({ isCorrect }) => {
  return (
    <div className="icon-answer">
      <div>
        {isCorrect ? (
          <div className="icons">
            <p> Correct </p>
            <CheckCircleOutlinedIcon
              className="icons__icon"
              style={{ width: 80, height: 80 }}
            />
          </div>
        ) : (
          <div className="icons">
            <p> Wrong </p>
            <CancelOutlinedIcon
              className="icons__icon"
              style={{ width: 80, height: 80 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconAnswer;
