import Piwik from './Piwik';

import { getTimeStamp } from './helper';

const PiwikMessages = () => {
  const push = (category, action, name) => {
    Piwik.push(['trackEvent', category, action, name]);
  };

  const statement = () => {
    const start = (panelTitle, expertName, audioStatement) => {
      push('Statement', 'start', `${panelTitle} | ${expertName} (${audioStatement} - ${getTimeStamp()})`);
    };

    const stop = (panelTitle, expertName, audioStatement) => {
      push('Statement', 'stop', `${panelTitle} | ${expertName} (${audioStatement} - ${getTimeStamp()})`);
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
