import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Questions from "./Pages/Questions";
import { AnimatePresence } from "framer-motion";
import { ContextProvider } from "./Context/Context";
import Results from "./Pages/Results";
// import { red } from "@material-ui/core/colors";
import Ranks from "./Pages/Ranks";
import { ThemeProvider, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(230, 227, 227)",
    },
    secondary: { main: red[500] },
  },
  typography: {
    fontFamily: "Source Code Pro",
  },
});

function App() {
  const location = useLocation();
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AnimatePresence>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/ranks/:quizType" Component={Ranks} />
              <Route path="/results/:quizType" Component={Results} />
              <Route path="/:quizType" Component={Questions} />
            </Routes>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
