/* eslint-disable */

var outdatedBrowserRework = require("outdated-browser-rework");
import "outdated-browser-rework/dist/style.css";

outdatedBrowserRework({
  browserSupport: {
    Chrome: 56,
    Edge: 16,
    Safari: 11,
    "Mobile Safari": 11,
    Firefox: 39,
    Opera: 43,
    Vivaldi: 1,
    Yandex: false,
    IE: false
},
  requireChromeOnAndroid: false,
  isUnknownBrowserOK: false,
  language: "de",
  messages: {
		de: {
      url: "https://www.browser-update.org/de/update.html",
      "outOfDate": "Dein Browser ist veraltet!",
      "update": {
        "web": "Bitte aktualisiere deinen Browser, um PluraPolit korrekt darzustellen.",
        "googlePlay": "Bitte installiere die neueste Version deines Browsers aus dem PlayStore, um Plurapolit korrekt darzustellen.",
        "appStore": "Bitte update dein Betriebssystem in den Einstellungen, um PluraPolit korrekt darzustellen."
      },
		}
	}
});
