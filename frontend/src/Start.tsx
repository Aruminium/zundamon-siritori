import type { Component } from "solid-js";
import Header from "./components/header";
import GameTable from "./components/gameTable";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
import Zunda from "./components/zunda";
import { Router, Routes, Route, Link } from "solid-app-router";

const Start: Component = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "100vh", "background-color": "#D9D9D9", width: "100%" }}
    >
      <Header />
      <Grid container height="auto" bgcolor="#4CD0A9">
        <GameTable />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={7}>
            <h1>「ん」がついたら負けなのだ！</h1>
            <h1>同じ言葉を使ってはいけないのだ！</h1>
          </Grid>
          <Grid item xs={4}>
            <Zunda />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={() => navigate("/game")}>
              ゲームを開始する
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Start;
