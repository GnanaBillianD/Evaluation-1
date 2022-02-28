//Even numbers are divisible by 2 without remainders.
// Odd numbers are not evenly divisible by 2 

"use strict";
// let n = 100;
// let odd = 0;
// let even = 0;
// let i = 1;
// if (typeof n === "number") {
//   while (i <= n) {
//     if (i % 2 == 0) {
//       even += i;
//     } else {
//       odd += i;
//     }
//     i++;
//   }
//   console.log("sum of the number: " + odd);
//   console.log("sum of the even number: " + even);

// } else {
//   console.log("please enter the number only")
// }


// console.log("-----------------------sum of theodd and even number method1-------------------------------")
// let stored_Natural_Number = []; 
// let even = 0; 
// let odd = 0;
// function oddEven(number) {
//   for (let i = 1; i <= number; i++) { stored_Natural_Number.push(i); }
//   return stored_Natural_Number.filter((element) => element % 2 == 0 ? even += element : odd += element);
// }
// oddEven(10);
// console.log("sum of the odd number: " + odd,"," + " sum of the even number: " + even)




console.log("----------------------sum of the odd and even number----------------------------")

let even1 = 0; 
let odd1 = 0;
function oddEven1(n) {
   Array.from({length:n +1},function(value,index){ index % 2 == 0 ? even1 += index : odd1 += index});
}
oddEven1(10);
console.log("sum of the even1 number: " +even1);
console.log("sum of the odd1 number: " +odd1);