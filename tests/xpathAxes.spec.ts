import { expect, Locator, test } from "@playwright/test"

test("Xpath Axes demo", async ({ page }) => {

await page.goto("https://www.w3schools.com/html/html_tables.asp");
//self axis

const germancyCell: Locator = page.locator("//td[text()='Germany']/self::td");

//could also use textContent() to verify the text of the cell
await expect(germancyCell).toHaveText("Germany");
await page.waitForTimeout(2000);

//parent axis

const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
await expect(parentRow).toContainText("Maria Anders");
console.log("Parent row of Germany cell:", await parentRow.textContent());
await page.waitForTimeout(1000);

//child axis

const secondRowCells: Locator=page.locator("//table[@id='customers']//tr[2]/child::td");

await expect(secondRowCells).toHaveCount(3);
console.log("Second row cells count:",await secondRowCells.count());
console.log("Second row cells text:",await secondRowCells.allTextContents());
await page.waitForTimeout(1000);

//ancestor axis

const table: Locator = page.locator("//td[text()='Germany']/ancestor::table");
await expect(table).toBeVisible();
await expect(table).toHaveAttribute("id", "customers");
await page.waitForTimeout(1000);

//descendant axis, get all <td> elements in the table using descendant axis

const allTds: Locator = page.locator("//table[@id='customers']/descendant::td");
await expect(allTds).toHaveCount(18);
console.log("Total number of cells in the table:", await allTds.count());
await page.waitForTimeout(1000);

//following axis, get all <td> elements that come after the Germany cell

const followingCell: Locator = page.locator("//td[text()='Germany']/following::td[1]");
await expect(followingCell).toHaveText("Centro comercial Moctezuma");
console.log("First cell following Germany cell:", await followingCell.textContent());
await page.waitForTimeout(1000);

//following-sibling axis, get the <td>s to the right of Germany
const rightsiblings: Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td");
await expect(rightsiblings).toHaveCount(1);
console.log("Right siblings of Maria Anders cell:", await rightsiblings.textContent());
await page.waitForTimeout(1000);

//preceding axis, get all <td> elements that come before the Germany cell
const precedingCell: Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(precedingCell).toHaveText("Maria Anders");
console.log("First cell preceding Germany cell:", await precedingCell.textContent());
await page.waitForTimeout(1000);

//preceding-sibling axis, get the <td>s to the left of Germany
const leftsiblings: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
await expect(leftsiblings).toHaveCount(2);
console.log("Left siblings of Germany cell:", await leftsiblings.allTextContents());

await expect(leftsiblings.first()).toHaveText("Alfreds Futterkiste");
await expect(leftsiblings.nth(1)).toHaveText("Maria Anders");

await page.waitForTimeout(1000);


})


