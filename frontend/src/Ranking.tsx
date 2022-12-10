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

type Props = {
  continuation_count?: number;
};

const Ranking: Component<Props> = ({ continuation_count = 0 }) => {
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
      continuation_count: continuation_count,
    };
    const res = await postRanking(postData);
    setIsPost(true);
  };
  return (
    <div
      style={{
        height: "100vh",
        "background-color": "#D9D9D9",
        width: "100%",
      }}
    >
      <Header />
      {isLoading() ? (
        <h2>Loading...</h2>
      ) : (
        <Grid container height="auto" bgcolor="#4CD0A9">
          <Grid item xs={3}>
            <h1>あなたのスコアは{continuation_count}回なのだ!</h1>
          </Grid>
          <Grid
            item
            xs={5}
            container
            justifyContent="space-around"
            alignItems="flex-start"
            direction="column"
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">順位</TableCell>
                      <TableCell align="left">ユーザ名</TableCell>
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
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  value={text()}
                  onChange={handleChange}
                  fullWidth
                  label="名前を入力(アルファベット)"
                />
              </Grid>
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
                  >
                    ランキングに登録する
                  </Button>
                )}
              </Grid>
            </Grid>

            <Button variant="contained" onClick={() => navigate("/game")}>
              ゲームをやり直す
            </Button>
            <Button variant="contained">Twitterで共有する</Button>
          </Grid>
          <Grid item xs={4}>
            <Zunda />
          </Grid>
          <GameTable />
        </Grid>
      )}
    </div>
  );
};

export default Ranking;
