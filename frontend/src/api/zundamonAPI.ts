import axios, { AxiosInstance } from "axios";

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
