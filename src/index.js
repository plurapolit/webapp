import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import TagManager from "react-gtm-module";
import "./olderbrowser";

import App from "./App";
import "./index.scss";
import "./assets/fonts/fonts.scss";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.REACT_APP_ENV,
});

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_TAG_MANAGER_ID,
  auth: process.env.REACT_APP_TAG_MANAGER_AUTH,
  preview: process.env.REACT_APP_TAG_MANAGER_PREVIEW,
};
TagManager.initialize(tagManagerArgs);


ReactDOM.render(<App />, document.getElementById("root"));
