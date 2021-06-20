import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { context } from "../Context/Context";
import { motion } from "framer-motion";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { questionVariants } from "../helpers/helpers";

const useStyles = makeStyles({
  input: {
    color: "rgb(230, 227, 227)",
    fontFamily: "Source Code Pro",
    fontSize: "1.6rem",
    marginTop: "5rem",
  },
  button: {
    color: "rgba(29, 26, 26, 0.784)",
    fontFamily: "inherit",
    backgroundColor: "rgb(230, 227, 227)",
    fontSize: "1.6rem",
    marginTop: "3rem",
    width: "20rem",
    "&:hover": {
      backgroundColor: "rgba(29, 26, 26, 0.784)",
      color: "rgb(230, 227, 227)",
    },
  },
});

const Results = (props: any) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const { points, questions, questionNumber, apiBase } = useContext(context);
  const history = useHistory();
  const params = useParams();

  // useEffect(() => {
  // // if a user manually type this route
  //   if (!questions || questions.length !== questionNumber) {
  //     history.push("/");
  //   }
  // }, []);

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
          quizType: history.location.state,
        }),
      }).then(() => {
        console.log("sent!");
        history.push({
          pathname: "/ranks",
          state: {
            quizType: history.location.state,
            name,
          },
        });
      });
    } else {
      setError(true);
    }
  };

  return (
    <motion.div
      variants={questionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {true && (
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
            onChange={(e) => setName(e.target.value)}
            value={name}
            InputLabelProps={{
              className: classes.input,
            }}
            inputProps={{
              className: classes.input,
            }}
            multiline
            rowsMax={2}
            label="Name"
          />
          {error && <p style={{ color: "red" }}>Please insert a valid name.</p>}
          <Button onClick={sendScore} className={classes.button}>
            Send
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default Results;
