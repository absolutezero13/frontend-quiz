import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { context } from "../Context/Context";
import { questionVariants } from "../helpers/helpers";
import { AccountCircle, ArrowBackIos } from "@mui/icons-material";

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
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const res = await fetch(
      `${apiBase}/quizquestions/getuserstats/${params.quizType}`
    );
    const stats = await res.json();
    setUserStats(
      stats
        .sort((a: UserStats, b: UserStats) => (a.score < b.score ? 1 : -1))
        .slice(0, 10)
    );
  };

  return (
    <motion.div variants={questionVariants} exit="exit" className="ranks">
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
                <p> {index + 1} </p>
                {history.location.state &&
                  stat.name === history.location.state.name && (
                    <AccountCircle
                      style={{ marginLeft: "20px", position: "absolute" }}
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
        <ArrowBackIos />
        <div> Back to Main Page </div>
      </Link>
    </motion.div>
  );
};

export default Ranks;
