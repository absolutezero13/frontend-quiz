import iconCss3 from "./../assets/css.png";
import iconHtml from "./../assets/html.png";
import iconJs from "./../assets/javascript.png";

export const questionVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100vw",
  },
};
export const homeVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100vw",
    transtion: {
      duration: 1,
    },
  },
};

export const quizInfo = [
  {
    name: "HTML",
    icon: iconHtml,
    borderColor: "",
  },
  {
    name: "CSS",
    icon: iconCss3,
    borderColor: "",
  },
  {
    name: "JAVASCRIPT",
    icon: iconJs,
    borderColor: "",
  },
];
