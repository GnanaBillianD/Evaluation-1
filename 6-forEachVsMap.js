"use strict";
a=[1,2,3,4,5];

let foreach = a.forEach((num,index)=> {return a[index] = num * 2});//return undefined, at the same time Returns original array with transformed elements
console.log(a);//doen't create a new array


let b=[6,7,8,9]
let map = b.map(num=>  num * 2);
console.log(map)//Returns new array with transformed elements, leaving back original array unchanged.
console.log(b);//no changes in original array
