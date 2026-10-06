//automate static web table

import { test, expect, Locator } from '@playwright/test';

test('validate Product Table', async ({ page }) => {


await page.goto("https://sdetqa.vercel.app/autoplay");

//functional validation of table

await page.waitForTimeout(3000);

const table =page.locator('table').nth(0); //page.locator('table').first()
const headers=table.locator('thead th'); // thead tr th and locator chaining
const rows=table.locator('tbody tr'); // tbody tr and locator chaining

//1&2. verify row and column count
const columnCount = await headers.count();

const rowCount = await rows.count();

console.log('Column count is: '+columnCount);
console.log('Row count is: '+rowCount);

expect(columnCount).toBe(5); // Adjust the expected column count as needed 
expect(rowCount).toBe(4); // Adjust the expected row count as needed

//3. Read all the data from 3rd row:

const thirdRowCells=rows.nth(2).locator('td'); // 3rd row and locator chaining

console.log('Third row locator is: '+thirdRowCells);

const thirdRowCellsData= await thirdRowCells.allTextContents();

console.log('Data in 3rd row: ',thirdRowCellsData);
await expect(thirdRowCells).toHaveText(['Keyboard', 'Electronics', '$79', '0', 'Out of Stock'])

//4. Real all the data in table and print in console

const tableData: string[][]=[];
const rowCount1=await rows.count();

console.log(`Table headers are:`, await headers.allTextContents());

for (let r=0;r<rowCount1;r++){

const cellValues=await rows.nth(r).locator('td').allInnerTexts();
tableData.push(cellValues);
console.log(`Row ${r+1} data: `,cellValues);

}


//5. Print all product Names, column 1 data

const productNames: string[]=[];

//through tabledata looping and printing column 1 data

for (let r=0;r<tableData.length;r++){
productNames.push(tableData[r][0]);
}

console.log('Product Names are: ',productNames);

expect(productNames).toEqual(['Laptop', 'Mouse', 'Keyboard', 'Monitor']);

//6. Print products where stock=0==> Keyboard


const outOfStock: string[] = [];

for (let r=0;r<tableData.length;r++){
    if (tableData[r][3] === '0') { // Assuming stock is in the 4th column (index 3)
        outOfStock.push(tableData[r][0]);
    }
}

console.log('Products with stock=0 are: ', outOfStock);

expect(outOfStock).toEqual(['Keyboard']);

//7. print products where status is 'In Stock'==> Laptop, Mouse, Monitor

const inStock: string[] = [];

for (let r=0;r<tableData.length;r++){
    if (tableData[r][4] === 'In Stock') { // Assuming status is in the 5th column (index 4)
        inStock.push(tableData[r][0]);
    }
}

console.log('Products with status "In Stock" are: ', inStock);

expect(inStock).toEqual(['Laptop', 'Mouse', 'Monitor']);



//8,9: count number of products in 'In Stock' and 'Out of Stock' status

const inStockCount = inStock.length;
const outOfStockCount = outOfStock.length;

console.log('In Stock Count: ', inStockCount);
console.log('Out of Stock Count: ', outOfStockCount);

//10. Get the price of specific prodct, e.g., 'Mouse' ==> $29

let mousePrice;

 for (let r=0;r<tableData.length;r++){
    if (tableData[r][0] === 'Mouse') { // Assuming product name is in the 1st column (index 0)
        mousePrice = tableData[r][2]; // Assuming price is in the 3rd column (index 2)
        break;
    }

 }


console.log('Price of Mouse is: ', mousePrice);

expect(mousePrice).toBe('$29');

//11. Data processing calculate total price of all products in table


let totalPrice=0;

for (let r=0;r<tableData.length;r++){

totalPrice=totalPrice+Number(tableData[r][2].replace('$',''));


}

console.log('Total price of all products is: ', totalPrice);

expect(totalPrice).toBe(999+29+79+349); // Adjust the expected total price as needed


})


test.only('Validate Crud product table', async({page})=> {

await page.goto("https://sdetqa.vercel.app/autoplay");

console.log('Crud table validation started');

await page.getByPlaceholder('Name').fill('Jane');
await page.getByPlaceholder('Role').fill('Good Engineer');

const add_button= page.getByRole('button', {name: 'Add'});
await add_button.click();
await page.waitForTimeout(4000);

    const TableRows: Locator = page.locator('table#dynamicTable tbody tr');
    const rowCount=await TableRows.count();
    console.log("Total number of rows in table are: "+rowCount);

    const NewTableRow: Locator=TableRows.nth(2);

    const newRocells=NewTableRow.locator('td');
    const newRowData=await newRocells.allTextContents();

    expect(newRowData).toEqual(['3', 'Jane', 'Good Engineer', 'Delete' ]);

    console.log("Newly added row data is: ",newRowData);
    






})
