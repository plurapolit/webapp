import ReactPiwik from 'react-piwik';

let siteId;

switch (process.env.REACT_APP_ENV) {
  case 'development':
    siteId = 3;
    break;
  case 'staging':
    siteId = 2;
    break;
  case 'production':
    siteId = 1;
    break;
  default:
    siteId = null;
}

const Piwik = new ReactPiwik({
  url: 'https://plurapolit.matomo.cloud',
  siteId,
  trackErrors: true,
});

ReactPiwik.push(['trackPageView']);
ReactPiwik.push(['enableHeartBeatTimer']);

export default Piwik;
