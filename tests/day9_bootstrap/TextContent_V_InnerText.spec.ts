import {expect, test, Locator} from '@playwright/test';

test('Comparing both textContent and innerText',async({page})=>{


await page.goto("https://demowebshop.tricentis.com/");


const products=page.locator('.product-title');

//inner text vs textcontent

console.log('innerText of first product is: '+await products.nth(1).innerText());
console.log('textContent of first product is: '+await products.nth(1).textContent());

const text=await products.nth(1).textContent();

console.log('textContent of first product is (textContent() with trim()): '+text?.trim());

//it means if(text!==null && text!=undedefined) then trim it and print it


})

test.only('Comparing AllinnerText and allTextContent',async({page})=>{


await page.goto("https://demowebshop.tricentis.com/");


const products=page.locator('.product-title');
let productNames_i=await products.allInnerTexts();
let productNames_t=await products.allTextContents();



console.log('innerText of all products is: ', productNames_i);

console.log('textContent of all products is: ', productNames_t);

let productNames_t_Trimmed=productNames_t.map((text) => text?.trim());

console.log('textContent of all products is (textContent() with trim()): ', productNames_t_Trimmed);


// all(): converts locator to array of locators

let pdoductsArray=await products.all();

for (const product of pdoductsArray){   

console.log('innerText of product is USING FOR LOOP: '+await product.innerHTML());

}
})