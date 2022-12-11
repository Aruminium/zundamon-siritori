import { Component, createSignal, Suspense } from "solid-js";
import { Howl } from "howler";
import { ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Grid from "@suid/material/Grid";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";
import SendIcon from "@suid/icons-material/Send";
import { cards, isPosting, setCards, setIsPosting } from "./gameTable";
import { toHiragana } from "../api/hiraganaAPI";
import { toZundamonAPI } from "../api/zundamonAPI";
import { count, setCount } from "./zunda";
import CircularProgress from "@suid/material/CircularProgress";
import { useNavigate } from "solid-app-router";
import { wait } from "../api/wait";

type cardType = {
  isPlayer: boolean;
  message: string;
};

const InputText: Component = () => {
  const navigate = useNavigate();
  const [text, setText] = createSignal("");
  const [res, setRes] = createSignal("");
  const [sound, setSound] = createSignal<Howl>();
  const [data, setData] = createSignal();
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const handleClick = async () => {
    setIsPosting(true);
    sound()?.unload();
    const card: cardType = { isPlayer: true, message: text() };
    setCards([...cards(), card]);
    const hiragana_text = await toHiragana(text());
    const res = await toZundamonAPI(hiragana_text!);
    const z_card: cardType = { isPlayer: false, message: res!.data };
    setCards([...cards(), z_card]);
    setIsPosting(false);
    console.log(res)
    if (res!.status == 201) {
      // 負け
      setSound(
        new Howl({
          src: "src/assets/common/lose.wav",
        })
      );
      await wait(3);
      await navigate("/ranking")
    } else if (res!.status == 202) {
      // 勝ち
      setSound(
        new Howl({
          src: "src/assets/common/win.wav",
        })
      );
      await wait(3);
      await navigate("/ranking")
    } else {
      setSound(
        new Howl({
          src: "src/assets/audio/audio.wav",
        })
      );
      setCount(count() + 1);
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
              disabled={isPosting()}
            >
              送信
            </Button>
            {<CircularProgress /> && !isPosting()}
          </Grid>
        </Grid>
      </Suspense>
    </ThemeProvider>
  );
};
export default InputText;
