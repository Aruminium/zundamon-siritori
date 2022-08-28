import type { Component } from "solid-js";
import Header from "./components/header";
import Box from "@suid/material/Box";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Credit from "./components/credit";
import InputText from "./components/Input";

const App: Component = () => {
  return (
    <div style={{height: "100vh", "background-color": "#D9D9D9", width: "100%"}}>
      <Header />
      <Grid container height="auto" bgcolor="#D9D9D9">
        <Grid container >
          <Grid item height="100%" xs={6} p={1}>
            <GameTable />
          </Grid>
          <Grid container xs={6} p={1}>
            <Grid item xs={12} bgcolor="#9ccc65" borderRadius={2}>
              <Zunda /> 
            </Grid>
            <Grid item xs={12} borderRadius={2} >
              <Credit />
            </Grid>
          </Grid>
        </Grid>

        <Grid item borderRadius={2} bgcolor="white" margin={1} xs={12} >
          <InputText />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
