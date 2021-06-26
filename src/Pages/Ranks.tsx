import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { context } from "../Context/Context";
import { homeVariants, questionVariants, quizInfo } from "../helpers/helpers";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, makeStyles, TextField } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

interface UserStats {
  _id: string;
  name: string;
  score: number;
  __v: number;
}
const variants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

interface HistoryTypes {
  quizType: string;
  name: string;
}

const Ranks = () => {
  const [userStats, setUserStats] = useState<UserStats[]>();
  const { apiBase } = useContext(context);
  const history = useHistory<HistoryTypes>();

  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const res = await fetch(
      `${apiBase}/quizquestions/getuserstats/${
        history.location.state.quizType ? history.location.state.quizType : ""
      }`
    );
    const stats = await res.json();
    setUserStats(
      stats
        .sort((a: UserStats, b: UserStats) => (a.score < b.score ? 1 : -1))
        .slice(0, 10)
    );
  };

  console.log(userStats);
  return (
    <motion.div
    variants={questionVariants}
     exit="exit"
    className="ranks">
      <div style={{ display: "flex" }}>
        <motion.h1 variants={variants} animate="animation">
          🏆{" "}
        </motion.h1>
        <h1 className="ranks__title">Leaderboard </h1>
        <motion.h1 variants={variants} animate="animation">
          🏆{" "}
        </motion.h1>
      </div>

      <div className="ranks__table">
        {userStats ? (
          userStats.map((stat, index) => {
            return (
              <div
                style={
                  index % 2 === 0
                    ? {
                        backgroundColor: "rgb(230, 227, 227)",
                        color: "rgba(29, 26, 26, 0.884)",
                      }
                    : {
                        backgroundColor: "rgba(29, 26, 26, 0.884)",
                        color: "rgb(230, 227, 227)",
                      }
                }
                className="ranks__table__row"
                key={stat._id}
              >
                <p  > {index + 1}  </p>
                {history.location.state &&
                    stat.name === history.location.state.name && (
                      <AccountCircleIcon
                        style={{ marginLeft: "20px",position:"absolute" }}
                        fontSize="large"
                        color="inherit"
                      />
                    )}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p> {stat.name} </p>
                 
                </div>
                <p> {stat.score} </p>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      <Link className="back-to-main" to="/">
        <ArrowBackIosIcon />
        <div> Back to Main Page </div>
      </Link>
    </motion.div>
  );
};

export default Ranks;
