"use strict";
let n = 10;
let odd = 0;
let even = 0;
let i = 1;
if (typeof i === "number") {
  while (i <= n) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
    i++;
  } console.log(odd, even);
} else {
  console.log("please enter the number only")
}
