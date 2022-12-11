import axios, { AxiosInstance } from "axios";

export type RankingType = {
  name: string;
  continuation_count: number;
};

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const toZundamonAPI = async (text: string) => {
  try {
    const res = await instance.post("/siritori", {
      post_text: text,
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getRanking = async () => {
  try {
    const res = await instance.get("/ranking");
    return res.data as RankingType[];
  } catch (error) {
    console.error(error);
  }
};

export const postRanking = async ({
  name,
  continuation_count,
}: RankingType) => {
  try {
    const res = await instance.post("/ranking", {
      name: name,
      continuation_count: continuation_count,
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const init = async () => {
  try {
    const res = await instance.get("/init");
    return res;
  } catch (error) {
    console.error(error);
  }
}