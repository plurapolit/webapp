import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./olderbrowser";

import App from "./App";
import "./index.scss";
import "./assets/fonts/fonts.scss";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_ENV,
});

ReactDOM.render(<App />, document.getElementById("root"));
