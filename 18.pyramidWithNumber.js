"use strict";
let count = 1;
let n = 5;
let pattern = "";
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < n; j++) {
        pattern += ' ';
    } n = n - 1;
    for (let k = 0; k < i; k++) {
        pattern += count + " ";
        count++;
    } pattern += '\n';
}
console.log(pattern);

// //reverse
// n=1;
// for (let i = 1; i < 5; i++) {
//     for (let j = 0; j < n; j++) {
//         pattern += ' ';
//     } n = n + 1;
//     for (let k = 0; k < 5-i; k++) {
//         pattern += count + " ";
//         count++;
//     } pattern += '\n';
// }
// console.log(pattern);