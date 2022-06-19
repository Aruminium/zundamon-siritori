import { Component, createSignal, onCleanup, Ref } from "solid-js";
import { createTheme, ThemeProvider } from "@suid/material/styles";
import { MainTheme } from "../models/mainColorTheme";
import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";
import Link from "@suid/material/Link";
import Grid from "@suid/material/Grid";
import TextField from "@suid/material/TextField";
import Button from "@suid/material/Button";
import Input from "@suid/material/Input";
import axios from "axios";
import { any, func, string } from "prop-types";

const InputText: Component = () => {
  let inputRef: any;
  const [text, setText] = createSignal("");
  const handleChange = (event: any) => {
    setText(event.target.value);
    console.log(text());
  };

  const handleClick = () => {
    axios
      .post("http://127.0.0.1:5000/", {
        post_text: text(),
      })
      .then((res) => {
        console.log(res.data.result);
      });

    setText("");
  };

  return (
    <ThemeProvider theme={MainTheme}>
      <Grid>
        <TextField
          value={text()}
          fullWidth
          onChange={handleChange}
          ref={inputRef}
        />
        <Button variant="contained" onClick={handleClick}>
          送信
        </Button>
        <Button>喋る</Button>
      </Grid>
    </ThemeProvider>
  );
};
export default InputText;
