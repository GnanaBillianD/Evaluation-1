//The Math.floor() is round the decimal number(ex: 1.97654433 = 1)
//Math.random() => The default random number always generated between 0 and 1. 
//If you want to specific range of values, you have to multiply the returned value with the magnitude of the range.
"use strict";
function random(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        let c = Math.floor(Math.random() * (b-a) + a );
        console.log(c);
    } else {
        console.log("please the number only")
    }
}
random(1, 10);

