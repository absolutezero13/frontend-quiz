import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Questions from "./Pages/Questions";
import { AnimatePresence } from "framer-motion";
import { ContextProvider } from "./Context/Context";
import Results from "./Pages/Results";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/results">
                <Results />
              </Route>
              <Route exact path="/:quiz">
                <Questions />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
