import type { Component } from "solid-js";
import { Router, Routes, Route } from "solid-app-router";
import Top from "./Top";
import Start from "./Start";
import Game from "./Game";
import Ranking from "./Ranking";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Top} />
        <Route path="/start" component={Start} />
        <Route path="/game" component={Game} />
        <Route path="/ranking" component={Ranking} />
      </Routes>
    </Router>
  );
};

export default App;
