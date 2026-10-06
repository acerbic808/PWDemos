import {test,expect,Locator} from '@playwright/test';

test('Bootstrap dropdown',async({page})=>{

//open browse and navigate to orangeHRm
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// assertion login
await expect(page.getByRole('heading', {name: 'Login'})).toBeVisible();

const UsrName:Locator=page.getByRole('textbox', {name:'username'});
await UsrName.fill('Admin');
await expect(UsrName).toHaveValue('Admin');


const Pwd:Locator=page.getByRole('textbox', {name:'password'});
await Pwd.fill('admin123');
await expect(Pwd).toHaveValue('admin123');

//Login button click

await page.getByRole('button',{name:'Login'}).click();

//pim click and visible

await expect(page.getByRole('link',{name: 'PIM'})).toBeVisible();

await page.getByRole('link',{name: 'PIM'}).click();

//6.clicking on job titile d/d:

const jobTitleDropDown= page.locator('form i').nth(2);
await jobTitleDropDown.click();

await page.waitForTimeout(5000);


//7.check dropdown options are visible or not
const options=page.locator("div[role='listbox'] span");
await expect(options.first()).toBeVisible();

//8.capturing options in dropdown and printing in console


const count=await options.count();
console.log("Total options in dropdown are: "+count);

//9. get text of all options

const optionTexts:string[]= await options.allTextContents();
console.log("Texts of all options are: ", optionTexts);

//10. iterate through options and print each option text

for(let i=0;i<count;i++){

    const option=options.nth(i);
    const optionText=await options.nth(i).textContent();
    console.log("Option "+(i+1)+" is: "+optionText);


  if(optionText==="Automaton Tester"){
    await option.click();
    console.log("Clicked on option: "+optionText);
    break;

}

}


//verification of selected option

await expect(page.locator('.oxd-select-text-input').nth(2)).toHaveText('Automaton Tester');


await page.waitForTimeout(3000);



})
