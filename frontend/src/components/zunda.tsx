import { Component, createSignal } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import zundamon from "../assets/zundamon.png";
import Grid from "@suid/material/Grid";
import Typography from "@suid/material/Typography";
import { count } from "../Game";

const Zunda: Component = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Grid container>
        <Grid item xs={6}>
          <img
            src={zundamon}
            alt="zundamon"
            style={{ "align-items": "center" }}
          />
        </Grid>
				<Grid item xs={6}>
					<Typography variant="h1" color="white" sx={{opacity: "0.7"}}>{count()}</Typography>
				</Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Zunda;

