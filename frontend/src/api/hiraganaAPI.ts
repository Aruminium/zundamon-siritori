import axios, { AxiosInstance } from "axios";

const GOO_APP_ID: string = import.meta.env.VITE_GOO_APP_ID;

export type hiraganaAPIResponse = {
  data: {
    // ひらがな化されたテキスト
    converted: string;
  };
};

const instance: AxiosInstance = axios.create({
  baseURL: "https://labs.goo.ne.jp",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
export const toHiragana = async (text: string) => {
  try {
    const data = (await instance.post("/api/hiragana", {
      app_id: GOO_APP_ID,
      request_id: "record003",
      sentence: text,
      output_type: "hiragana",
    })) as hiraganaAPIResponse;
    return data.data.converted;
  } catch (error) {
    console.log(error);
  }
};
