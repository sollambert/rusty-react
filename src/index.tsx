import React, { useState } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import * as wasm from "../build/rusty_react";

ReactDOM.render(<App wasm={wasm} />, document.getElementById("root"));