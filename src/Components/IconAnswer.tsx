import React, { useContext } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import TimerOffIcon from "@material-ui/icons/TimerOff";
import { context } from "../Context/Context";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  icon: { width: 40, height: 40, marginLeft: 20 },
});

const IconAnswer = () => {
  const styles = useStyles();
  const { isCorrect, isTimeOff } = useContext(context);

  return (
    <div className="icon-answer">
      <div>
        {isTimeOff ? (
          <div className="icons">
            <p> Time is up! </p>
            <TimerOffIcon className={styles.icon} />
          </div>
        ) : isCorrect ? (
          <div className="icons">
            <Typography variant="h3">Correct</Typography>
            <CheckCircleOutlinedIcon className={styles.icon} />
          </div>
        ) : (
          <div className="icons">
            <Typography variant="h3" color="secondary">
              Wrong
            </Typography>
            <CancelOutlinedIcon color="secondary" className={styles.icon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconAnswer;
