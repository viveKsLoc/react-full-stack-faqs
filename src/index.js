import React from "react";
import ReactDOM from "react-dom"
import App from "./App";

import { library } from '@fortawesome/fontawesome-svg-core'
import {   faFileDownload,
  faUser,
  faServer } from '@fortawesome/free-solid-svg-icons'

library.add(faFileDownload,
  faUser,
  faServer)

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);