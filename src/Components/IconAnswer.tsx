import React, { useContext } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import TimerOffIcon from "@material-ui/icons/TimerOff";
import { context } from "../Context/Context";

const IconAnswer = () => {
  const { isCorrect, isTimeOff } = useContext(context);

  return (
    <div className="icon-answer">
      <div>
        {isTimeOff ? (
          <div className="icons">
            <p> Time is up! </p>
            <TimerOffIcon style={{ width: 80, height: 80 }} />
          </div>
        ) : isCorrect ? (
          <div className="icons">
            <p> Correct </p>
            <CheckCircleOutlinedIcon style={{ width: 80, height: 80 }} />
          </div>
        ) : (
          <div className="icons">
            <p> Wrong </p>
            <CancelOutlinedIcon
              color="secondary"
              style={{ width: 80, height: 80 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconAnswer;
