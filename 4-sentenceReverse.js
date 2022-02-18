// let a = " hi i am billian";
// console.log(a.split(" ").reverse().join(" "))//'billian am i hi '



// console.log(a.split(""));//[' ', 'h', 'i', ' ', 'i', ' ', 'a', 'm', ' ', 'b', 'i', 'l', 'l', 'i', 'a', 'n']
// console.log(a.split(" "));//['', 'hi', 'i', 'am', 'billian']
// console.log(a.split(" ").reverse());//['billian', 'am', 'i', 'hi', '']





"use strict";
let a = " hi i am billian";
let b = "";
let g = "";
let f = "";

if (typeof a === "string") {
    for (let i = 1; i <= a.length; i++) {
        let c = a[a.length - i];
        b += c; //naillib , ma, i , ih
        if (c == " ") {
            for (let j = 1; j <= b.length; j++) {
                let e = b[b.length - j];
                g += e;//billian, am , i ,hi
            }
            f += g;//billian am i hi
            b = "";//empty the string
            g = "";//emoty the string
        }
    }
} else {
    console.log("please enter the string value only")
}
console.log(f);