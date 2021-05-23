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
export const modalStyles = {
  overlay: {
    backgroundColor: "rgba(29, 26, 26, 0.784)",
  },
  content: {
    width: "35rem",
    height: "20rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(29, 26, 26, 0.584)",
  },
};
