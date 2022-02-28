// //a word or sequence that reads the same backwards as forwards
// "use strict";
// let a = "racecar";
// let reverse1 = "";

// if (typeof a === "string") {
//     for (let i = 1; i <= a.length; i++) {
//         let b = a[a.length - i];
//         reverse1 += b;
//     }
//     // console.log(reverse1);
//     if (reverse1 == a)
//         console.log(a + " is a palindrome ");
//     else
//         console.log(a + " is not a palindrome");

// } else {
//     console.log("please enter string only")
// }


let word = "madam";
let reverse = word.split("").reverse().join("");
if(reverse == word){console.log(word + " is a palindrome ");}
else{console.log(a + " is not a palindrome");}
