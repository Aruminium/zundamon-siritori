import type { Component } from "solid-js";
import Header from "./components/header";
import Box from "@suid/material/Box";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Credit from "./components/credit";
import InputText from "./components/Input";
import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
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
          direction="column"
        >
          <h1>「ん」がついたら負けなのだ！</h1>
          <Button variant="contained" onClick={() => navigate("/game")}>
            ゲームを開始する
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Start;
