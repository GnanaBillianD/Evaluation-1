"use strict";
function random(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        let c = Math.floor(Math.random() * (b - a) + a);
        console.log(c);
    } else {
        console.log("please the number only")
    }
}
random(1, 10);