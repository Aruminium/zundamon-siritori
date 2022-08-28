import type { Component } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import zundamon from "../assets/zundamon.png";

const Zunda: Component = () => {
  return (
	<ThemeProvider theme={MainTheme}>
		<div style={{display: "flex", width: "100%", height: "100%", "align-items": "center", "justify-content": "center"}}>
			<img src={zundamon} alt="zundamon" style={{"align-items": "center"}}/>
		</div>
	</ThemeProvider>
	);
};
export default Zunda;
