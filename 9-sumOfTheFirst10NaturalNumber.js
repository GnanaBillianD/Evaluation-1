"use strict";
let sum = 0;
if (typeof sum === "number") {
    for (let i = 1; i <= 10; i++) {
        sum += i;
    } console.log(sum);
} else {
    console.log("please enter the number only")
}
