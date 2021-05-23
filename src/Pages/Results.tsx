import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { context } from "../Context/Context";
import { motion } from "framer-motion";
import { Button, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    color: "rgb(230, 227, 227)",
    fontFamily: "Source Code Pro",
  },
  button: {
    color: "rgb(230, 227, 227)",
    fontFamily: "inherit",
    backgroundColor: "white",
    fontSize: "1.6rem",
    marginTop: "1rem",
  },
});

const Results = () => {
  const classes = useStyles();

  const { points, questions, questionNumber } = useContext(context);
  const history = useHistory();

  //   useEffect(() => {
  //     if (!questions || questions.length !== questionNumber) {
  //       history.push("/");
  //     }
  //   }, []);

  return (
    <motion.div>
      {true && (
        <div>
          <h2>You scored {points} out of lol!</h2>
          <h3> You can save your score to see your rank!</h3>
          <TextField
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
          <Button variant="outlined" className={classes.button}>
            {" "}
            Send{" "}
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default Results;
