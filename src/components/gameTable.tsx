import type { Component } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Avatar from "@suid/material/Avatar";
import Typography from "@suid/material/Avatar";
import Grid from "@suid/material/Grid";
import withStyles from "@suid/material/styles/styled";
import Paper from "@suid/material/Paper";
import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";
import styled from "@suid/material/styles/styled";
import List from "@suid/material/List";

const GameTable: Component = () => {

	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,

	}));
  return (
    <ThemeProvider theme={MainTheme}>
			<Box borderRadius={2} bgcolor="white" margin={1} height="584px">
				<List>

				</List>
			</Box>
    </ThemeProvider>
  );
};

export default GameTable;
