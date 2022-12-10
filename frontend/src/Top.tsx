import type { Component } from "solid-js";
import Header from "./components/header";
import GameTable from "./components/gameTable";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";

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
          <Button variant="contained" onClick={() => navigate("/start")}>
            ゲストユーザログイン
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
