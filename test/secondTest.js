const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require ("assert");
//var should = require("chai").should();

//describe block
describe("add Second todo tests", function(){

    //it block
    it("successfully add a todo to application", async function(){
    //launch the browser
    let driver =await new Builder().forBrowser("firefox").build();


    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/")

    //add a todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Sab learns Selenium", Key.RETURN);

    //assert
    let todoText = await driver.findElement(By.css("ul>li:last-child")).getText().then(function(value){
        return value
    });

    //assert using node assertion
    assert.strictEqual(todoText,"Sab learns Selenium");

    //assert using chai should
    //todoText.should.equal("Sab learn Selenium");

    //close the browser
    await driver.quit();
        
    });

});






