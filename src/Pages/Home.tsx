import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { quizInfo } from "../helpers/helpers";
import { homeVariants } from "../helpers/helpers";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

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
      <a className="github-link" href="https://www.github.com/absolutezero13">
        <p style={{ marginRight: 10 }}> Developer </p>
        <GitHubIcon fontSize="large" />
      </a>
    </motion.div>
  );
};

export default Home;
