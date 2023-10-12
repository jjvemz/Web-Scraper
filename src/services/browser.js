const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try{
        console.log("Opening the brwoser...");
        browser = await puppeteer.launch({
            headless:false,
            args:["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    }catch(error){
        console.log("Error in starting the browser", error);
    }
    return browser;
}

module.exports = {
    startBrowser 
}