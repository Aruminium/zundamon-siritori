import { Component, createEffect, createSignal, Ref } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Paper from "@suid/material/Paper";
import Message from "./Message";
import CardHeader from "@suid/material/CardHeader";
import Divider from "@suid/material/Divider";

type cardType = {
  isPlayer: boolean;
  message: string;
};

const GameTable: Component = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Paper
        sx={{
          borderRadius: 2,
          bgcolor: "white",
          height: 500,
          overflow: "auto",
        }}
      >
        {cards().map(({ isPlayer, message }) => (
          <Message isPlayer={isPlayer} message={message} />
        ))}
        <div
          ref={(el) => {
            createEffect(() => {
              el.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }, cards());
          }}
        />
      </Paper>
    </ThemeProvider>
  );
};

export default GameTable;
export const [cards, setCards] = createSignal<cardType[]>([]);
