import React, { useContext } from "react";
import { context } from "../Context/Context";
import { Typography } from "@mui/material";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "@mui/icons-material";
import { CancelOutlined as CancelOutlinedIcon } from "@mui/icons-material";
import { TimerOff as TimerOffIcon } from "@mui/icons-material";

const styles = {
  icon: {
    width: 40,
    height: 40,
  },
};

const IconAnswer = () => {
  const { isCorrect, isTimeOff } = useContext(context);

  return (
    <div className="icon-answer">
      <div>
        {isTimeOff ? (
          <div className="icons">
            <p> Time is up! </p>
            <TimerOffIcon style={styles.icon} />
          </div>
        ) : isCorrect ? (
          <div className="icons">
            <Typography variant="h3">Correct</Typography>
            <CheckCircleOutlinedIcon style={styles.icon} />
          </div>
        ) : (
          <div className="icons">
            <Typography variant="h3" color="secondary">
              Wrong
            </Typography>
            <CancelOutlinedIcon color="secondary" style={styles.icon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconAnswer;
