import ReactPiwik from "react-piwik";

import Time from "./Time";

const PiwikMessages = () => {
  const push = (category, action, name) => {
    ReactPiwik.push(["trackEvent", category, action, name]);
  };

  const statement = () => {
    const start = (panelTitle, expertName, audioStatement) => {
      push(
        "Statement",
        "start",
        `${panelTitle} | ${expertName} (${audioStatement} - ${Time.getTimeStamp()})`,
      );
    };

    const stop = (panelTitle, expertName, audioStatement) => {
      push(
        "Statement",
        "stop",
        `${panelTitle} | ${expertName} (${audioStatement} - ${Time.getTimeStamp()})`,
      );
    };

    return {
      start,
      stop,
    };
  };

  return {
    statement: statement(),
  };
};

export default PiwikMessages();
