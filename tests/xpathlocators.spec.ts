//xpathlocators.spec.ts

import {test,expect,Locator} from "@playwright/test";

test("Xpath demo in playwright",async ({page})=>{

    //1. abs xpath:logo

    await page.goto("https://demowebshop.tricentis.com/");

    const absolutelogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");

    await expect(absolutelogo).toBeVisible();

    //2. Relative xpath-logo

    const relativelogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");

    await expect(relativelogo).toBeVisible();

    //3. contains()

    const products:Locator= page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount= await products.count();
    console.log("Total Number of Computer related products count: "+productsCount); //4
    expect(productsCount).toBeGreaterThan(0);

    //console.log(await products.textContent()); //Error: strict mode violation: locator resolved to 4 elements. Use locator.nth(index) to restrict to a single element.


    console.log("First computer related product:", await products.first().textContent());
    console.log("Last computer related product:", await products.last().textContent());
    console.log("Nth(0) computer related product:", await products.nth(0).textContent());  //index starts from 0
   


    
    let productTitles: string[]=await products.allTextContents();
    console.log("All compuer related products titles:",productTitles);

    for(let pt of productTitles){
        console.log(pt);
    }

    //4. starts-with()

    const buildingProducts:Locator= page.locator("//h2/a[starts-with(@href,'/build')]"); //multiple elements
    const count:number=await buildingProducts.count();
    expect(count).toBeGreaterThan(0);

    //5. text()


const reglink:Locator= page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();    

//6. last()

const lastitem:Locator= page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastitem).toBeVisible();
console.log("Last item in follow us section:",await lastitem.textContent());

//7.position()
    const positionitem:Locator= page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionitem).toBeVisible();
    console.log("Text content of positional element:",await positionitem.textContent());

    



})