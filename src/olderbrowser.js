/* eslint-disable */

var outdatedBrowserRework = require("outdated-browser-rework");
import "outdated-browser-rework/dist/style.css";

outdatedBrowserRework({
  browserSupport: {
    Chrome: 56,
    Edge: 16,
    Safari: 11,
    "Mobile Safari": 12,
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
			url: "https://www.browser-update.org/de/update.html"
		}
	}
});
