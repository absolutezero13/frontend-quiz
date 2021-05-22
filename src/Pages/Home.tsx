import { Card, Icon, IconButton } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { context } from "../Context/Context";
import iconCss3 from "./../assets/css.png";
import iconHtml from "./../assets/html.png";
import iconJs from "./../assets/javascript.png";

const componentVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100vw",
    transtion: {
      duration: 1,
    },
  },
};

const variants = {
  initial: { x: -1500 },
  animate: {
    x: 0,
  },
};

const Home: React.FC = () => {
  const quizes = [
    {
      name: "HTML",
      icon: iconHtml,
      borderColor: "",
    },
    {
      name: "CSS",
      icon: iconCss3,
      borderColor: "",
    },
    {
      name: "JAVASCRIPT",
      icon: iconJs,
      borderColor: "",
    },
  ];

  return (
    <motion.div
      variants={componentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="home"
    >
      <div className="title">
        <h1>Welcome to the Front End Development Quiz !</h1>
        <h2> Select a quiz that you want to take ! </h2>
      </div>

      <div className="home__quizes">
        {quizes.map((quiz, i) => {
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
                  <ArrowForwardIos color="primary" />
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
