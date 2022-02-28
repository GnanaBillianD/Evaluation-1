"use strict";
let i, j, k;
let number=10
let odd = 1;
let space = 5;
let pattern = "";

for (i = 0; i <number; i++) {

    if (odd % 2 != 0) {
        for (j = 1; j < space; j++) {
            pattern = pattern + " ";
        } space--;

        for (k = 0; k < odd; k++) {
            pattern += "*";
        }

        pattern += "\n";
    }
    odd++;
}
//reverse
console.log(odd)
odd--;
odd--;
odd--;

for (i = 0; i < number; i++) {

    if (odd % 2 != 0) {
        for (j = 0; j <=space; j++) {
            pattern = pattern + " ";
        } space++;

        for (k = 0; k < odd; k++) {
            pattern += "*";
        }

        pattern += "\n";
    }
    odd--;
}
console.log(pattern);