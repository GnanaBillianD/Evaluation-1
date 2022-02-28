"use strict";
let count = 1;
let numberOfRows = 4;
let space = 3;
let pattern = "";
for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < space; j++) {
        pattern += ' ';
    } space = space - 1;
    for (let k = 0; k <= i; k++) {
        pattern += count + " ";
        count++;
    }
    pattern += '\n';
}
console.log(pattern);






















// reverse
// space =1;
// for (let i = 1; i < numberOfRows; i++) {
//     for (let j = 0; j < space; j++) {
//         pattern += ' ';
//     } space = space + 1;
//     for (let k = 0; k < numberOfRows - i; k++) {
//         pattern += "*" + " ";
//         count++;
//     }
//     pattern += '\n';
// }
// console.log(pattern);