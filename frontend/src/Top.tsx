import type { Component } from "solid-js";
import Header from "./components/header";
import GameTable from "./components/gameTable";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";

const Top: Component = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        "background-color": "#D9D9D9",
        width: "100%",
      }}
    >
      <Header />
      <Grid container height="auto" bgcolor="#D9D9D9">
        <GameTable />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <h1 style="color:green">ずんだもんとは</h1>
          <h2>
            東北ずん子が所持する「ずんだアロー」に変身できる。 ずんだ餅の精。
          </h2>
          <h1 style="color:green">ずんだもんしりとりとは</h1>
          <h2>ずんだもんとボイス付きのしりとりができるのだ！</h2>
          <Button variant="contained" onClick={() => navigate("/start")}>
            ゲームに進む
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
