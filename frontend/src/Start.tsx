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
          <Grid item xs={7} bgcolor="#67A7CC">
            <h2>「ん」がついたら負けなのだ！</h2>
            <h2>同じ言葉を使ってはいけないのだ！</h2>
            <h2>語尾の小文字は大文字に変換されるのだ！</h2>
            <h3>例) やぁ → やあ</h3>
            <h2>語尾に「ー」がある場合はその一つ前の文字から始めるのだ！</h2>
            <h3>例)ルビー → 琵琶湖</h3>
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
