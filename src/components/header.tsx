import type { Component } from "solid-js";
import AppBar from "@suid/material/AppBar";
import Box from "@suid/material/Box";
import Typography from "@suid/material/Typography";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";

const Header: Component = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="static">
          <Typography
            variant="h4"
            component="div"
            textAlign="center"
            height="80px"
            lineHeight="80px"
          >
            「ずんだもん」としりとりなのだ！
          </Typography>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Header;
