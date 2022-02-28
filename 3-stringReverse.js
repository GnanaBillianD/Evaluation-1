"use strict"
//let a = "abcd";
// let reverse = "";
// if (typeof a === "string") {
//     for (let i = 1; i <= a.length; i++) {
//         let b = a[a.length - i];
//         reverse = reverse + b;//dcba
//     }
// } else {
//     console.log("enter string value")
// }

// console.log(a.split(""));//separator is an empty string (""), string is converted to an array
// console.log(a.split("");//splits a string into an array of substrings.it does not change the original string.
// console.log(a.reverse(""))
//split(separator, limit)// The separator can be a simple string or it can be a regular expression. 

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;//we can use pop method to change a array length, pop remove the last element of the array.
console.log(clothes[0]);

//array// push pop
console.log(0.1 + 0.3 === 0.4)//true
console.log(0.1 + 0.2 === 0.3)//0.1 + 0.2 could be stored internally as 0.30000000000000004
//both 0.1 and 0.2 can't be expressed exactly in the binary system, therefore rounding errors can influence the result

console.log(myVar); //undefined, because we can declare the "var" variable at anywhere
console.log(myLet); //error, because the "let" variable is a temporal red zone, we Cannot access 'myLet' before initialization
console.log(myConst);//error, because the "const" variable is a strict mode, Cannot access 'myConst' before initialization

var myVar = 'value';
const myConst = 3.14;
let myLet ='qwe';


