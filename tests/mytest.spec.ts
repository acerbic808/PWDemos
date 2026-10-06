import {test,expect} from '@playwright/test';


//fixture-global variable: page, browser

test("Verify page title",async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

let title:string= await page.title();

console.log("Title of the page is: "+title);  

await expect(page).toHaveTitle("Practice Page");

})