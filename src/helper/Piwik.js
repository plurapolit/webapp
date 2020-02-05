const PiwikReactRouter = require('piwik-react-router');

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

const Piwik = new PiwikReactRouter({
  url: 'https://plurapolit.matomo.cloud',
  siteId,
  trackErrors: true,
});

Piwik.push(['trackPageView']);
Piwik.push(['enableHeartBeatTimer']);

export default Piwik;
