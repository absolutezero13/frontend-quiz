import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { context } from "../Context/Context";
import { motion } from "framer-motion";

const Results = () => {
  const { points, questions, questionNumber } = useContext(context);
  const history = useHistory();

  useEffect(() => {
    if (!questions || questions.length !== questionNumber) {
      history.push("/");
    }
  }, []);

  console.log(points);

  return (
    <motion.div>
      {questions && (
        <div>
          <h2>
            You scored {points} out of {questions.length}!
          </h2>
          <h3> You can save your score to see</h3>
        </div>
      )}
    </motion.div>
  );
};

export default Results;
