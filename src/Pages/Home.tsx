import { IconButton } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { quizInfo } from "../helpers/helpers";
import { homeVariants } from "../helpers/helpers";

const variants = {
  initial: { x: -1500 },
  animate: {
    x: 0,
  },
};

const Home: React.FC = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home"
    >
      <div className="title">
        <h1>Welcome to the Front End Development Quiz !</h1>
      </div>

      <div className="home__quizes">
        {quizInfo.map((quiz, i) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={i}
              to={quiz.name.toLowerCase()}
            >
              <motion.div
                variants={{ ...variants }}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.3 }}
                className="home__quizes__quiz"
              >
                <img width={50} height={50} src={quiz.icon} alt={quiz.name} />
                <h2>{quiz.name}</h2>
                <IconButton style={{ marginLeft: "auto" }}>
                  <ArrowForwardIos fontSize="large" color="primary" />
                </IconButton>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Home;
