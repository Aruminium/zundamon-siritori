import { Component, createEffect, createSignal, For, Index } from "solid-js";
import Header from "./components/header";
import GameTable from "./components/gameTable";
import Zunda from "./components/zunda";
import Grid from "@suid/material/Grid";
import Button from "@suid/material/Button";
import { useNavigate } from "solid-app-router";
import ListItem from "@suid/material/ListItem";
import List from "@suid/material/List";
import Box from "@suid/material/Box";
import ListItemText from "@suid/material/ListItemText";
import TableRow from "@suid/material/TableRow";
import { getRanking, postRanking, RankingType } from "./api/zundamonAPI";
import TextField from "@suid/material/TextField";
import Table from "@suid/material/Table";
import TableContainer from "@suid/material/TableContainer";
import Paper from "@suid/material/Paper";
import TableHead from "@suid/material/TableHead";
import TableCell from "@suid/material/TableCell";
import TableBody from "@suid/material/TableBody";
import CircularProgress from "@suid/material/CircularProgress";
import Typography from "@suid/material/Typography";
import { TwitterIntentTweet } from "./components/twitterIntentTweet";
import { count } from "./Game";

const Ranking: Component = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = createSignal<RankingType[]>();
  const [isLoading, setIsLoading] = createSignal(true);
  const [text, setText] = createSignal("zunda");
  const [isPost, setIsPost] = createSignal(false);
  createEffect(() => {
    (async () => {
      const res = await getRanking();
      setRanking(res);
      setIsLoading(false);
    })();
  }, [isPost]);
  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const rankingHandleClick = async () => {
    const postData: RankingType = {
      name: text(),
      continuation_count: count(),
    };
    const res = await postRanking(postData);
    setIsPost(true);
  };
  return (
    <Box
      style={{
        height: "100vh",
      }}
    >
      <Header />
      {isLoading() ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container height="auto" bgcolor="#4CD0A9" padding={3}>
          <Grid item paddingY={3} xs={12} container justifyContent="center">
            <Typography variant="h3">
              あなたのスコアは{count()}回なのだ!
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">順位</TableCell>
                      <TableCell align="left">プレイヤー名</TableCell>
                      <TableCell align="left">スコア</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <For each={ranking()}>
                      {(item: RankingType, i) => (
                        <TableRow>
                          <TableCell>{i() + 1}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.continuation_count}</TableCell>
                        </TableRow>
                      )}
                    </For>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6} container paddingX={1}>
              <Grid item container>
                <Grid item xs={5}>
                  <TextField
                    value={text()}
                    onChange={handleChange}
                    fullWidth
                    label="プレイヤー名を入力"
                  />
                </Grid>
                <Grid flexGrow={1} />
                <Grid item xs={6}>
                  {isPost() ? (
                    <Button
                      disabled={true}
                      onClick={rankingHandleClick}
                      variant="contained"
                    >
                      送信済み
                    </Button>
                  ) : (
                    <Button
                      disabled={isPost()}
                      onClick={rankingHandleClick}
                      variant="contained"
                      color="success"
                    >
                      ランキングに登録する
                    </Button>
                  )}
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={6}>
                  <Button variant="contained" onClick={() => navigate("/game")} color="warning">
                    ゲームをやり直す
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <TwitterIntentTweet
                    text={count()+"回続きました！"}
                    hashtags={["ずんだもんしりとり"]}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Ranking;
