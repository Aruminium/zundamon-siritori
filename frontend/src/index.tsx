/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import Top from "./Top";

render(() => <Top />, document.getElementById("root") as HTMLElement);
