import {test,expect,Locator} from "@playwright/test";

test('Text Input Actions', async ({page})=>{


await page.goto("https://testautomationpractice.blogspot.com");

//text input box

const textBox: Locator= page.locator("#name")

await expect (textBox).toBeVisible();

await expect (textBox).toBeEnabled();

const maxLength: string | null = await textBox.getAttribute("maxlength");//returns the value of the maxlenght attribute`

console.log("Max length of the text box is: "+maxLength);

expect(maxLength).toBe("15");

await textBox.fill("John Doe");

console.log("Text in the text box is: "+await textBox.textContent()); // returns empty

const enteredValue: string= await textBox.inputValue(); //returns the value of the input field

expect(enteredValue).toBe("John Doe");

await page.waitForTimeout(1200);



})

test('Radio Button Actions', async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");

const maleRadio: Locator = page.locator("#male"); // male radio button

await expect(maleRadio).toBeVisible();

await expect(maleRadio).toBeEnabled();

expect(await maleRadio.isChecked()).toBe(false);

await maleRadio.check(); //select the male radio button

expect(await maleRadio.isChecked()).toBe(true);

await expect(maleRadio).toBeChecked(); //preferable

await page.waitForTimeout(1200);


})



test('CheckBox Actions', async ({page})=> {

await page.goto("https://testautomationpractice.blogspot.com");

// 1. select specific checkbox (Sunday) using getByLabel and assert

// const sundayCheckbox: Locator= page.getByLabel("Sunday");

// await sundayCheckbox.check();

// await expect(sundayCheckbox).toBeChecked();


await page.waitForTimeout(1200);

//select all checkboxes and assert each is checked

const days: string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// for(let day of days){

//     const checkbox: Locator= page.getByLabel(day);  
//     await checkbox.check();
//     await expect(checkbox).toBeChecked();
// }

const checkboxes: Locator[]= days.map(index=>page.getByLabel(index));
expect(checkboxes.length).toBe(7);

//3. select all checkboxes using for...of loop and assert each is checked

    for (const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(1200);




// checkboxes.forEach(async (checkbox: Locator)=> await checkbox.check());

// checkboxes.forEach(async (checkbox: Locator)=> await expect(checkbox).toBeChecked());


//4.  unCheck last 3 checkboxes and assert each is checked

        for (const checkbox of checkboxes.slice(-3)) {

    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }


        

await page.waitForTimeout(1200);

//5 Toggle checkboxes: if checked, uncheck; if unchecked, check, Assert flipped state

for (const checkbox of checkboxes) {
    const isChecked = await checkbox.isChecked();
    if (isChecked) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    } else {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}

await page.waitForTimeout(1200);


// 6. Randomly select checkboxes- select checkboxes by index (1,3,6) and assert

const indexes: number[]=[1,3,6];

for (const i of indexes) {
    const checkbox: Locator = checkboxes[i];
    await checkbox.check();
    await expect(checkbox).toBeChecked(); 
}

await page.waitForTimeout(1200);


})

test.only('Single text input checkbox select', async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");






})

