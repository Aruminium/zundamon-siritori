import type { Component } from "solid-js";
import { Router, Routes, Route, Link } from "solid-app-router";
import Top from "./Top";
import Start from "./Start";
import Game from "./Game";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Top} />
        <Route path="/start" component={Start} />
        <Route path="/game" component={Game} />
      </Routes>
    </Router>
  );
};

export default App;
