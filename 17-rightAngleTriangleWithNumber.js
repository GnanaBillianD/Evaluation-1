"use strict";
let n= 4;
let printNumberPattern= "";
let count =1

for (let i=0 ; i<n; i++){
    for (let j=0 ; j<=i; j++){
        printNumberPattern += count + " ";
        count++;
    }
        printNumberPattern += "\n";
        // console.log(s)
        // s = "";
}
console.log(printNumberPattern);