//css (cascading style sheets) locators are used to locate elements on a web page using CSS selectors. They are commonly used in web automation and testing frameworks to interact with web elements.

import {test, expect, Locator} from '@playwright/test';

test("Verify Playwright Locator ", async ({page}) => {
  
  await page.goto("https://demowebshop.tricentis.com/");
  
  await expect(page.locator('input#small-searchterms')).toBeVisible();

  await page.locator('input#small-searchterms').fill('T-Shirts');

  await page.waitForTimeout(3000);

  //tag.class

  await page.locator('input.search-box-text').fill('T-shirts using tag.class');

  await page.waitForTimeout(3000);

  await page.locator('[name=q]').fill('T-shirts using attribute name csss selector');

  await page.waitForTimeout(3000);

  await page.locator(".search-box-text[value='Search store']").fill('T-shirts using class and attribute name csss selector');
 
  await page.waitForTimeout(3000);




})