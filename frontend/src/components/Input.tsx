import { Component, createEffect, createSignal } from "solid-js";
import { Howl } from "howler";
import { createTheme, ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";
import Link from "@suid/material/Link";
import Grid from "@suid/material/Grid";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";
import Input from "@suid/material/Input";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import SendIcon from "@suid/icons-material/Send";
import { cards, setCards } from "./gameTable";

type cardType = {
  isPlayer: boolean;
  message: string;
};

const InputText: Component = () => {
  const URL: string = "http://localhost:5000/";
  const instance: AxiosInstance = axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });
  const [text, setText] = createSignal("");
  const [res, setRes] = createSignal("");
  const [sound, setSound] = createSignal<Howl>();
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const handleClick = async () => {
    sound()?.unload()
    const card: cardType = { isPlayer: true, message: text() };
    setCards([...cards(), card]);
    try {
      const data = await instance.post("/siritori", {
        post_text: text(),
      });
      const z_card: cardType = { isPlayer: false, message: data.data };
      console.log(data.data);
      setCards([...cards(), z_card]);
      if (data.status == 201) {
        setSound(
          new Howl({
            src: "src/assets/audio/lose.wav",
            
          })
        );
      } else {
        setSound(
          new Howl({
            src: "src/assets/audio/audio.wav",
          })
        );
      }
      sound()?.play();
    } catch (error) {
      console.log(error);
    }
    setText("");
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            value={text()}
            onChange={handleChange}
            fullWidth
            label="ここに入力してください"
            required
          />
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            onClick={handleClick}
            endIcon={<SendIcon />}
          >
            送信
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default InputText;
