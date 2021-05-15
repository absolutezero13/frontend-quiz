import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

interface ParamTypes {
  quiz: string;
}

const Questions: React.FC = () => {
  const history = useHistory();
  const params = useParams<ParamTypes>();

  console.log(params.quiz);

  useEffect(() => {}, []);

  return <div> lel </div>;
};

export default Questions;
