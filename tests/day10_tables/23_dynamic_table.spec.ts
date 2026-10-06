//dynamic table

import {expect, test, Locator} from '@playwright/test';

test.describe('Dynamic Table',()=>{

test.beforeEach('Navigate to the file upload page',async({page})=>{

await page.goto("https://sdetqa.vercel.app/autoplay.html"); 
await expect(page.getByText('AutoPlay')).toBeVisible();

await expect(page.getByRole('heading',{name: 'Dynamic System Processes Table'})).toBeVisible();


await page.waitForTimeout(3000);


})

test('Test Case 1: Chrome CPU Load Validation', async ({ page }) => {
    const rows = await page.locator('table#taskTable tbody tr').all();

    // Basic validations
    expect(rows.length).toBeGreaterThan(0);

    let cpuLoad = '';

    for (const row of rows) {
      const processName = await row.locator('td').nth(0).innerText();
      if (processName === 'Chrome') {
        cpuLoad = await row.locator("td", { hasText: '%' }).innerText();
        const expectedCpu = await page.locator('strong.chrome-cpu').innerText();
        expect(cpuLoad).toBe(expectedCpu);
        break;
      }
    }

    // Validate Chrome row found
    expect(cpuLoad).not.toBe('');

    // Validate format
    expect(cpuLoad).toContain('%');

    const label = page.locator('strong.chrome-cpu');

    // Validate label visible
    await expect(label).toBeVisible();

    // Final validation
    await expect(label).toContainText(cpuLoad);
  });

})