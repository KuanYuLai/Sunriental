import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//Pagess
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/Work" component={WorkPage} />
        <Route exact path="/Blog" component={BlogPage} />
        <Route exact path="/dev" component={ProfileCard} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
