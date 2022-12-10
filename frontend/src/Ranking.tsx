import { Component, createEffect, createSignal } from "solid-js";
import Header from "./components/header";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
import ListItem from "@suid/material/ListItem";
import List from "@suid/material/List";
import Box from "@suid/material/Box";
import ListItemText from "@suid/material/ListItemText";
import TableRow from "@suid/material/TableRow";

const Ranking: Component = () => {
  const navigate = useNavigate();
  const test1 = { name: "taro", score: "8" };
  const test2 = { name: "ziro", score: "5" };

  return (
    <div
      style={{
        height: "100vh",
        "background-color": "#D9D9D9",
        width: "100%",
      }}
    >
      <Header />
      <Grid container height="auto" bgcolor="#4CD0A9">
        <Grid item xs={3}>
          <h1>あなたのスコアはHOGE回なのだ!</h1>
        </Grid>
        <Grid
          item
          xs={5}
          container
          justifyContent="space-around"
          alignItems="flex-start"
          direction="column"
        >
          <Button variant="contained">ランキングに登録する</Button>
          <Box
            sx={{
              width: "100%",
              height: 300,
              maxWidth: 200,
              bgcolor: "background.paper",
            }}
          >
            <List>
              <ListItem disablePadding component="nav">
                ランキング
              </ListItem>
              <ListItem disablePadding component="nav">
                <ListItemText primary="ユーザ名" />
                <ListItemText primary="スコア" />
              </ListItem>
              <ListItem disablePadding component="nav">
                <ListItemText primary={test1.name} />
                <ListItemText primary={test1.score} />
              </ListItem>
              <ListItem disablePadding component="nav">
                <ListItemText primary={test2.name} />
                <ListItemText primary={test2.score} />
              </ListItem>
            </List>
          </Box>
          <Button variant="contained" onClick={() => navigate("/game")}>
            ゲームをやり直す
          </Button>
          <Button variant="contained">Twitterで共有する</Button>
        </Grid>
        <Grid item xs={4}>
          <Zunda />
        </Grid>
        <GameTable />
      </Grid>
    </div>
  );
};

export default Ranking;
