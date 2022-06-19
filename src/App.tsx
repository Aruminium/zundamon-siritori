import type { Component } from "solid-js";
import Header from "./components/header";
import Box from "@suid/material/Box";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Credit from "./components/credit";
import InputText from "./components/input";

const App: Component = () => {
  return (
    <div style={{height: "100vh", "background-color": "#D9D9D9", width: "100%"}}>
      <Header />
      <Grid height="auto">
        <Grid height="600px" container bgcolor="#D9D9D9">
          <Grid  item height="100%" xs={6} >
            <GameTable />
          </Grid>
          <Grid item xs={6}>
            <Grid item height="74%" xs={12} bgcolor="#9ccc65" borderRadius={2} margin="2%">
              <Zunda /> 
            </Grid>
            <Grid item height="24%" xs={12} borderRadius={2} margin="2%">
              <Credit />
            </Grid>
          </Grid>
        </Grid>
        <Grid borderRadius={2} bgcolor="white" margin={1} height="90px" width="98.5%">
          <InputText />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
