const browserObject = require('./services/browser');
const scraperController = require('./controller/pageController');

let browserInstance = browserObject.startBrowser();

scraperController(browserInstance);