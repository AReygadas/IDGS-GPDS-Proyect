const {By,Key,Builder} = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");
require("chromedriver");

async function example(){
   
      var searchString = "Automation testing with Selenium";
       let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("http://localhost:3000");
        await driver.findElement(By.id("us")).sendKeys("a.reygadas@gmail.com" ,Key.RETURN);
        await driver.findElement(By.id("pass")).sendKeys("1236" ,Key.RETURN);
        await driver.findElement(By.id("send")).click();
        

        var title = await driver.getTitle();
        console.log('Title is:',title);

       
}  
example()