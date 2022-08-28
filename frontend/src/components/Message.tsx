import { ThemeProvider } from "@suid/material";
import Avatar from "@suid/material/Avatar";
import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardHeader from "@suid/material/CardHeader";
import Divider from "@suid/material/Divider";
import Grid from "@suid/material/Grid";
import type { Component } from "solid-js";
import ZundaAvatar from "../assets/zunda-avatar.jpg"
import { MainTheme } from "../models/mainColorTheme";

type cardType = {
  isPlayer: boolean;
  message: string;
};

const Message: Component<cardType> = ({ isPlayer, message }) => {
  if (isPlayer) {
    return (
      <Card sx={{ borderRadius: 6, m: 1, border: 1 }}>
        <CardHeader avatar={<Avatar alt="Player" />} title="あなた" />
        <Divider />
        <CardContent sx={{textAlign: "center"}}>{message}</CardContent>
      </Card>
    );
  } else {
    return (
			<ThemeProvider theme={MainTheme}>
				<Box color="primary">
					<Card sx={{ borderRadius: 6, m: 1, border: 1}} >
						<CardHeader  avatar={<Avatar alt="Zunda" src={ZundaAvatar} />} title="ずんだもん" />
						<Divider />
						<CardContent sx={{textAlign: "center"}}>{message}</CardContent>
					</Card>
				</Box>
			</ThemeProvider>
    );
  }
};

export default Message;
