import type { Component } from "solid-js";
import Header from "./components/header";
import Box from "@suid/material/Box";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Credit from "./components/credit";
import InputText from "./components/Input";
import Button from "@suid/material/Button";
import { Router, Routes, Route, Link } from "solid-app-router";

const Top: Component = () => {
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
          <Button variant="contained">ゲストユーザログイン</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
