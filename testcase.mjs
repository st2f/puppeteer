import puppeteer from 'puppeteer';

// launch browser
const browser = await puppeteer.launch({
    args: [`--no-sandbox`,`--disable-setuid-sandbox`, `--ignore-certificate-errors`],
    ignoreHTTPSErrors: true
});
const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 500 })

// visit url 
await page.goto('https://site2.app.localhost')
await page.locator('.post-title').wait();

// take screenshot
await page.screenshot({
    path: 'tmp/browser2.png'
});

// close browser
await browser.close()

