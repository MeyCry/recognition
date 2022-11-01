const UAParser = require('ua-parser-js');
const app = require('../app');

app.get('/browser-extension/install', function (req, res) {
  const userAgent = req.headers['user-agent'];
  const parser = new UAParser(userAgent);
  const browserName = parser.getBrowser().name;

  switch (browserName) {
    case 'Chrome':
      res.redirect(
        'https://chrome.google.com/webstore/detail/aura/fjbgpaheigpmkbdkdfghmkbnkpeofmhh'
      );
      break;
    case 'Firefox':
      res.redirect('https://addons.mozilla.org/en-GB/firefox/addon/aura-password-manager/');
      break;
    case 'Edge':
      res.redirect(
        'https://microsoftedge.microsoft.com/addons/detail/aura/mkmbincnnhhahnbjpkennmhnmdonijfa'
      );
      break;
    default:
      res.redirect(
        'my.aura.com'
      );
  }
});
