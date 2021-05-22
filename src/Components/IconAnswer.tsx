import React, { useContext } from "react";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { context } from "../Context/Context";

const IconAnswer = () => {
  const { isCorrect } = useContext(context);

  return (
    <div className="icon-answer">
      <div>
        {isCorrect ? (
          <div className="icons">
            <p> Correct </p>
            <CheckCircleOutlinedIcon
              className="icons__icon"
              style={{ width: 80, height: 80 }}
            />
          </div>
        ) : (
          <div className="icons">
            <p> Wrong </p>
            <CancelOutlinedIcon
              className="icons__icon"
              style={{ width: 80, height: 80 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IconAnswer;
