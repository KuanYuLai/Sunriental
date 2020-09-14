import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Pagess
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
