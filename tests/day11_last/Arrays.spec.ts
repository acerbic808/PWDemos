// =========  forEach(), map(), filter(), reduce(), some(), every() ==============


// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

// Ex 1: Get index of all the fruites along with value.
let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];


// console.log("Printing fruits along with Index using for-in:");
// for (let i in fruits) {
//     console.log(i, fruits[i]);
// }

//console.log("Printing fruits along with Index using forEach():");

// fruits.forEach(function (element, index) {
//     console.log(`${index}. ${element}`);
// });


//Using arrow function

// fruits.forEach((element, index) => {
//     //console.log(`${index} , ${element}`); //Print the values as string
// 	console.log(index,element);  //Printing values directly
//     }
// );



/*
Output:
0. apple
1. banana
2. orange
3. mango
4. kiwi
*/

let numbers: number[] = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); // Output: [2, 4]