import React, { useContext, useEffect, useState } from "react";
import { context } from "../Context/Context";
import { quizInfo } from "../helpers/helpers";

interface UserStats {
  _id: string;
  name: string;
  score: number;
  __v: number;
}

const Ranks = () => {
  const [userStats, setUserStats] = useState<UserStats[]>();
  const { apiBase } = useContext(context);

  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    const res = await fetch(`${apiBase}/quizquestions/getuserstats`);
    const stats = await res.json();

    setUserStats(stats);
  };

  console.log(userStats);
  return (
    <div className="ranks">
      <h1>🏆 Stats</h1>

      <div className="ranks__table">
        {userStats &&
          userStats.map((stat) => {
            return (
              <div className="ranks__table__row" key={stat._id}>
                <p> {stat.name} </p>
                <p> {stat.score} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Ranks;
