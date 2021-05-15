import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Questions from "./Pages/Questions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(230, 227, 227)",
    },
  },
});

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3001/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:quiz">
              <Questions />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
