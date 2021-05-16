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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(230, 227, 227)",
    },
  },
});

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:quiz">
              <Questions />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
