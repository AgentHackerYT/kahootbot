const puppeteer = require('puppeteer')
async function kahoot(pin){
  var i = 0
  setInterval(() =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
 await page.goto("https://kahoot.it")
   await page.waitForSelector(".sc-gTgzIj" , {timeout: 60000000})
   await page.type(".sc-gTgzIj" , pin)
    await page.click(".sc-cYKKGz")
    await page.waitForSelector(".sc-fKFyDc")
            await page.type(".sc-gTgzIj" , `that-kahoot-bot ${i++}`)
            await page.click(".sc-fKFyDc")
  })
}
module.exports.KahootRaid = kahoot
                 
