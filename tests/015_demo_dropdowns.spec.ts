//dropdowns
import {test, expect, Locator} from '@playwright/test';

const pageUrl= "https://sdetqa.vercel.app/autoplay.html";

test.describe ('Handling dropdowns', ()=>{


test.beforeEach(async ({page}) => {


await page.goto(pageUrl);
await expect(page.getByText('AutoPlay')).toBeVisible();


});

test('single select dropdown',async({page})=>{

   const countrySelect= page.locator('#country');
   await expect(countrySelect).toBeVisible();
   
   //default selection india
   await expect(countrySelect).toHaveValue('india');

   //3 ways to selction option

   //1. using label
   //2 using attribute
   //3. Using index

   //selectOption()

   //select by visible text

await countrySelect.selectOption({label: 'USA'});
// await countrySelect.selectOption('USA') : this is also label
await expect(countrySelect).toHaveValue('usa');

//select by option value:

await countrySelect.selectOption({value:'uk'});
await expect(countrySelect).toHaveValue('uk');

//select by index: starting 0
await countrySelect.selectOption({index:3});
await expect(countrySelect).toHaveValue('germany');

//validate dropdown options count

const options=countrySelect.locator('option') ; //locator chaining
await expect(options).toHaveCount(5);

//direct count

const option_multiple= page.locator('#country option');
await expect(option_multiple).toHaveCount(5);

//validate options contain Germany

const optionTexts= await options.allTextContents();
console.log("string array with options is: "+optionTexts);
expect(optionTexts).toContain("Germany");

for (const option of optionTexts){

    console.log(option);
}

await page.waitForTimeout(1200)

    
})



test('multi select dropdown', async({page})=>{

const colorSelect=page.locator('#colors');
//initial selected value should be blue
await expect(colorSelect).toHaveValue('blue');

//page.waitForTimeout(1200);

//select multiple options by labels:
await colorSelect.selectOption([{label:'Red'},{value: 'green'},{index:3}]); 

//page.waitForTimeout(1200);





})


test.only('Sorted options in a d/d',async({page})=>{


    const dropdownoptions=await page.locator('#colors option').allTextContents();

    console.log("options in dropdown",dropdownoptions);
    const originalList=[...dropdownoptions];
    const sortedList=dropdownoptions.sort();
    //console.log('original list: ', originalList);
//sort the options list

console.log('original list', originalList);
console.log('sorted list', dropdownoptions);
//expect(originalList).toEqual(sortedList); 






})

})

