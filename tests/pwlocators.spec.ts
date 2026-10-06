/*
Locator Method Use Case 
page.getByRole() Locate elements by accessibility roles like button, checkbox, 
heading, etc. 
page.getByText() Locate by visible text content. 
page.getByLabel() Locate form controls using associated label text. 
page.getByPlaceholder() Locate inputs via placeholder text. 
page.getByAltText() Locate images by their alternative text (alt attribute). 
page.getByTitle() Locate elements by their title attribute. 
page.getByTestId() Locate by a custom data attribute like data-testid. 

*/

//1. page.getByAltText() Locate images by their alternative text (alt attribute).

 import { test, expect, Locator } from '@playwright/test';

 test("Verify Playwright Locator ", async ({ page }) => {


      await page.goto("https://automationexercise.com/");

      const logo: Locator = await page.getByAltText("Website for automation practice");

      await expect(logo).toBeVisible();

      //getByAltText() method is used to locate the image by its alternative text (alt attribute) and verify that it is visible on the page.


    //   const text:Locator=page.getByText("Website for automation");
    //   await expect(text).toBeVisible();

    //click getbyRole Link

    await page.getByRole('link', { name: ' Signup / Login' }).click();

    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByLabel('Username').fill('john.cova@gmail.com');

    await page.getByRole('textbox', { name:'password' }).fill('Password123'); 

    await page.goto("http://127.0.0.1:5500/tests/app.html");

    await page.getByAltText('logo image').isVisible();

     






 })