//Natural number => the positive integers (whole numbers) 1, 2, 3,etc..
"use strict";
// let sum = 0;
// let a = 10;
// if (typeof a === "number") {
//     for (let i = 1; i <= a; i++) {
//         sum += i;
//     }
//     console.log(sum);
// } else {
//     console.log("please enter the number only")
// }


let natural_Number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum_Of_The_Natural_Number = natural_Number.reduce((a,b) => a + b);
console.log(sum_Of_The_Natural_Number);