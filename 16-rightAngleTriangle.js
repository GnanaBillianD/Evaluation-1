"use strict";
let rows= 6;
let printPattern= "";

for (let i=0 ; i< rows; i++){
    for (let j=0 ; j<=i; j++){
        printPattern += "*";
    }
        printPattern += "\n";//create a new line
}
console.log(printPattern);