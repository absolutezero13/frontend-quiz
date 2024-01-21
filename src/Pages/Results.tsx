import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { context } from "../Context/Context";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import { questionVariants } from "../helpers/helpers";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const useStyles = makeStyles({
//   input: {
//     color: "rgb(230, 227, 227)",
//     fontFamily: "Source Code Pro",
//     fontSize: "1.6rem",
//   },
//   label: {
//     fontSize: "1.6rem",
//   },
//   button: {
//     color: "rgba(29, 26, 26, 0.784)",
//     fontFamily: "inherit",
//     backgroundColor: "rgb(230, 227, 227)",
//     fontSize: "1.6rem",
//     marginTop: "3rem",
//     width: "20rem",
//     "&:hover": {
//       backgroundColor: "rgba(29, 26, 26, 0.784)",
//       color: "rgb(230, 227, 227)",
//     },
//   },
// });

const Results: React.FC = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { points, questions, questionNumber, apiBase } = useContext(context);
  const navigate = useNavigate();
  const params = useParams<{ quiz: string }>();

  useEffect(() => {
    // if a user manually type this route
    if (!questions || questions.length !== questionNumber) {
      setTimeout(() => navigate("/"), 2500);
    }
  }, []);

  const sendScore = async () => {
    if (name && name.length < 15) {
      await fetch(`${apiBase}/quizquestions/sendquizscore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          score: points,
          quizType: params.quiz,
        }),
      }).then(() => {
        navigate(`/ranks/${params.quizType}`);
      });
    } else {
      setError(true);
    }
  };

  const data01 = [
    {
      name: "True",
      value: 4,
    },
    {
      name: "False",
      value: 1,
    },
  ];

  return (
    <motion.div
      variants={questionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {questions ? (
        <div className="results">
          <div className="results__titles">
            <h2>
              You scored <span style={{ color: "green" }}>{points}</span> out of{" "}
              {questions.length} !
            </h2>
            <h3> You can send your score to see your rank!</h3>
          </div>
          <TextField
            autoFocus
            error={error}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
            value={name}
            InputLabelProps={
              {
                // className: classes.label,
              }
            }
            inputProps={
              {
                // className: classes.input,
              }
            }
            multiline
            label="Name"
          />
          {error && <p style={{ color: "red" }}>Please insert a valid name.</p>}
          <Button onClick={sendScore}>Send</Button>
        </div>
      ) : (
        <div className="redirecting">
          <Loading />
          <h1>Redirecting.. </h1>
        </div>
      )}
    </motion.div>
  );
};

export default Results;
