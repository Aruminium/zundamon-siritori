import { Component, createSignal, Suspense } from "solid-js";
import { Howl } from "howler";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Grid from "@suid/material/Grid";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";
import Input from "@suid/material/Input";
import SendIcon from "@suid/icons-material/Send";
import { cards, setCards } from "./gameTable";
import { toHiragana } from "../api/hiraganaAPI";
import { toZundamonAPI } from "../api/zundamonAPI";

type cardType = {
  isPlayer: boolean;
  message: string;
};

const InputText: Component = () => {
  const [text, setText] = createSignal("");
  const [res, setRes] = createSignal("");
  const [sound, setSound] = createSignal<Howl>();
  const [data, setData] = createSignal();
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const handleClick = async () => {
    sound()?.unload();
    const card: cardType = { isPlayer: true, message: text() };
    setCards([...cards(), card]);
    const hiragana_text = await toHiragana(text());
    const res = await toZundamonAPI(hiragana_text!);
    console.log(res!.data);
    const z_card: cardType = { isPlayer: false, message: res!.data };
    setCards([...cards(), z_card]);
    if (res!.status == 201) {
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
    setText("");
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Suspense fallback={<div>ちょっと待つなのだ</div>}>
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
      </Suspense>
    </ThemeProvider>
  );
};
export default InputText;
