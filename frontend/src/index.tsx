/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import Top from "./Top";
import Start from "./Start";
import Game from "./Game";

render(() => <App />, document.getElementById("root") as HTMLElement);
