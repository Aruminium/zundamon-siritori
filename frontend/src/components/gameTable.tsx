import { Component, createEffect, createSignal, Ref } from "solid-js";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Paper from "@suid/material/Paper";
import Message from "./Message";

export type cardType = {
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
export const [isPosting, setIsPosting] = createSignal(false);
