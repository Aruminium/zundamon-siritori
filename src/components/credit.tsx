import type { Component } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";
import Link from "@suid/material/Link"

const Credit: Component = () => {
  return (
    <ThemeProvider theme={MainTheme}>
			<Box borderRadius={2} bgcolor="white" height="81%" paddingLeft={1}>
				<Stack>
					<p>CREDIT</p>
					<Link href="https://voicevox.hiroshiba.jp/" target="none">VOICEVOX:ずんだもん</Link>
					<Link href="https://seiga.nicovideo.jp/seiga/im10788496">ずんだもん立ち絵素材</Link>
				</Stack>
			</Box>
    </ThemeProvider>
  );
};
export default Credit;
